import React from "react";
import SidebarContentUpItem from "./SidebarContentUpItem";
import { RiFileList3Line } from "react-icons/ri";
import { GiRead, GiEggPod } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import { BsTagFill } from "react-icons/bs";

export default function SidebarContentUpList() {
  return (
    <React.Fragment>
      <SidebarContentUpItem
        icon={<GiRead className="sidebar-content-svg" />}
        name="Reading List"
        value="5"
      />
      <SidebarContentUpItem
        icon={<RiFileList3Line className="sidebar-content-svg" />}
        name="Listings"
      />
      <SidebarContentUpItem
        icon={<GiEggPod className="sidebar-content-svg" />}
        name="Podcasts"
      />
      <SidebarContentUpItem
        icon={<ImVideoCamera className="sidebar-content-svg" />}
        name="Videos"
      />
      <SidebarContentUpItem
        icon={<BsTagFill className="sidebar-content-svg" />}
        name="Tags"
      />
    </React.Fragment>
  );
}
