import React from "react";
import { FaRegComment } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-left">
          <a href="#" aria-label="DEV Home">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="dev"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="dev-logo"
            >
              <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
            </svg>
          </a>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-right">
          <a href="#" className="new-post">
            Write a post
          </a>
          <a href="#" id="connect-link" aria-label="Connect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="a6y9hw1w52v19b0fkolzqw2783yzzljb"
              className="header-right-icon"
            >
              <title id="a6y9hw1w52v19b0fkolzqw2783yzzljb">Connect</title>
              <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
            </svg>
          </a>
          <a href="#" aria-label="Notifications">
            <RiNotification3Line className="header-right-icon" />
          </a>
          <a href="#profile" aria-label="profile-settings">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--fZ_0alTr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/461917/586fea2f-0522-4b7e-ba67-3dc0e96a76d7.png"
              alt="Profile-Image"
              className="profile-img"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
