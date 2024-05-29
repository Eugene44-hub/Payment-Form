import { StaticImageData } from "next/image";

export interface IProduct {
  title: string;
  description: string;
  amount: number;
  id: number;
  image: StaticImageData | string;
}

export interface IUserApiResponse<T> {
  results: T[];
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
}
