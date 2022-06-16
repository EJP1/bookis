import * as React from "react";
import Button from "./../ui/button";
import { MoreHorizontal } from "react-feather";

const msg = "Sorry, this is not yet implemented.";

function notImplemented() {
  console.warn(msg);
  alert(msg);
}
export const ToolBar = ({ ...other }) => {
  return (
    <nav className="relative flex items-center space-x-4 pb-4">
      <Button onClick={notImplemented} variant="primary">
        Upload
      </Button>
      <Button onClick={notImplemented}>Create</Button>
      <div
        className="h-8 border-gray-300"
        style={{ borderLeftWidth: "1px" }}
      ></div>

      <Button onClick={notImplemented}>
        <MoreHorizontal
          className="pointer-events-none"
          strokeWidth={2}
          stroke="black"
          fill="black"
        ></MoreHorizontal>
      </Button>
    </nav>
  );
};
