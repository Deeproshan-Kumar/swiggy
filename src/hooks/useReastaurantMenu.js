import { useEffect, useState } from "react";
import { RESTAURANT_INFO } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const fetchRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_INFO + id);
    const data = await response.json();
    setRestaurantMenu(data?.data?.cards);
  };
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  return restaurantMenu;
};
export default useRestaurantMenu;
