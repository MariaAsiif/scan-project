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
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { GrPrevious, GrNext } from "react-icons/gr";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
function Contact(props) {
  return (
    <div>
      <div className="wrapper">
        <div>
          <img src={props.img} />
        </div>
        <div className="info-section">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
        </div>
        <div className="contact-section">
          <a href={`mailto:${props.email}`}> <MdEmail /></a>
          <a href={`tel:${props.phone_number}`}><MdPermPhoneMsg />   </a>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="Next_arrow" >
      <GrNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="Prev_arrow" >
      <GrPrevious />
    </div>
  );
}

export default function ContactUs() {

  var settings = {
    arrows: true,
    dots: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  let infoData = [
    {
      img: expert1,
      name: "Khalid Mahmood Malik, PhD, PMP",
      info: "Possess extensive experience of industry and academic research in areas of  AI in Cybersecurity with focus on multimedia forensics and automated knowledge graph generation using AI. ",
      phone_number: "(212) 555-1234",
      email: "mahmood@oakland.edu",
    },
    {
      img: expert2,
      name: "Ali Javed, PhD, PostDoc",
      info: "Have expertise in the fields of Video Summarization, Image Processing, Computer Vision Software Quality, Multimedia Forensics, Machine Learning, Medical Image Processing",
      phone_number: "(92) 334-5174516",
      email: "alyjaved.uet@gmail.com",
    },
    {
      img: expert3,
      name: "Umer Farooq, Research Assistant",
      info: "Worked as a research assistant at Smiles lab, Oakland University as a data scientist Also worked as a frontend developer with vast experience in React Js.",
      phone_number: "(92) 304-0130380",
      email: "softwareengineerumar@gmail.com",
    },
    {
      img: expert4,
      name: "Talha Usman",
      info: "Software Engineering student with offering services on Fiverr in Machine Learning and Deep Learning I am a dedicated, hardworking and honest individual.",
      phone_number: "(92) 348-6942408",
      email: "talhausman369@gmail.com",
    },
    {
      img: expert5,
      name: "Zakriya Rehman",
      info: "Motivated, Ambitious, and Enthusiastic learner with learning in a continuous process, always motivated to explore and learn something new and productive.",
      phone_number: "(92) 316-0557117",
      email: "zakria.rehman962@gmail.com",
    },
    {
      img: expert6,
      name: "Dr. Khalid Malik",
      info: "Passionate, problem solver and loves reading with interest in gym and writing. Works in machine learning and deep learning",
      phone_number: "(212) 555-1234",
      email: "memanasraza@gmail.com",
    },
  ]
  return (
    <Container id="contact" sx={{ marginBottom: "50px" }}>
      <h1
        style={{ fontSize: "48px", textAlign: "center", marginBottom: "30px", color: "#163E7B" }}  >
        Contact Us
      </h1>
      <div style={{ gap: "20px", alignItems: "center", }} >
        <Slider {...settings}  >
          {infoData.map((info, index) => (
            <Contact
              key={index}
              img={info.img}
              name="Khalid Mahmood Malik, PhD, PMP"
              info="Possess extensive experience of industry and academic research in areas of 
                AI in Cybersecurity with focus on multimedia forensics and automated knowledge graph generation using AI. "
              phone_number="(212) 555-1234"
              email="mahmood@oakland.edu"
            />



          ))}

        </Slider>
      </div>
    </Container>
  );
}
