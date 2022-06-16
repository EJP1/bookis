import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log({ _req });

    const data = [
      {
        id: "123123123n",
        type: "folder",
        name: "Documents",
        size: "1",
        modified: "11/05/2022",
      },
      {
        id: "234",
        type: "folder",
        name: "balls",
        size: "1",
        modified: "11/05/2022",
      },
      {
        id: "231234",
        type: "file",
        name: "secrets.text",
        size: "1",
        modified: "11/05/2022",
      },
    ];

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
