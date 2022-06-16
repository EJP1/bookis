const API_BASE = "/api/";

export const apiRoutes = {
  createUrl: (path: string) => `${API_BASE}${path}`,
  fetcher: (url: string) => fetch(url, ).then(async (res) => await res.json()),
};
