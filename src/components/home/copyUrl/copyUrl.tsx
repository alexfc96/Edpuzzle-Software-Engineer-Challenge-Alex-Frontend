import React from "react";
import "./copyUrl.css";

interface Props {
  url: string;
}

export const CopyUrl: React.FC<Props> = ({ url }) => {
  const copyUrl = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="marginBlock">
      <span className="url-styled" onClick={copyUrl}>
        {url}
      </span>
    </div>
  );
};

export default CopyUrl;
