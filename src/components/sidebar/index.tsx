import useSideBar from "../../services/sidebar";
import { useEffect } from "react";
import styles from "./index.module.scss";
const SideBar = () => {
  const { getUserInformation, userData } = useSideBar({});
  useEffect(() => {
    getUserInformation();
  }, []);
  console.log(userData);
  console.log(styles);

  return (
    <div
      className={styles.SideBar}
      style={{
        width: "300px",
      }}
    >
      <div className={styles.UserSection}>
        <div className={styles.Flex + styles.h}>
          <img width="100px" height="100px" />
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
