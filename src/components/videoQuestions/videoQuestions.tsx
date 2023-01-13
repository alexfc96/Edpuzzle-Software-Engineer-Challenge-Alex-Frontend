import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from 'react-router-dom';

const VideoQuestions: FC = () => {
    const { videoId } = useParams();
    console.log("videoId", videoId)

    return (
        <div>
            Page
        </div>
    )
}

export default VideoQuestions;