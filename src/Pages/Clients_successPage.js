import React from "react";
import FinishModal from "../Components/Add Clients/FinishModal";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./pages.css";
import Mobile__Sidebar from "../Components/Sidebar/Mobile__Sidebar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Clients_successPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="Vclient__page__container">
      {matches && <Sidebar />}
      {!matches && <Mobile__Sidebar />}
      <FinishModal />
    </div>
  );
}

export default Clients_successPage;
