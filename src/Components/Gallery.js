import React from "react";
import pawnart from "../images/pawnart.jpg";
import sparkling from "../images/sparkling.jpg";
import mmday from "../images/mmday.jpg";
import mm1 from "../images/mm1.jpg";
import mm2 from "../images/mm2.jpg";
import mm3 from "../images/mm3.jpg";
import mm4 from "../images/mm4.jpg";
import mm6 from "../images/mm6.jpg";
import entnight from "../images/entnight.jpg";
import realp from "../images/realp.jpg";
import tallest from "../images/tallest.jpg";
import xmas from "../images/xmas.jpg";
import emotionless1 from "../images/emotionless1.jpg";
import emotionless2 from "../images/emotionless2.jpg";
import emotionless3 from "../images/emotionless3.jpg";
import zaye1 from "../images/zaye1.jpg";
import zaye2 from "../images/zaye2.jpg";
import zaye3 from "../images/zaye3.jpg";
import waxzee1 from "../images/waxzee1.jpg";
import waxzee2 from "../images/waxzee2.jpg";
import waxzee3 from "../images/waxzee3.jpg";
import waxzee4 from "../images/waxzee4.jpg";

import pawn1 from "../images/pawn1.jpg";
import pawn2 from "../images/pawn2.jpg";
import pawn5 from "../images/pawn5.jpg";
import pawn6 from "../images/pawn6.jpg";
import pawn8 from "../images/pawn8.jpg";
import mmfront from "../images/mmfront.jpg";
import mmback from "../images/mmback.jpg";
import badboy from "../images/badboy.jpg";
import sinner from "../images/sinner.jpg";
import elec from "../images/elec.jpg";
import talk from "../images/talk.jpg";
import understand from "../images/understand.jpg";
import crbc from "../images/crbc.jpg";
import daiok from "../images/daiok.jpg";
import tv1 from "../images/tv1.jpg";
import tv2 from "../images/tv2.jpg";
import awards from "../images/awards.jpg";
import dmlaward from "../images/dmlaward.jpg";
import talk10k from "../images/talk10k.jpg";
import dml from "../images/dml.jpg";

function Gallery() {
  return (
    <>
      <h4 className="gallery">My Concerts</h4>
      <div className="images">
        <img src={pawnart}></img>
        <img src={mmday}></img>
      </div>
      <h4>Concert's Gallery</h4>
      <div className="images">
        <img src={mm1}></img>
        <img src={mm2}></img>
        <img src={mm3}></img>
        <img src={mm4}></img>
        <img src={mm6}></img>
        <img src={pawn5}></img>
        <img src={pawn6}></img>
        <img src={pawn8}></img>
        <img src={pawn1}></img>
        <img src={pawn2}></img>
      </div>

      <h4>Projects</h4>
      <div className="images">
        <img src={mmfront}></img>
        <img src={mmback}></img>
        <img src={badboy}></img>
        <img src={sinner}></img>
        <img src={talk}></img>
        <img src={understand}></img>
        <img src={elec}></img>
      </div>

      <h4>Radios & TV Tours</h4>
      <div className="images">
        <img src={crbc}></img>
        <img src={tv1}></img>
        <img src={sparkling}></img>
        <img src={daiok}></img>
        <img src={tv2}></img>
      </div>

      {/* <h4>Awards</h4>
      <div className="images">
        <img src={awards}></img>
        <img src={dmlaward}></img>
        <img src={talk10k}></img>
        <img src={dml}></img>
      </div> */}

      <h4>Headline Events</h4>
      <div className="images">
        <img src={entnight}></img>
        <img src={realp}></img>
        <img src={tallest}></img>
        <img src={xmas}></img>
      </div>

      <h4>Emotionless Video Shoot</h4>
      <div className="images">
        <img src={emotionless1}></img>
        <img src={emotionless2}></img>
        <img src={emotionless3}></img>
      </div>

      <h4>Zaye Video Shoot</h4>
      <div className="images">
        <img src={zaye1}></img>
        <img src={zaye3}></img>
      </div>

      <h4>Photo Shoots</h4>
      <div className="images" id="last-gallery">
        <img src={waxzee1}></img>
        <img src={waxzee2}></img>
        <img src={waxzee3}></img>
      </div>
    </>
  );
}

export default Gallery;
