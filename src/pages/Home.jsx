import { useState } from "react";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Problem from "../components/Problem";
import Review from "../components/Review";
import Showcase from "../components/Showcase";
import Popup from "../components/Popup";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar setShow={setShow}/>
      <Showcase setShow={setShow}/>
      <Review />
      <Bottom />
      <Problem setShow={setShow}/>
      <Footer setShow={setShow}/>
      {show && <Popup setShow={setShow} />}
    </>
  );
};

export default Home;
