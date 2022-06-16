import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ToolBar } from "./toolBar";
import { Table } from "./Table";
import { RowData } from "./Table/index";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { apiRoutes } from "../../lib/api";

const FileExplorer = () => {
  const { asPath } = useRouter();

  const URL = `/api${asPath}`;
  const { data, error } = useSWR(asPath, () =>
    fetch(URL).then(async (res) => await res.json())
  );
  console.log({ URL, asPath, data });

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

  return (
    <div className="px-10 w-full">
      <ToolBar />
      <Table data={data} />
    </div>
  );
};
export default FileExplorer;
