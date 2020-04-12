import React from "react";
import { PreviewTask } from "./PreviewTask/PreviewTask";

import "./css/thumbnail-preview.css";

export const ThumbnailPreview = ({ tasks }) => {
  return (
    <div className="preview">
      <PreviewTask />
      <PreviewTask />
      <PreviewTask />
      <PreviewTask />
      <PreviewTask />
      <PreviewTask />
      <PreviewTask />
    </div>
  );
};
