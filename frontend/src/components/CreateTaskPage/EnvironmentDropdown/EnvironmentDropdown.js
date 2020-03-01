import React, { useState, useEffect } from "react";

export const EnvironmentDropdown = () => {
  const [selected, setSelected] = useState("Selected");
  const [expanded, setExpanded] = useState(false);

  const options = ["Chrome", "Firefox", "Safari", "Opera", "Edge", "IE", "All"];

  return (
    <div className="environment-dropdown">
      <div className="environment-dropdown__top">
        <div className="environment-dropdown__top__selected">{selected}</div>
        <button className="environment-dropdown__top__button" />
      </div>
      <div className="environment-dropdown__options">
        {options.map(option => (
          <div>{option}</div>
        ))}
      </div>
    </div>
  );
};
