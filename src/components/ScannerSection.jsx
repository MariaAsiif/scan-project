import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Alert, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import Box from '@mui/material/Box';
import scannerPic from "../static/media/scanner-image.jpg"
export default function ScannerSection() {
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
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/prediction",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

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
    // <main id="scanner" style={{ background: "linear-gradient(135deg, #FAB2FF 0%, #1904E5 100%)", paddingBlock: "100px", }}  >
    //   <Snackbar
    //     anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    //     open={open}
    //     autoHideDuration={3000}
    //     onClose={handleClose}
    //   >
    //     <Alert
    //       onClose={handleClose}
    //       severity="error"
    //       sx={{
    //         width: "100%",
    //         background: "#d74545",
    //         color: "#fff",
    //         svg: {
    //           color: "#fff",
    //         },
    //       }}
    //     >
    //       {errorMsg}
    //     </Alert>
    //   </Snackbar>
    //   <Container>
    //     <Grid
    //       component="form"
    //       container
    //       spacing={3}
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //       <Grid
    //         item
    //         xs={12}
    //         sm={6}
    //         sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
    //       >
    //         <h2>Deep Fake Scanner</h2>
    //         <FormControl
    //           sx={{
    //             width: "100%",
    //           }}
    //         >
    //           <InputLabel
    //             id="select-model"
    //             sx={{
    //               color: "#fff",
    //             }}
    //           >
    //             Choose Model
    //           </InputLabel>
    //           <Select
    //             labelId="select-model"
    //             id="select-model"
    //             label="Choose Model"
    //             sx={{
    //               maxHeight: "50vh",
    //               marginTop: "5px",
    //               ".MuiSvgIcon-root": {
    //                 color: "#fff",
    //               },
    //               color: "#fff",
    //               "& .MuiSelect-select": {
    //                 paddingBlock: "12px",
    //               },
    //               "& fieldset": {
    //                 border: "3px solid #fff",
    //               },
    //               "&:hover": {
    //                 "& fieldset": {
    //                   border: "3px solid #fff",
    //                 },
    //               },
    //             }}
    //           >
    //             <MenuItem value="efficientNet">Efficient Net</MenuItem>
    //             <MenuItem value="resNet">Res Net</MenuItem>
    //             <MenuItem value="denseNet">Dense Net</MenuItem>
    //           </Select>
    //         </FormControl>

    //         <Button
    //           component="label"
    //           variant="outlined"
    //           className="upload_button"
    //           startIcon={<CloudUploadIcon />}
    //           sx={{
    //             width: "fit-content",
    //             textTransform: "none",
    //             color: "#fff",
    //             border: "3px solid #fff",
    //             "&:hover": {
    //               border: "3px solid #636fbd",
    //             },
    //             marginTop: 1,
    //             marginBottom: 0,
    //             marginRight: 0,
    //           }}
    //         >
    //           Upload a Video
    //           <input
    //             type="file"
    //             accept=".mp4"
    //             style={{
    //               display: "none",
    //             }}
    //             id="customFile"
    //             onChange={onChange}
    //           />
    //         </Button>
    //         <Button
    //           variant="outlined"
    //           sx={{
    //             width: "fit-content",
    //             textTransform: "none",
    //             color: "#fff",
    //             border: "3px solid #fff",
    //             "&:hover": {
    //               border: "3px solid #636fbd",
    //             },
    //             marginTop: 1,
    //             marginBottom: 0,
    //             marginRight: 0,
    //           }}
    //           type="submit"
    //           onClick={onSubmit}
    //         >
    //           SCAN
    //         </Button>
    //       </Grid>
    //       <Grid item xs={12} sm={6}>
    //         {isLoading ? (
    //           <Bars color="white" width="100%" />
    //         ) : (
    //           <p style={{ textAlign: "center", color: "#fff" }}>{result}</p>
    //         )}
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </main>

    <Box id="goals" py={8} px={3}  >
      <Grid container spacing={5}  >
        <Grid item md={6}  >
          <Box>
            <img style={{ width: "100%" }} src={scannerPic} />
          </Box>
        </Grid>
        <Grid item md={6}    >
          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={open} autoHideDuration={3000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="error" sx={{ width: "100%", background: "#d74545", color: "#fff", svg: { color: "#fff", }, }}  >
              {errorMsg}
            </Alert>

          </Snackbar>
          <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#163E7B" }} >Deep Fake Scanner</h2>
          <FormControl sx={{ width: "100%", }}  >
            <InputLabel id="select-model" sx={{ color: "#163E7B", }}   >
              Choose Model
            </InputLabel>
            <Select labelId="select-model" id="select-model" label="Choose Model"
              sx={{ maxHeight: "50vh", marginTop: "5px", ".MuiSvgIcon-root": { color: "black", }, color: "black", "& .MuiSelect-select": { paddingBlock: "12px", }, "& fieldset": { border: "3px solid #163E7B", }, "&:hover": { "& fieldset": { border: "3px solid #163E7B", }, }, }}
            >
              <MenuItem value="efficientNet">Efficient Net</MenuItem>
              <MenuItem value="resNet">Res Net</MenuItem>
              <MenuItem value="denseNet">Dense Net</MenuItem>
            </Select>
            <Button component="label" variant="outlined" className="upload_button" startIcon={<CloudUploadIcon />}
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginTop: 1, marginBottom: 0, marginRight: 0, }}
            >
              Upload a Video
              <input type="file" accept=".mp4" style={{ display: "none", }} id="customFile" onChange={onChange} />
            </Button>
            <Button variant="outlined"
              sx={{ width: "fit-content", textTransform: "none", color: "black", border: "3px solid #163E7B", "&:hover": { border: "3px solid #636fbd", }, marginTop: 1, marginBottom: 0, marginRight: 0, }} type="submit" onClick={onSubmit}  >
              SCAN
            </Button>
          </FormControl>
        </Grid>

      </Grid>
    </Box>
  );
}
