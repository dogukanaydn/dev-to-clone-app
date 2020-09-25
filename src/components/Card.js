import React from "react";
import { FaRegComment } from "react-icons/fa";
import { RiHeart2Line } from "react-icons/ri";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--LkHZ1ztk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/obzhaylsi0u7qrzbkhuc.jpg"
        className="card-cover-img"
      />

      {/* --------------------profile part-------------------- */}

      <div className="card-inside">
        <div className="card-profile">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--fZ_0alTr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/461917/586fea2f-0522-4b7e-ba67-3dc0e96a76d7.png"
            alt="Profile-Image"
            className="card-profile-img"
          />
          <div>
            <p className="card-profile-name">Doğukan Aydın</p>
            <p className="card-profile-date">Sep 22</p>
          </div>
        </div>

        {/* --------------------description part-------------------- */}

        <div className="card-desc-info">
          <p className="card-description">
            Pullstate - Simple hooks-based state management for React
          </p>
          <div className="card-tag">
            <span>#javascript</span>
            <span>#javascript</span>
            <span>#javascript</span>
            <span>#javascript</span>
          </div>
        </div>

        {/* --------------------reaction & comment part-------------------- */}

        <div className="card-bottom">
          <div className="card-react">
            <a href="#" className="card-react-link">
              <RiHeart2Line className="card-react-icons" />
              <span>15 reactions</span>
            </a>
            <a href="#" className="card-react-link">
              <FaRegComment className="card-react-icons" />
              <span>22 comments</span>
            </a>
          </div>
          <div className="card-bottom-right">
            <small className="card-bottom-sm">3 min read</small>
            <button className="card-bottom-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
