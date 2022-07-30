import React from "react";
import uet from "./../static/media/work2.jpg";
import vid from "./../static/media/deepfake-video.mp4";
import Navbar from "./Navbar";
import ScannerSection from "./ScannerSection";
import ContactUs from "./ContactUs";
import { Container, Divider, Grid, Typography } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import './home.css'
import ReadMore from "./readmore";
import Box from '@mui/material/Box';
import goalsPic from "../static/media/goals_pic.png"
export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundPosition: "top", backgroundSize: "100%", backgroundImage: `url(${uet})`, paddingBlock: "200px", }}  >
        <Container>
          <h2 style={{ color: "#fff", fontSize: "2rem", width: "fit-content", marginInline: "auto", padding: "5px 15px", borderRadius: "15px", background: "rgba(0,0,0,0.75)", cursor: "default", }}>
            Multimedia Signal Processing Lab
          </h2>
        </Container>
      </div>
      <Container id="deep-fake" sx={{ paddingBlock: "20px", }} >
        <Grid container sx={{ paddingTop: "40px" }}>
          <Grid ite xs={12} sm={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }} >
            <h1>What are DeepFakes</h1>
            <p style={{ textAlign: "justify" }}>
              Deepfakes are synthetic media in which a person in an existing
              image or video is replaced with someone else's likeness. While the
              act of faking content is not new, deepfakes leverage powerful
              techniques from machine learning and artificial intelligence to
              manipulate or generate visual and audio content with a high
              potential to deceive.
            </p>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}  >
            <video style={{ maxWidth: "100%", borderRadius: "20px", }} controls   >
              <source src={vid} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      </Container>
      <Container id="models">

        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "20px", marginTop: "40px", }}   >
          Pre Trained Models
        </h2>
        <Grid container spacing={5} sx={{ marginTop: "20px", marginBottom: "40px" }}  >
          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}  >
            <div className="r">
              <div className="cardbox">
                <div className="card facebook">
                  <div className="card-front">
                    <h3>EfficientNet</h3>
                  </div>
                  <div className="card-back">
                    EfficientNet is a convolutional neural network architecture and scaling method that uniformly
                    scales all dimensions of depth/width/resolution using a compound coefficient. Unlike
                    conventional practice that arbitrary scales these factors, the EfficientNet scaling method
                    uniformly scales network width, depth, and resolution with a set of fixed scaling coefficients.
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}   >
            <div className="r">
              <div className="cardbox">
                <div className="card facebook">
                  <div className="card-front_1">
                    <h3>DenseNet</h3>
                  </div>
                  <div className="card-back">
                    A DenseNet is a type of convolutional neural network that utilises dense connections
                    between layers, through Dense Blocks, where we connect all layers with matching feature-map sizes
                    directly with each other. To preserve the feed-forward nature, each layer obtains additional
                    inputs from all preceding layers and passes on its own feature-maps to all subsequent layers.
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}  >
            <div className="r">
              <div className="cardbox">
                <div className="card facebook">
                  <div className="card-front_2">
                    <h3>ResNet</h3>
                  </div>
                  <div className="card-back">
                    Residual Networks, or ResNets, learn residual functions with reference to the layer inputs,
                    instead of learning unreferenced functions. Instead of hoping each few stacked layers directly
                    fit a desired underlying mapping, residual nets let these layers fit a residual mapping. They
                    stack residual blocks ontop of each other to form network: e.g. a ResNet-50 has fifty layers using
                    these blocks.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <ScannerSection />
      <Box id="goals" py={8} px={3}  >
        <Grid container   >
          <Grid item md={6} sx={{ display: "flex", justifyContent: "center", }}   >
            <Box>
              {/* <h2 style={{ color: "#163E7B", fontSize: "29px" }}> Future Goals</h2> */}
              <Typography variant="h3" style={{ fontWeight: 600, color: "#163E7B", }} component="h2">
                Future Goals
              </Typography>
              <ReadMore>
                Explainable and Fairness enabled hybrid anomaly, signature and deep reinforcement learning based
                fake multimedia detection models and anti-forensics techniques against adversarial attacks
                using game theory on these developed models. Personalized, privacy-preserved based decision
                support system to predict neurological disorders and conditions such as subarachnoid hemorrhage
                and ischemic stroke by using federated, knowledge-infused learning, and deep learning models.
                Develop secure, voice-controlled, explainable AI-based decision support systems for
                cyberphysical system (CPS) by designing
              </ReadMore>
            </Box>


          </Grid>
          <Grid item md={6}  >
            <Box>
              <img style={{ width: "100%" }} src={goalsPic} />
            </Box>
          </Grid>
        </Grid>

        {/* <div className="goals_heading">
          <h2> Future Goals</h2>
          <ReadMore>
            Explainable and Fairness enabled hybrid anomaly, signature and deep reinforcement learning based
            fake multimedia detection models and anti-forensics techniques against adversarial attacks
            using game theory on these developed models. Personalized, privacy-preserved based decision
            support system to predict neurological disorders and conditions such as subarachnoid hemorrhage
            and ischemic stroke by using federated, knowledge-infused learning, and deep learning models.
            Develop secure, voice-controlled, explainable AI-based decision support systems for
            cyberphysical system (CPS) by designing
          </ReadMore>
        </div> */}
      </Box>
      <ContactUs />
      <Container>
        <Divider />
        <div style={{ paddingBlock: "50px", display: "flex", justifyContent: "space-between", }}   >
          <p>Copyright 2022 - Smiles Lab</p>
          <ul style={{ listStyleType: "none", display: "flex", gap: "20px", }}  >
            <li>
              <a href="linkedIn" className="social-link">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="instagram" className="social-link">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="twitter" className="social-link">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
