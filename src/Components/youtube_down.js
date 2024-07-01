import React from 'react'
import Twinkle from "../images/twinkle_1.png"
import Yt from "../images/yt_1.png"
import Music from "../images/music.png"
import Play from "../images/play.png"
import Line from "../images/line1.png"

export default function Youtube(){
    return(
        <div className="youtube">
            <div className="img_r1">
                <img className="twinkle" src={Twinkle}/>
                <img className="yt" src={Yt} />
            </div>
            <div className="text-bet">
                <h1 className="yt_text">Youtube Video Downloader</h1>
                <img src={Line} />
                <h5 className="desc">Try this unique tool for quick, hassle-free downloads from YouTube. Transform your offline video collection with this reliable and efficient downloader.</h5>
            </div>
            <div className="img_r2">
                <img className="music" src={Music}/>
                <img className="play" src={Play} />
            </div>
            
        </div>
    )
}