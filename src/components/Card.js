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
      <div className="card-inside">
        <div className="card-profile">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--fZ_0alTr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/461917/586fea2f-0522-4b7e-ba67-3dc0e96a76d7.png"
            alt="Profile-Image"
            className="card-profile-img"
          />
          <div className="den1">
            <p className="card-profile-name">Doğukan Aydın</p>
            <p className="card-profile-date">Sep 22</p>
          </div>
        </div>

        <div className="den2">
          <p className="card-description">
            Pullstate - Simple hooks-based state management for React
          </p>
          <div className="card-tag">
            <span>#javascript</span>
            <span>#javascript</span>
            <span>#javascript</span>
            <span>#javascript</span>
          </div>
          {/* <div className="card-react-part">
            <div className="den3">
              <span>
                <RiHeart2Line className="card-react-part-icon" /> 30 reactions
              </span>
              <span>
                <FaRegComment className="card-react-part-icon" /> 30 comment
              </span>
            </div>
            <button>Save</button>
          </div> */}
        </div>
      </div>
      <div></div>
    </div>
  );
}
