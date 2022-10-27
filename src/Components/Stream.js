import React from "react";
import mmfront from "../images/mmfront.jpg";
import badboy from "../images/badboy.jpg";
import mama from "../images/mama.jpg";
import fouru from "../images/4u.jpg";
import give from "../images/give.jpg";
import talk from "../images/talk.jpg";

function Stream() {
    return(
        <>

        <div className="stream">
        <div>
            <a href="https://fanlink.to/waxzee-music-mechaniq" rel="noreferrer" target="_blank">
          <img src={mmfront} alt="example" />
        </a>
        <p>Music <br></br> Mechaniq  EP</p>
            </div>

            <div>
            <a href="https://distrokid.com/hyperfollow/waxzee/bad-boy-goldie-mt-zion-feat-dj-patbern-leo-ceaser-young-bone-upper-dee--upper-x" rel="noreferrer" target="_blank">
          <img src={badboy} alt="example" />
        </a>
        <p>Bad Boy</p>
            </div>

            <div>
            <a href="https://fanlink.to/WAXZEE" rel="noreferrer" target="_blank">
          <img src={talk} alt="example" />
        </a>
        <p>Talk</p>
            </div>

            <div>
            <a href="https://audiomack.com/WAXZEE/song/4-u" rel="noreferrer" target="_blank">
          <img src={fouru} alt="example" />
        </a>
        <p>4 U</p>
            </div>

            <div>
            <a href="https://audiomack.com/WAXZEE/song/mama" rel="noreferrer" target="_blank">
          <img src={mama} alt="example" />
        </a>
        <p>Mama</p>
            </div>

            <div>
            <a href="https://audiomack.com/WAXZEE/song/give-you-love" rel="noreferrer" target="_blank">
          <img src={give} alt="example" />
        </a>
        <p>Give U Love</p>
            </div>
        </div>
        
        </>
    )
}

export default Stream