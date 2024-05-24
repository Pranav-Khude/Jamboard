import React, { useState } from 'react';
import Toolbar from './Toolbar.jsx';
import Canvas from './Canvas.jsx';
import './Main.css';

const Main = ({drawinglayer}) => {
    const [selectedTool, setSelectedTool] = useState("pointer");
    return (
        <div className="main">
            <div className="content">
            <Toolbar setSelectedTool={setSelectedTool} selectedTool={selectedTool} />
                <div className="canvas-container">
                <Canvas url={drawinglayer} setSelectedTool={setSelectedTool} selectedTool={selectedTool} />
                </div>
            </div>
        </div>
    );
};

export default Main;
