import React from "react";
import './copyUrl.css';

interface Props {
  videoId: string;
}

export const CopyUrl: React.FC<Props> = ({videoId}) => {
    const url = `http://localhost:4200/video/${videoId}`;
    
    const copyUrl = () => {
        navigator.clipboard.writeText(url);
    };
    
    return (
        <div className="marginBlock" >
            <span className="url-styled" onClick={copyUrl}>{url}</span>
        </div>
    );
  }

export default CopyUrl;