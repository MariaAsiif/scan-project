from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
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
import tempfile
import src.model_big

#from src.model import spell_number

app = FastAPI()
templates = Jinja2Templates(directory='templates/')


##def save_to_text(content, filename):
##    filepath = 'data/{}.txt'.format(filename)
##    with open(filepath, 'w') as f:
##        f.write(content)
##    return filepath


##@app.get('/')
##def read_form():
##    return 'hello world'

@app.get('/')
def form_post(request: Request):
    result = ''
    return templates.TemplateResponse('web.html', context={'request': request, 'result': result})


@app.post('/')
def form_post(request: Request, file: UploadFile = File(...)):
    #result = spell_number(num)
    transform_fwd = transforms.Compose([
        transforms.Resize((300, 300)),
        transforms.ToTensor(),
        transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225)),
        ])
    pil = Image.open(file.file)
    img = transform_fwd(pil)
    vgg_ext = src.model_big.VggExtractor()
    capnet = src.model_big.CapsuleNet(5, -1)
    capnet.load_state_dict(torch.load('model/capsule_25.pt',map_location=torch.device('cpu')))
    capnet.eval()
    input_v = Variable(img)
    x = vgg_ext(input_v[None, ...])
    classes, class_ = capnet(x, random=False)
    output_dis = class_.data.cpu()
    output_pred = torch.argmax(output_dis, dim=1).numpy()
##    return output_pred
    print(output_pred)
    if output_pred == 0:
        result = "Image is Real"
    else:
        result = "Image is Fake"
    print(result)
    #return result
    return templates.TemplateResponse('web.html', context={'request': request, 'result': result})


##@app.get('/checkbox')
##def form_post(request: Request):
##    result = 'Type a number'
##    return templates.TemplateResponse('checkbox.html', context={'request': request, 'result': result})
##
##
##@app.post('/checkbox')
##def form_post(request: Request, num: int = Form(...), multiply_by_2: bool = Form(False)):
##    result = spell_number(num, multiply_by_2)
##    return templates.TemplateResponse('checkbox.html', context={'request': request, 'result': result, 'num': num})
##
##
##@app.get('/download')
##def form_post(request: Request):
##    result = 'Type a number'
##    return templates.TemplateResponse('download.html', context={'request': request, 'result': result})
##
##
##@app.post('/download')
##def form_post(request: Request, num: int = Form(...), multiply_by_2: bool = Form(False), action: str = Form(...)):
##    if action == 'convert':
##        result = spell_number(num, multiply_by_2)
##        return templates.TemplateResponse('download.html', context={'request': request, 'result': result, 'num': num})
##    elif action == 'download':
##        # Requires aiofiles
##        result = spell_number(num, multiply_by_2)
##        filepath = save_to_text(result, num)
##        return FileResponse(filepath, media_type='application/octet-stream', filename='{}.txt'.format(num))
