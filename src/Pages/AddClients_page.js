import React from "react";
import Create_Profile from "../Components/Add Clients/Create_Profile";
import Sidebar from "../Components/Sidebar/Sidebar";
import View_Client from "../Components/View_client/View_Client";
import Mobile__Sidebar from "../Components/Sidebar/Mobile__Sidebar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./pages.css";
function AddClients_Page() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="Vclient__page__container">
      {matches && <Sidebar />}
      {!matches && <Mobile__Sidebar />}

      <Create_Profile />
    </div>
  );
}

export default AddClients_Page;
