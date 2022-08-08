import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Alert, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField, } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import Box from '@mui/material/Box';
import scannerPic from "../static/media/scanner-image2.png"
import { fontWeight } from "@mui/system";
import logo from '../static/media/loader3.gif'
export default function ScannerSection() {
  const [model, setmodel] = useState("efficientNet")
  const [clip, setclip] = useState("audio")
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  console.log("file", file)
  console.log("fileUrl", fileUrl)

  const onSubmit = async (e) => {
    e.preventDefault();
    if (file === "" && fileUrl === "") {
      setErrorMsg("Please select a video to scan.");
      handleClick();
    }


    else {


      const formData = new FormData();
      const blob = file

      if (fileUrl) {
        let valid = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(fileUrl);
        if (valid === false) {
          setErrorMsg("File url is not correct ")
          handleClick();
          return

        }
      }

      else if (clip === "audio" && blob.type !== "audio/mpeg") {
        setErrorMsg("Please upload a audio file.");
        handleClick();
        return
      }

      else if (clip === "video" && blob.type !== "video/mp4") {
        setErrorMsg("Please upload a video file");
        handleClick();
        return
      }



      if (file !== "" && fileUrl !== "") {
        setErrorMsg("Kindly select one field ")
        handleClick();
        return
      }

      setLoading(true);

      formData.append("file", file);
      formData.append("fileurl", fileUrl);


      try {
        const res = await axios.post(
          "/prediction",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Res", res)

        JSON.stringify(res);
        if (res.status === 200) {
          setResult(res.data);
        }
      } catch (err) {
        if (err || err.response.status === 500) {
          setErrorMsg("There was a problem with the server");
        } else {
          setErrorMsg(err.response.data.msg);
        }
        handleClick();
      }
      setLoading(false);
    }
  };

  return (
    <Box id="scanner" py={8} px={3} style={{ background: "#F5F5F5", }}   >
      <Grid container spacing={5}  >
        <Grid item md={6}  >
          <Box>
            <img id="scannerimage" src={scannerPic} />
          </Box>
        </Grid>
        <Grid item md={6}    >
          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={open} autoHideDuration={3000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="error" sx={{ width: "100%", background: "#d74545", color: "#fff", svg: { color: "#fff", }, }}  >
              {errorMsg}
            </Alert>

          </Snackbar>
          <h2 style={{ fontSize: "48px", textAlign: "center", marginBottom: "20px", color: "#163E7B", }} >Deep fake Scanner</h2>


          <FormControl sx={{ width: "40%", marginBottom: 2, marginRight: 2 }}  >
            <InputLabel id="select-clip" sx={{ color: "#163E7B", }}   >
              Choose clip
            </InputLabel>
            <Select value={clip} onChange={(e) => { setclip(e.target.value) }} labelId="select-clip" id="select-clip" label="Choose Clip"
              sx={{ maxHeight: "50vh", marginTop: "5px", ".MuiSvgIcon-root": { color: "black", }, color: "black", "& .MuiSelect-select": { paddingBlock: "12px", }, "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
            >
              <MenuItem value={"audio"}>audio</MenuItem>
              <MenuItem value={"video"}>video</MenuItem>
              <MenuItem value={"multimode/both"}>multimode/both</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: "40%", marginBottom: 2, marginRight: 2 }}  >
            <InputLabel id="select-model" sx={{ color: "#163E7B", }}   >
              Choose Model
            </InputLabel>
            <Select value={model} onChange={(e) => { setmodel(e.target.value) }} labelId="select-model" id="select-model" label="Choose Model"
              sx={{ maxHeight: "50vh", marginTop: "5px", ".MuiSvgIcon-root": { color: "black", }, color: "black", "& .MuiSelect-select": { paddingBlock: "12px", }, "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
            >
              {clip === "video" && <MenuItem value="efficientNet">Efficient Net</MenuItem>}
              {clip === "video" && <MenuItem value="resNet">Res Net</MenuItem>}
              {clip === "video" && <MenuItem value="denseNet">Dense Net</MenuItem>}
              {clip === "audio" && <MenuItem value="AAA">AAA</MenuItem>}
              {clip === "multimode/both" && <MenuItem value="M">M</MenuItem>}
            </Select>
          </FormControl>


          <FormControl sx={{ width: "40%", marginRight: 2 }}  >
            <Button component="label" variant="outlined" className="upload_button" endIcon={<CloudUploadIcon />}
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginBottom: 0, marginRight: 0, }}
              style={{ width: "100%", height: 49 }}
            >
              {file ? `${file.name}` : "Upload your file"}
              <input type="file" accept="audio/*,video/*" style={{ display: "none", }} id="customFile" onChange={onChange} />
            </Button>
          </FormControl>
          <FormControl sx={{ width: "40%", marginRight: 2 }}  >
            {/* <TextField value={fileUrl} style={{ width: '100%', }} onChange={(e) => { setFileUrl(e.target.value) }} labelId="outlined-basic" id="outlined-basic" label="http://www.url.com"
              sx={{ maxHeight: "40vh", marginTop: "5px", marginRight: '7rem', ".MuiSvgIcon-root": { color: "black", }, color: "black", "& .MuiSelect-select": { paddingBlock: "1px", }, "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
            /> */}
            <TextField
              label="http://www.url.com"
              onChange={(e) => { setFileUrl(e.target.value) }}
              sx={{ "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
              id="outlined-basic" variant="outlined" />
          </FormControl>


          <div>
            <Button style={{ width: "40%", marginTop: 17 }} variant="outlined"
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginTop: 1, marginBottom: 0, marginRight: 0, }} type="submit" onClick={onSubmit}  >
              SCAN
            </Button>
          </div>

          {isLoading ?
            (
              <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 99, background: "#dcdcdc96" }}>
                  <img src={logo} alt="loading..." />
                  {/* <Bars color="#163E7B" width="100%" /> */}
                  <p style={{ textAlign: "center", fontSize: 23, fontWeight: 600 }}>File is loading</p>
                </div>

              </>

            ) : (
              <p style={{ textAlign: "center", color: "#fff" }}>{result}</p>

            )}

        </Grid>

      </Grid>
    </Box >
  );
}
