import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Nieuwe Playlist",
    icon: <PlaylistAddIcon />,
    link: "/playlist/create",
  },
  {
    title: "Favorieten",
    icon: <FavoriteIcon />,
    link: "/favorieten",
  },
];
