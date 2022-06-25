import axios from "axios";

interface Route {
  id: string;
  activity: string;
  points: number[][];
}

async function getRoutes(): Promise<Route[]> {
  const url = "https://mateuszpapuga.pl/api/routes";
  const response = await axios.get(url);

  return response.data as Route[];
}

export default getRoutes;
