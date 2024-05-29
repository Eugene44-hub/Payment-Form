import { useEffect, useState } from "react";
import { IUserApiResponse } from "../../../@types";
import { toast } from "react-toastify";
type ErrorType = {
  message: string;
};
export interface IUser {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}
type Users = IUserApiResponse<IUser> | undefined;
const getUsers = async (): Promise<Users> => {
  try {
    const request = await fetch("https://randomuser.me/api?results=5");
    const response = await request.json();
    if (!response.results) throw "Unable to fetch users at the moment";
    return response;
  } catch (err) {
    const error = err as ErrorType;
    toast.error(error.message ?? "Opps something went wrong");
  }
};

const useGetAllUsersQuery = () => {
  const [users, setUsers] = useState<IUser[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res?.results);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data: users, loading };
};

export default useGetAllUsersQuery;
