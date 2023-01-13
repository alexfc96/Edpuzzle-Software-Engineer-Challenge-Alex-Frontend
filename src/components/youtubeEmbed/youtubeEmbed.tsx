import React from "react";

interface Props {
  embedId: string;
}

const YoutubeEmbed: React.FC<Props> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="643"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;