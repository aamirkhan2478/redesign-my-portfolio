import Head from "next/head";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
// import "./styles/styles.css";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ background: "#eee" }}>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Sidebar />
      <Home />
    </div>
  );
};

export default Dashboard;
