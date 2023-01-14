import React from "react";
import moment from 'moment';

import { View } from "../../../types";

interface Props {
  views: View[];
}

export const ViewsComponent: React.FC<Props> = ({views}) => {
  return (
    <>
        <h2>Viewed {views.length } times</h2> 
        <div>
            {views.map((view: View) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return <p key={view._id}>Viewed {moment(view.timestamp).fromNow()} ago at {moment(view.timestamp).format('HH:mm')}</p>
            })}
        </div>
    </>
  );
}

export default ViewsComponent;