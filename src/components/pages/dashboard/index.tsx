import { useRef } from "react";
import SideBar from "../../sidebar";

type DashBoardPageProps = {};
const DashBoardPage = ({}: DashBoardPageProps) => {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  return (
    <>
      <SideBar />
    </>
  );
};

export default DashBoardPage;
