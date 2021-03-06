import { NextApiRequest, NextApiResponse } from "next";

const API_URL_BASE = "http://localhost:3333";

// Super simple handler for all /files routes. We only have two types
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url, method } = _req;
    const urlPath = url.replace("/api/files", "");
    const apiUrl = `${API_URL_BASE}/files`;


    // We can do this simple switch method because there are only two methods..
    switch (method) {
      case "DELETE": {
        const { data } = await fetch(apiUrl, {
          method: "DELETE",
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
      }
      default: {
        const { data } = await fetch(apiUrl, {
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
      }
    }
  } catch (err: any) {
    res.status(500);
  }
};

export default handler;
