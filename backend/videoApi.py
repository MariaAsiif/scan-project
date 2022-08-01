from fastapi import FastAPI, Request, Form
from starlette.responses import FileResponse
from fastapi import FastAPI
from fastapi import UploadFile, File
import uvicorn
import os
import torch
from PIL import Image
from torch.autograd import Variable
import torchvision.transforms as transforms
import cv2
from mtcnn import MTCNN
import shutil
import tempfile
import backend.model_big
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3011",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/savevideo')
async def root(file: UploadFile = File(...)):
    with open ('test.mp4', "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

@app.get('/test')
def read_root(request: Request):
    return {"Welcome"}

@app.get('/')
def form_post(request: Request):
    return {"Welcome"}
    
   

@app.post('/prediction')
def form_post(request: Request, file: UploadFile = File(...)):
    fake = 0
    real = 0
    detector = MTCNN()
    with open ('test.mp4', "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    cap= cv2.VideoCapture("test.mp4")
    i=1
    frameRate = cap.get(5)
    print("frameRate",frameRate)
    while(cap.isOpened()):
        frameId = cap.get(1)
        print("frameId",frameId)
        ret, frame = cap.read()
        if ret == False:
            break
        if frameId % ((int(frameRate)+1)*1) == 0:
            detections = detector.detect_faces(frame)
            for detection in detections:
                x,y,w,h = detection["box"]
                detected_face = frame[int(y):int(y+h), int(x):int(x+w)]
                pred = predict(detected_face)
                print(pred)
                if pred == 0:
                    real+=1
                else:
                    fake+=1
                
        i+=1
    print('hello1')
    cap.release()
    cv2.destroyAllWindows()
    var = {real:"real",fake:"fake"}
    r = var.get(max(var))
    if r == 'fake':
        result = 'DEEPFAKE DETECTED'
    else:
        result = 'NO DEEPFAKE DETECTED'
    # print("r : ", r)
    # result = "Video is " + r
    # print("result : ", result)
    return result


##    return {"number_spelled": result}
##    #result = spell_number(num)
##    transform_fwd = transforms.Compose([
##        transforms.Resize((300, 300)),
##        transforms.ToTensor(),
##        transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225)),
##        ])
##    pil = Image.open(file.file)
##    output = predict(pil)
##    img = transform_fwd(pil)
##    vgg_ext = src.model_big.VggExtractor()
##    capnet = src.model_big.CapsuleNet(5, -1)
##    capnet.load_state_dict(torch.load('model/capsule_25.pt',map_location=torch.device('cpu')))
##    capnet.eval()
##    input_v = Variable(img)
##    x = vgg_ext(input_v[None, ...])
##    classes, class_ = capnet(x, random=False)
##    output_dis = class_.data.cpu()
##    output_pred = torch.argmax(output_dis, dim=1).numpy()
####    return output_pred
    

def predict(image):
    transform_fwd = transforms.Compose([
        transforms.Resize((300, 300)),
        transforms.ToTensor(),
        transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225)),
        ])
    pil_img = Image.fromarray(image)
    img = transform_fwd(pil_img)
    vgg_ext = backend.model_big.VggExtractor()
    capnet = backend.model_big.CapsuleNet(5, -1)
    capnet.load_state_dict(torch.load('model/capsule_25.pt',map_location=torch.device('cpu')))
    capnet.eval()
    input_v = Variable(img)
    x = vgg_ext(input_v[None, ...])
    classes, class_ = capnet(x, random=False)
    output_dis = class_.data.cpu()
    output_pred = torch.argmax(output_dis, dim=1).numpy()
    return output_pred

    
