import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth() || {};
  const email = user?.email;
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
