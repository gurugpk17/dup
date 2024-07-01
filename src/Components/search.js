// 



import React from 'react';

export default function Search() {
    // const [url, setUrl] = useState('');
    // const [quality, setQuality] = useState('');

    return (
        <div className="search">
            <div className="subnav">
                <button className="subnavbtn">MP4 <i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <button >720p</button>
                    <button >1080p</button>
                </div>
            </div>
            <div className="vl"></div>
            <input
                type="search"
                className="srch-bar"
                placeholder="Paste your URL here"
            />
            <button className="butt">Download</button>
        </div>
    );
}
