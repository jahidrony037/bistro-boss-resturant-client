import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/menu");
      const results = res.data;
      // console.log(results);
      if (results) {
        setMenu(results);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return [menu, isLoading];
};

export default useMenu;
