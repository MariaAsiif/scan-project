import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Alert, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import Box from '@mui/material/Box';
import scannerPic from "../static/media/scanner-image2.png"
import { fontWeight } from "@mui/system";
export default function ScannerSection() {
  const [model, setmodel] = useState("efficientNet")
  const [clip, setclip] = useState("audio")
  const [file, setFile] = useState("");
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
  const onSubmit = async (e) => {
    e.preventDefault();
    if (file === "") {
      setErrorMsg("Please select a video to scan.");
      handleClick();
    } else {
      const formData = new FormData();
      const blob = file
      if (clip === "audio" && blob.type !== "audio/mpeg") {
        setErrorMsg("Please upload a audio file.");
        handleClick();
        return
      }

      if (clip === "video" && blob.type !== "video/mp4") {
        setErrorMsg("Please upload a video file");
        handleClick();
        return
      }
      setLoading(true);

      formData.append("file", file);

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
        console.log("Res" , res )

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
            <InputLabel id="select-model" sx={{ color: "#163E7B", }}   >
              Choose Model
            </InputLabel>
            <Select value={model} onChange={(e) => { setmodel(e.target.value) }} labelId="select-model" id="select-model" label="Choose Model"
              sx={{ maxHeight: "50vh", marginTop: "5px", ".MuiSvgIcon-root": { color: "black", }, color: "black", "& .MuiSelect-select": { paddingBlock: "12px", }, "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
            >
              <MenuItem value="efficientNet">Efficient Net</MenuItem>
              <MenuItem value="resNet">Res Net</MenuItem>
              <MenuItem value="denseNet">Dense Net</MenuItem>
            </Select>
          </FormControl>

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




          <div style={{ marginBottom: 15 }} >
            <Button component="label" variant="outlined" className="upload_button" startIcon={<CloudUploadIcon />}
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginTop: 1, marginBottom: 0, marginRight: 0, }}
            >
              Upload your file
              <input type="file" accept="audio/*,video/*" style={{ display: "none", }} id="customFile" onChange={onChange} />
            </Button>
          </div>
          <div>
            <Button variant="outlined"
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginTop: 1, marginBottom: 0, marginRight: 0, }} type="submit" onClick={onSubmit}  >
              SCAN
            </Button>
          </div>

          {isLoading ?
            (
              <>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#dcdcdc96" }}>
                  <Bars color="#163E7B" width="100%" />
                  <p style={{ textAlign: "center", fontSize: 23, fontWeight: 600 }}>File is loading</p>
                </div>

              </>

            ) : (
              <p style={{ textAlign: "center", color: "#fff" }}>{result}</p>

            )}

        </Grid>

      </Grid>
    </Box>
  );
}
