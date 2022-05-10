import React from "react";

const card = () => {
  return (
    <div className=" d-flex justify-content-center">
      <a
        className="mx-2"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshumehra2102@gmail.com"
        data-toggle="tooltip"
        title="deepanshumehra2102@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope fs-2"></i>
      </a>

      <a
        className="mx-2"
        href="https://github.com/dmehra2102"
        data-toggle="tooltip"
        title="Github"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github fs-2" />
      </a>
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/deepanshu-mehra-14a472233/"
        data-toggle="tooltip"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fs-2"> </i>
      </a>
      <a
        className="mx-2"
        href="tel:8920752152"
        data-toggle="tooltip"
        title="8920752152"
      >
        {" "}
        <i class="fa fa-phone fs-2" aria-hidden="true" target="_blank"></i>{" "}
      </a>
    </div>
  );
};

export default card;
