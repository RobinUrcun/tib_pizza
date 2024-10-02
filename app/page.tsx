import Header from "./components/layouts/header/Header";
import Story from "./components/Story/Story";
import Menu from "./components/Menu/Menu";
import Location from "./components/Location/Location";
import Advices from "./components/Advices/Advices";
import TimeTable from "./components/TimeTable/TimeTable";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layouts/footer/Footer";
import HomeHeader from "./Pages/home/HomeHeader";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header>
        <HomeHeader />
      </Header>
      <main>
        <Story />
        <Menu />
        <Location mapCenter={[16.249554, -61.343473]} />
        <TimeTable />
        <Advices />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
