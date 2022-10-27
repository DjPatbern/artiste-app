import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Blog from "../routers/Blog";
import Home from "../routers/Home";
import Songs from "../routers/Songs";
import Videos from "../routers/Videos";
import Bio from "./Bio";
import Gallery from "./Gallery";
import Stream from "./Stream";
import {AnimatePresence} from "framer-motion"


function AnimatedRoute() {
    const location = useLocation()
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Stream" element={<Stream />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoute;
