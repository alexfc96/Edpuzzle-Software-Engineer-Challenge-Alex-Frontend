// import React from "react";
// import "./videoBox.css"

// export const VideoBox = () => {

//   return (
//     <div className="media">
//         <div>
//             <img src="logo192.png" alt="Logo" />
//         </div>
//       <h3>
//         Title of the video
//       </h3>
//       <span>
//         Description
//       </span>
//     </div>
//   );
// };

// export default VideoBox;

import React from "react";
import "./videoBox.css"

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export const VideoBox: React.FC<Props> = ({title, description, imageUrl}) => {
    return (
      <div className="video-preview">
        <img src={imageUrl} alt={title}/>
        <div className="video-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

export default VideoBox;