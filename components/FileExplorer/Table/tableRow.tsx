import React, { useState } from "react";
import { useRouter } from "next/router";
import { Folder, MoreHorizontal } from "react-feather";
import { RowData } from "./index";

function notImplemented() {
  const msg = "Sorry, this is not yet implemented.";
  console.warn(msg);
  alert(msg);
}

const TableRow = ({ data }: { data: RowData }) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [contextActive, setContextActive] = useState(false);

  const { name, size, client_modified } = data;
  const type = data[".tag"];
  const isFolder = type === "folder";

  function handleRowClick() {
    if (type === "folder") {
      router.push(`/files/${data.path_lower}`);
    }
  }

  return (
    <tr
      onClick={handleRowClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${
        isFolder ? "cursor-pointer" : "cursor-default"
      } text-left  py-2 hover:bg-gray-100 border-b-2`}
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
      <td>{size || "--"}</td>
      <td>{client_modified || "--"}</td>
      <div className={`relative ${isHovering ? "" : "opacity-0"}`}>
        <button
          className={`relative p-2 m-2 hover:bg-gray-200 `}
          onClick={() => setContextActive(!contextActive)}
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
        >
          <li>
            <button
              onClick={() => {}}
              className="w-full px-4 py-2 hover:bg-gray-100"
            >
              Remove
            </button>
          </li>
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
              onClick={() => notImplemented()}
              className="w-full px-4 py-2 hover:bg-gray-100"
            >
              Share
            </button>
          </li>
          {!isFolder && (
            <li>
              <button
                onClick={() => notImplemented()}
                className="w-full px-4 py-2 hover:bg-gray-100"
              >
                Download
              </button>
            </li>
          )}
        </ul>
      </div>
    </tr>
  );
};
export default TableRow;
