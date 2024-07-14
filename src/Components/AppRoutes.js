import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Youtube from './youtube/youtube_down';
import Instagram from './instagram/instagram';
import Twitter from './twitter/X';
import NoPage from './error';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Youtube />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/twitter" element={<Twitter />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
};

export default AppRoutes;
