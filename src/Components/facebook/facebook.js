import React from 'react';
import Twinkle from "../../images/twinkle_1.png";
import Yt from "../../images/facebook.png";
import Music from "../../images/music.png";
import Play from "../../images/play.png";
import Line from "../../images/line1.png";
import Footer from '../footer';
import Search from '../search';

export default function Facebook() {
  return (
    <div className="youtube">
      <div className="img_r1">
        <img className="twinkle" src={Twinkle} alt="Twinkle decoration" />
        <img className="yt" src={Yt} alt="YouTube logo" />
      </div>
      <div className="text-bet">
        <h1 className="yt_text">Facebook Video Downloader</h1>
        <img src={Line} alt="Decorative line" />
        <h5 className="desc">Try this unique tool for quick, hassle-free downloads from Facebook. Transform your offline video collection with this reliable and efficient downloader.</h5>
      </div>
      <div className="img_r2">
        <img className="music" src={Music} alt="Music note decoration" />
        <img className="play" src={Play} alt="Play button decoration" />
      </div>
      <Search />
      <Footer />
    </div>
  );
};

