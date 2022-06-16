import React, { useState } from "react";
import { Folder, MoreHorizontal } from "react-feather";
import { RowData } from "./index";

const msg = "Sorry, this is not yet implemented.";

function notImplemented() {
  const msg = "Sorry, this is not yet implemented.";
  console.warn(msg);
  alert(msg);
}
const TableRow = ({ data }: { data: RowData }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [contextActive, setContextActive] = useState(false);

  const { id, type, name, size, modified } = data;
  const dropdownName = `dd-${id}`;

  return (
    <tr
      className={`cursor-pointer text-left  py-2 hover:bg-gray-100 border-b-2`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <td>
        <input type="checkbox" name={name} onClick={notImplemented} />
      </td>
      <td className="flex flex-row space-x-2">
        {type === "folder" && (
          <Folder
            strokeWidth={1}
            fill="rgb(2 132 199)"
            stroke="rgb(2 132 199)"
          />
        )}
        <span>{name}</span>
      </td>
      <td>{size}</td>
      <td>{modified}</td>

      <div className="relative">
        <button
          className={`relative p-2 m-2 hover:bg-gray-200 `}
          onClick={() => setContextActive(!contextActive)}
          id={`btn-${dropdownName}`}
          data-dropdown-toggle={dropdownName}
          disabled={!isHovering}
        >
          <MoreHorizontal
            className="pointer-events-none"
            strokeWidth={1}
            stroke="black"
            fill="black"
          />
        </button>

        <ul
          className={`${
            contextActive ? "" : "hidden"
          } absolute bottom-auto m-2 py-1 text-sm bg-gray-200 z-10 `}
          aria-labelledby={`btn-${dropdownName}`}
        >
          <li>
            <button
              onClick={() => {}}
              className="w-full px-4 py-2 hover:bg-gray-100"
            >
              Delete
            </button>
          </li>
          <li>
            <button
              onClick={notImplemented}
              className="w-full px-4 py-2 hover:bg-gray-100"
            >
              Share
            </button>
          </li>
        </ul>
      </div>
    </tr>
  );
};
export default TableRow;
