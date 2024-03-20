import React from "react";
import "./MainBody.css";

export const MainBody = () => {
  return (
    <div className="Main-div">
      <div className="Myself" id="Myself">
        <div>
          <img src="/Profile.jpg" className="Profile"></img>
        </div>
        <div>
          <h1 className="font1 font-extrabold text-6xl text-[#c35c17]">Hello,</h1>
          <div className="flex gap-6 items-center justify-center">
            <p className="font-bold text-3xl text-[#391e0b]">I'm </p>

            <p className="font1 font-extrabold text-6xl text-[#c35c17]">Swarnali Nath</p>
          </div>
          <h4 className="font-bold text-1xl text-[#391e0b]">
            Web Developer | Avid learner of new technologies
          </h4>
          <div className="flex justify-center">
            <button className="bg-white text-black rounded px-5 py-1.5 mt-6 hover:bg-[#c35c17] hover:shadow-lg hover:text-white">
              Get in touch!
            </button>
          </div>
        </div>
      </div>
      <div id="About" className="About">
        <div>
          <h2 className="about_text_head">About Myself</h2>
          <p>
            Hello, my name is Angela, and I believe that focusing on your
            company's data security plan is essential to growing your company's
            business. With over 10 years of experience in information and data
            security, my knowledge and skills can help you create effective
            security strategies. My dedication to creating comprehensive data
            security plans can also help your company improve its data integrity
            and increase customer retention.
          </p>
          <div className="abtbtnbox">
            <button className="abtbtn">Get CV</button>
          </div>
        </div>

        <img src="/Working.jpg" className="About_img"></img>
      </div>
      <div>
        <div className="Edu-cer">
          <div className="Education">
            <h1 className="font1 font-extrabold text-6xl text-[#c35c17]">Education</h1>
            <div className="Education-details">
              <h3 className="font-bold text-2xl text-[#391e0b]">2020-2024</h3>
              <div className="ml-10 text-[#391e0b]">
                <p>Assam University, Silchar</p>
                <p>B.Tech in CSE</p>
              </div>
            </div>
            <div className="Education-details">
              <h3 className="font-bold text-2xl text-[#391e0b]">2018-2020</h3>
              <div className="ml-10 text-[#391e0b]">
                <p>Maharshi Vidya Mandir, Silchar</p>
                <p>Higher Secondary(Class 12th)</p>
              </div>
            </div>
            <div className="Education-details">
              <h3 className="font-bold text-2xl text-[#391e0b]">2018</h3>
              <div className="ml-24 text-[#391e0b]">
                <p>Holy Cross Convent School, Dharmanagar</p>
                <p>HSLC(Class 10th)</p>
              </div>
            </div>
          </div>
          <div className="Certifications">
            <h1 className="font1 font-extrabold text-6xl text-[#c35c17]">Certifications</h1>
            <div className="mt-5">
              <p className="mt-3 text-[#391e0b]">JavaScript Algorithm and Data Structure</p>
              <p className="mt-3 text-[#391e0b]">NLP workshop from IEEE</p>
              <p className="mt-3 text-[#391e0b]">Intelligent Computing(ISIC)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-skill">
        <div>
          <h1 className="font1 font-extrabold text-6xl">Technical Skills</h1>
          <div className="skills">
            <div className="skills1">
              <h3 className="font2 font-bold text-4xl flex justify-center">
                Web Development
              </h3>
              <div className="skills11">
                <div>
                  <p className="font-bold text-2xl">Basic knownledge of : </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="ml-16">
                  <p className="font-bold text-2xl">Frameworks : </p>
                  <ul>
                    <li>React Js</li>
                    <li>Next Js</li>
                    <li>Node Js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skills2">
              <h3 className="font2 font-bold text-4xl">Languages</h3>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box">
          <p className="font1 font-extrabold text-6xl text-[#391e0b]">Experience</p>
          <ul>
            <li>
              <p className="font2 font-bold text-3xl text-[#79431e]">Dec 2023 - Present</p>
              <p>1Nurse, Singapore (Internship)</p>
            </li>
            <li>
              <p className="font2 font-bold text-3xl mt-3 text-[#79431e] ">
                June 2023 - July 2023
              </p>
              <p>C-DAC, Silchar (Internship)</p>
            </li>
            <li>
              <p className="font2 font-bold text-3xl mt-3 text-[#79431e]">June 2022</p>
              <p>NIELIT, Silchar (Summer Traning)</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="others">
        <div>
          <p className="font1 font-extrabold text-4xl text-[#391e0b]">Activities</p>
          <ul className="text-[#8a512c]">
            <li>IEEE</li>
            <li>Rotaract Club, AUS</li>
          </ul>
        </div>
        <div>
          <p className="font1 font-extrabold text-4xl text-[#391e0b]">Languages</p>
          <ul className="text-[#8a512c]">
            <li>English</li>
            <li>Hindi</li>
            <li>Bengali</li>
          </ul>
        </div>
        <div>
          <p className="font1 font-extrabold text-4xl text-[#391e0b]">Hobbies & Interests</p>
          <div className="flex gap-20">
            <ul className="text-[#8a512c]">
              <li>Dancing</li>
              <li>Singing</li>
              <li>Drawing</li>
              <li>Guitar</li>
            </ul>
            <ul className="text-[#8a512c]">
              <li>Designing</li>
              <li>Writing Poems</li>
              <li>Listening Song</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Projects text-black" id="Projects">
      <h1 className="font1 font-extrabold text-6xl">Projects</h1>
        <div>
        <div className="">
          <div className="flex justify-center">
            <img src="/star.png" className="Project-star"></img>
          </div>
          <p className="font1 font-extrabold text-4xl flex justify-center">
            Portfolio
          </p>
          <p>
            Hello there, this is a website created by me which showcase my work
            and talent on Web Development{" "}
          </p>
          <p className="font2 font-bold text-3xl mt-3">
            Technology Used : React Js, Tailwind CSS
          </p>
        </div>

        <hr className="w-72 mt-6 "></hr>

        <div className="">
          <div className="flex justify-center">
            <img src="/star.png" className="Project-star"></img>
          </div>
          <p className="font1 font-extrabold text-4xl flex justify-center">
            Weather
          </p>
          <p> Upcoming, Lets give an overview about it </p>
        </div>
        <hr className="w-72 mt-6 "></hr>
        <div>
          <div className="flex justify-center">
            <img src="/star.png" className="Project-star"></img>
          </div>
          <p className="font1 font-extrabold text-4xl flex justify-center">
            To-do-list
          </p>
          <p>Upcoming</p>
          <div className="flex gap-20"></div>
        </div>
        <hr className="w-72 mt-6 "></hr>
        </div>
      </div>
    </div>
  );
};
