import React from "react";
import "./Profilecss.css";
import ashokimg from "../../ashok/Ashok_Profile.jpeg"

const Profile = () => {
  return (
    <div className="box">
      <div className="d-flex profile container  rounded flex-wrap">
        <div className=" d-flex justify-content-center mx-5 ashokImg">
          <img
            className="rounded-circle"
            src={ashokimg}
            alt="ashok-zarmariya"
          />
        </div>
        <div className="summry">
          <h1 className="my-2">Deepanshu Mehra</h1>
          <div className="blue">Full-Stack Web Devloper</div>
          <hr className="border border-light" />
          <p>
          When I first attended the Masai School workshop at that time I was in my class 12 and I didn't know much about coding. But after the workshop, I realized that this domain has much more opportunity and growth. So I decided to join Masai School and pursue a career in software development.
          </p>
          <button className="btn btn-dark border"><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/1TcO4bISHm3_RwyDR6jzV9RrKrGPcxRxW/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a> </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
