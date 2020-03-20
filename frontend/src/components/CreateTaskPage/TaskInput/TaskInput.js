import React from "react";

export const TaskInput = ({ inputType, taskDetails, handleInputChange }) => {
  const inputTypeToClassName = {
    Name: "__top__name",
    Summary: "__summary",
    Description: "__description"
  };

  const inputTypeToValue = {
    Name: taskDetails.taskName,
    Summary: taskDetails.taskSummary,
    Description: taskDetails.taskDescription
  };

  return (
    <label
      className={`task-${
        handleInputChange === "disabled" ? "view" : "creation"
      }__left${inputTypeToClassName[inputType]}`}
    >
      <span>{inputType}</span>
      {(inputType === "Name" || inputType === "Summary") && (
        <input
          name={`task${inputType}`}
          type="text"
          autoComplete="off"
          value={inputTypeToValue[inputType]}
          onChange={
            handleInputChange !== "disabled" ? handleInputChange : () => {}
          }
          disabled={handleInputChange === "disabled" ? true : false}
        />
      )}
      {inputType === "Description" && (
        <textarea
          name={`task${inputType}`}
          type="text"
          autoComplete="off"
          value={inputTypeToValue[inputType]}
          onChange={
            handleInputChange !== "disabled" ? handleInputChange : () => {}
          }
          disabled={handleInputChange === "disabled" ? true : false}
        />
      )}
    </label>
  );
};
