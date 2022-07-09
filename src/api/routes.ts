import axios from "axios";

interface Route {
  id: string;
  activity: string;
  points: number[][];
}

async function getRoutes(): Promise<Route[]> {
  const url = "http://localhost:8020/api/routes";
  const response = await axios.get(url);

  return response.data as Route[];
}

export default getRoutes;
