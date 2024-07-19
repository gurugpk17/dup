import React, { useState } from "react";

export default function Search() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState([]);
  const [visibleDiv, setVisibleDiv] = useState(null);

  const handleDownload = async () => {
    const apiUrl = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${url}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '32165a3bddmsh3ca8e521c547b6bp185a1ajsn363d9ec7a040',
        'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com',
      }
    };

    try {
      const response = await fetch(apiUrl, options);
      const jsonResponse = await response.json();
      setResult([jsonResponse]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-container">
      <div className="search">
        <div className="subnav">
          <button className="subnavbtn">
            MP4 <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <button onClick={() => setVisibleDiv('div0')}>quality 1</button>
            <button onClick={() => setVisibleDiv('div1')}>quality 2</button>
          </div>
        </div>
        <input
          type="search"
          className="srch-bar"
          placeholder="Paste your URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="butt" onClick={handleDownload}>Download</button>
      </div>
      <div className="yt_result">
        {result.map((item, index) => (
          <div key={index} className="yt-result-content">
            <h2 className="result-title">{item.title}</h2>
            <br />
            <img
              className="thumbnail"
              src={item.stats?.thumbnails?.[2]?.url || item.picture ||'default-thumbnail.jpg'}
              alt="thumbnail"
            />
            <br />
            <h4>{item.stats?.lengthSeconds || 'unknown'} seconds</h4>

            {visibleDiv === 'div0' && item.links?.['1'] && (
              <div id="div0">
                <h4><i>Standard Definition</i></h4>
                <p>{item.links['1']?.attributes?.quality}</p>
                <a href={item.links['1']?.link} target="_blank" rel="noopener noreferrer">
                  {item.links['1']?.quality} Download Link
                </a>
              </div>
            )}

            {visibleDiv === 'div1' && item.links?.['2'] && (
              <div id="div1">
                <h4><i>Standard Definition</i></h4>
                <p>{item.links['2']?.attributes?.quality}</p>
                <a href={item.links['2']?.link} target="_blank" rel="noopener noreferrer">
                  {item.links['2']?.quality} Download Link
                </a>
              </div>
            )}

            <br />

            {item.links?.['0'] && (
              <a className="audio" href={item.links['0']?.link} target="_blank" rel="noopener noreferrer">
                Audio Download Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
