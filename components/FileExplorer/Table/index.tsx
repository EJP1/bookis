import * as React from "react";
import TableRow from "./tableRow";

export interface RowData {
  id: string;
  ".tag": string;
  type: "file" | "folder";
  name: string;
  size: string;
  client_modified: string;
  display: string;
  path_lower: string;
}
export const Table = ({ data }: { data: RowData[] }) => {
  
  
  if (data.length === 0) {
    return (
      <div className="w-full flex justify-center font-bold">
        <p>This folder is empty</p>
      </div>
    );
  }
  return (
    <table className="w-full mt-4 last:border-none ">
      <tr className="text-left text-lg border-b-2 ">
        <th>{``}</th>
        <th>Name</th>
        <th>Size</th>
        <th>Modified</th>
      </tr>
      {data.map((r) => (
        <TableRow key={r.id} data={r} />
      ))}
    </table>
  );
};
