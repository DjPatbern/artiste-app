import React from "react";
import bio from "../images/bio.png"
import gallery from "../images/gallery.jpg"
import lifestyle from "../images/lifestyle.png"
import book from "../images/book.png"
import follow from "../images/follow.png"
import stream from "../images/stream.jpg"
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Gallery from "../Components/Gallery";



function Home() {
    return(
        <>
        <motion.div className="home"  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
            <a href="/Gallery" rel="noreferrer">
          <img src={gallery} alt="example" />
        </a>
        <p>Gallery</p>
            </div>

            <div>
            <a href="/Stream" rel="noreferrer">
          <img src={stream} alt="example" />
        </a>
        <p>Stream</p>
            </div>

            <div>
            <a href="/Gallery" rel="noreferrer">
          <img src={follow} alt="example" />
        </a>
        <p>Follow Me</p>
            </div>

            <div>
            <a href="/Gallery" rel="noreferrer">
          <img src={book} alt="example" />
        </a>
        <p>Book</p>
            </div>

            <div>
            <a href="/Gallery" rel="noreferrer">
          <img src={lifestyle} alt="example" />
        </a>
        <p>Lifestyle</p>
            </div>

            <div>
            <a href="/Gallery" rel="noreferrer">
          <img src={bio} alt="example" />
        </a>
        <p>Bio</p>
            </div>


        </motion.div>
        </>
    )
}

export default Home