import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ToolBar } from "./toolBar";
import { Table } from "./Table";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const FileExplorer = () => {
  const { asPath } = useRouter();
  const URL = `/api${asPath}`;

  const { data, error } = useSWR(URL, () =>
    fetch(URL).then(async (res) => await res.json())
  );

  if (!data) {
    return (
      <div className="flex justify-center px-10 w-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center px-10 w-full text-lg font-bold">
        Sorry, something went wrong..
      </div>
    );
  }

  const { entries } = data;

  return (
    <div className="px-10 w-full">
      <ToolBar />
      <Table data={entries} />
    </div>
  );
};
export default FileExplorer;
