import React from "react";
import { PreviewColumn } from "./PreviewColumn/PreviewColumn";

import "./css/thumbnail-preview.css";

export const ThumbnailPreview = ({ taskColumns, test }) => {
  return (
    <div className={`preview preview${test ? "--test" : ""}`}>
      {taskColumns.map((column, index) => {
        if (index <= 3) {
          return <PreviewColumn tasks={column} key={index} columnNo={index} />;
        } else return null;
      })}
    </div>
  );
};
