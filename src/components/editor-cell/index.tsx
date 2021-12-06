import { Input, Select } from "@douyinfe/semi-ui";
import React, { FC, useState } from "react";
export interface EditorCellProps {
  value: React.ReactText;
  onChange: (newVal: React.ReactText) => void;
  type?: "url" | "select" | "default";
}
const EditorCell: FC<EditorCellProps> = ({
  value,
  type = "default",
  onChange,
}) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [_value, setValue] = useState<string>("");
  const renderValue = () => {
    return (
      <div
        style={{ height: 30, lineHeight: "30px" }}
        className="pl-1 border border-transparent border-solid hover:border-blue-400 rounded"
      >
        {value}
      </div>
    );
  };
  return (
    <div
      onClick={() => {
        setEditable(true);
      }}
    >
      {!editable ? (
        renderValue()
      ) : (
        <Input
          onBlur={() => {
            setEditable(false);
            onChange(_value);
          }}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setEditable(false);
              onChange(_value);
            }
          }}
          defaultValue={value}
          style={{ width: "90%", height: 30 }}
          autofocus
          onChange={(e) => setValue(e)}
        ></Input>
      )}
    </div>
  );
};

export default EditorCell;
