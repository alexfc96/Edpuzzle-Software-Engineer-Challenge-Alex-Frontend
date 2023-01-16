import React, { useState } from "react";
import moment from "moment";

import { View } from "../../../types";

interface Props {
  views: View[];
}

export const ViewsComponent: React.FC<Props> = ({ views }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewsPerPage, setViewsPerPage] = useState(2);

  const indexOfLastItem = currentPage * viewsPerPage;
  const indexOfFirstItem = indexOfLastItem - viewsPerPage;
  const currentViews = views
    .slice()
    .reverse()
    .slice(indexOfFirstItem, indexOfLastItem);
  let totalPages = Math.ceil(views.length / viewsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setViewsPerPage(4);
    totalPages = Math.ceil(views.length / viewsPerPage);
  };

  return (
    <>
      <h2>Viewed {views.length} times</h2>
      <div>
        {currentViews.map((view: View) => {
          return (
            <p key={view._id}>
              Viewed {moment(view.timestamp).fromNow()} ago at{" "}
              {moment(view.timestamp).format("HH:mm")}
            </p>
          );
        })}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={() => nextPage()} disabled={currentPage === totalPages}>
        Next
      </button>
    </>
  );
};

export default ViewsComponent;
