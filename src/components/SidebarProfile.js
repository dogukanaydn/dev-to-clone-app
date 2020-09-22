import React from "react";

export default function SidebarProfile() {
  return (
    <a
      href="#profile"
      aria-label="profile-settings"
      className="sidebar-profile "
    >
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--fZ_0alTr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/461917/586fea2f-0522-4b7e-ba67-3dc0e96a76d7.png"
        alt="Profile-Image"
      />
      <div className="sidebar-profile-details">
        <h4>Doğukan Aydın</h4>
        <small>@ddogukanaydn</small>
      </div>
    </a>
  );
}
