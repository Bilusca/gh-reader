import axios from "axios";

type Repositorie = {
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  description: string;
  id: number;
};

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export const reposByUser = async (user: string) => {
  return await api.get<Repositorie[]>(`users/${user}/repos`);
};
