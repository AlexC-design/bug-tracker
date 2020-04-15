import React from "react";
import { PreviewColumn } from "./PreviewColumn/PreviewColumn";

import "./css/thumbnail-preview.css";

export const ThumbnailPreview = ({ taskColumns }) => {
  return (
    <div className="preview">
      {taskColumns.map((column, index) => {
        if (index <= 3) {
          return <PreviewColumn tasks={column} key={index} columnNo={index} />;
        }
      })}
    </div>
  );
};
