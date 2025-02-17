import { useEffect, useState } from "react";
import { HELP_API } from "../utils/constants";

const useHelp = (type) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(HELP_API + type);
    const data = await response.json();
    setData(data?.data?.issues);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return data;
};

export default useHelp;