import React, { useRef } from "react";
import "./style.css";
import myimg from "./JAANU.jpeg";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li onClick={() => scrollToSection(home)} className="nav-link">
            Home
          </li>
          
          <li onClick={() => scrollToSection(skills)} className="nav-link">
            Skills
          </li>
          <li onClick={() => scrollToSection(projects)} className="nav-link">
            Projects
          </li>
          <li onClick={() => scrollToSection(contact)} className="nav-link">
            Contact
          </li>
        </ul>
      </div>
      <div ref={home} className="section">
        <h3 className="heading">Home</h3>
        <table>
          <tr>
            <td>
              <h3 className="info">Welcome!</h3>
              <h3 className="info">I am KONETI JAHNAVI</h3>
              <h3 className="info">
                Resume link{" "}
                <a
                  href="https://drive.google.com/file/d/14b__sWmgiR88-qikYpOwIKekkSHdEhYv/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here
                </a>
              </h3>
              <h3 className="info">
                Currently engaged in MERN fullstack internship by{" "}
                <a href="https://www.ethnus.com" target="blank">
                  ethnus
                </a>{" "}
                , Cloud practitioner internship by{" "}
                <a href="https://aws.amazon.com/" target="blank">
                  AWS
                </a>{" "}
              </h3>
            </td>
            <td>
              <img src={myimg} alt="My img" />
            </td>
          </tr>
        </table>
      </div>
      <div ref={about} className="section"></div>
      <div ref={skills} className="section">
        <h3 className="heading">My skills</h3>
        <ul>
          <li>Languages: Java, R, Python, SQL, HTML, CSS, PHP</li>
          <li>Libraries: NUMPY, PANDAS, Tensorflow, Keras</li>
          <li>Technical: Data Structures, Deep Learning, Machine Learning, Computer Networks</li>
          <li>Basic knowledge in fundamentals of data analytics</li>
          <li>Strong mathematical and logical reasoning abilities</li>
          <li>Good at problem solving and decision making</li>
        </ul>
      </div>
      <div ref={projects} className="section">
        <h3 className="heading">Projects</h3>
        <ul>
          <li>Image caption generation using Deep learning Models such as Auto encoder and decoder</li>
          <li>Fire Fighting Robot. A robot which can extinguish fire automatically if it detects a fire.</li>
          <li>Stock market prediction using LSTM (Machine Learning Algorithm)</li>
          <li>A website for booking a room in a resort using HTML, CSS, JS, and PHP</li>
          <li>Portfolio using HTML, CSS, and JavaScript</li>
        </ul>
      </div>
      <div ref={contact} className="section">
        <h3 className="heading">Contact</h3>
        <ul>
          <li>Email - jahnavikoneti41@gmail.com</li>
          <li>Contact Number - 8247477929</li>
          <li>
            GitHub link <a href="https://github.com/jahnavikoneti21">Click me</a>
          </li>
          <li>
            LinkedIn link{" "}
            <a href="https://www.linkedin.com/in/jahnavi-koneti21/">
              Click me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
