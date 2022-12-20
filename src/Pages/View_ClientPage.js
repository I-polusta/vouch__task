import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import View_Client from "../Components/View_client/View_Client";
import "./pages.css";
import Mobile__Sidebar from "../Components/Sidebar/Mobile__Sidebar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function View_ClientPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="Vclient__page__container">
      {matches && <Sidebar />}
      {!matches && <Mobile__Sidebar />}
      <View_Client />
    </div>
  );
}

export default View_ClientPage;
