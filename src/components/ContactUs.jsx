import React from "react";
import "./ContactUs.css";
import expert1 from "./../static/media/khalid.jpg";
import expert2 from "./../static/media/ali.jpg";
import expert3 from "./../static/media/umer.jpg";
import expert4 from "./../static/media/talha.jpg";
import expert5 from "./../static/media/zakriya.jpeg";
import expert6 from "./../static/media/anas.jpg";
import { Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="person" />
      <h3>{props.name}</h3>
      <div className="info-text">
        <p>{props.info}</p>
      </div>
      <div className="info-group">
        <div>
          <PhoneIcon />
          <a href={`tel:${props.phone_number}`} className="contact-link">
            {props.phone_number}
          </a>
        </div>
        <div>
          <EmailIcon />
          <a href={`mailto:${props.email}`} className="contact-link">
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Container id="contact" sx={{ marginBottom: "50px" }}>
      <h2
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Contact Us
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Contact
          img={expert1}
          name="Khalid Mahmood Malik, PhD, PMP"
          info="Possess extensive experience of industry and academic research in areas of 
                AI in Cybersecurity with focus on multimedia forensics and automated knowledge graph generation using AI. "
          phone_number="(212) 555-1234"
          email="mahmood@oakland.edu"
        />
        <Contact
          img={expert2}
          name="Ali Javed, PhD, PostDoc"
          info="Have expertise in the fields of Video Summarization, Image Processing, Computer Vision,
                Software Quality, Multimedia Forensics, Machine Learning, Medical Image Processing"
          phone_number="(92) 334-5174516"
          email="alyjaved.uet@gmail.com"
        />
        <Contact
          img={expert3}
          name="Umer Farooq, Research Assistant"
          info="Worked as a research assistant at Smiles lab, Oakland University as a data scientist
                Also worked as a frontend developer with vast experience in React Js."
          phone_number="(92) 304-0130380"
          email="softwareengineerumar@gmail.com"
        />
        <Contact
          img={expert4}
          name="Talha Usman"
          info="Software Engineering student with offering services on Fiverr in Machine Learning and Deep Learning.
                I am a dedicated, hardworking and honest individual."
          phone_number="(92) 348-6942408"
          email="talhausman369@gmail.com"
        />
        <Contact
          img={expert5}
          name="Zakriya Rehman"
          info="Motivated, Ambitious, and Enthusiastic learner with learning in a continuous process, always 
                motivated to explore and learn something new and productive."
          phone_number="(92) 316-0557117"
          email="zakria.rehman962@gmail.com"
        />
        <Contact
          img={expert6}
          name="Dr. Khalid Malik"
          info="Passionate, problem solver and loves reading with interest in gym and writing. Works in machine
                learning and deep learning"
          phone_number="(212) 555-1234"
          email="memanasraza@gmail.com"
        />
      </div>
    </Container>
  );
}
