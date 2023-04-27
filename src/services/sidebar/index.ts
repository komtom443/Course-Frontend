import axios from "axios";
import { useState } from "react";

type useSideBarProps = {};
const useSideBar = ({}: useSideBarProps) => {
  const [userData, setUserData] = useState("");
  const userToken = 'localStorage.getItem("userToken")';
  const getUserInformation = async () => {
    if (userToken) {
      const tmp = await axios.post("http://localhost:15120/user/getBasic", {
        userToken,
      });
      setUserData(tmp.data.userToken);
    }
  };
  return {
    userData,
    getUserInformation,
  };
};

export default useSideBar;
