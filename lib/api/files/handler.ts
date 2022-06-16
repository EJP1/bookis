import { NextApiRequest, NextApiResponse } from "next";

const API_URL_BASE = "http://localhost:3333";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = _req;
    console.log({ url });

    const urlPath = url.replace("/api/files", "");
    console.log({ urlPath });

    const { data } = await fetch(`${API_URL_BASE}/files`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: urlPath,
      }),
    })
      .then((res) => res.json())
      .catch((_err) => {
        throw new Error("Faield to fetch data from API.");
      });

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500);
  }
};

export default handler;
