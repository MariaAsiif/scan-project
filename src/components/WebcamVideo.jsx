import React from "react";
import Webcam from "react-webcam";
import "./modal.css";
import {
  Alert,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";

export default function WebcamVideo() {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <div className="Container">
      <Webcam
        height={420}
        width={420}
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <Button
          style={{
            width: "100%",
            display: "block",
            margin: "12px 0",
            padding: "12px 0px",
          }}
          variant="outlined"
          sx={{
            width: "fit-content",
            textTransform: "none",
            color: "black",
            border: "3px solid #163E7B",
            "&:hover": { border: "3px solid #636fbd" },
            marginBottom: 0,
            marginRight: 0,
          }}
          onClick={handleStopCaptureClick}
        >
          Stop Recoding
        </Button>
      ) : (
        <Button
          style={{
            width: "100%",
            display: "block",
            margin: "12px 0",
            padding: "12px 0px",
          }}
          variant="outlined"
          sx={{
            width: "fit-content",
            textTransform: "none",
            color: "black",
            border: "3px solid #163E7B",
            "&:hover": { border: "3px solid #636fbd" },
            marginBottom: 0,
            marginRight: 0,
          }}
          onClick={handleStartCaptureClick}
        >
          Start Recoding
        </Button>
      )}
      {recordedChunks.length > 0 && (
        <Button
          style={{
            width: "100%",
            display: "block",
            margin: "12px 0",
            padding: "12px 0px",
          }}
          variant="outlined"
          sx={{
            width: "fit-content",
            textTransform: "none",
            color: "black",
            border: "3px solid #163E7B",
            "&:hover": { border: "3px solid #636fbd" },
            marginBottom: 0,
            marginRight: 0,
          }}
          onClick={handleDownload}
        >
          Download
        </Button>
      )}
    </div>
  );
}
