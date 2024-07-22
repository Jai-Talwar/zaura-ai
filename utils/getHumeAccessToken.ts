import 'server-only';
import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.API_KEY),
    secretKey: String(process.env.SECRET_KEY),
  });

  if (!accessToken) {
    throw new Error("no token");
  }

  return accessToken ?? null;
}