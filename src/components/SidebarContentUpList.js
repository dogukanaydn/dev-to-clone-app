import React from "react";
import SidebarContentUpListItem from "./SidebarContentUpListItem";
import { RiFileList3Line } from "react-icons/ri";
import { GiRead, GiEggPod } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import { BsTagFill } from "react-icons/bs";

export default function SidebarContentUpList() {
  return (
    <React.Fragment>
      <SidebarContentUpListItem
        icon={<GiRead className="sidebar-content-svg" />}
        name="Reading List"
        value="5"
      />
      <SidebarContentUpListItem
        icon={<RiFileList3Line className="sidebar-content-svg" />}
        name="Listings"
      />
      <SidebarContentUpListItem
        icon={<GiEggPod className="sidebar-content-svg" />}
        name="Podcasts"
      />
      <SidebarContentUpListItem
        icon={<ImVideoCamera className="sidebar-content-svg" />}
        name="Videos"
      />
      <SidebarContentUpListItem
        icon={<BsTagFill className="sidebar-content-svg" />}
        name="Tags"
      />
    </React.Fragment>
  );
}
