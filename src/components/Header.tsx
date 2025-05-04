//import { useSelector } from "react-redux";
//import { StoreStateType } from "../redux/reducer";

import { useStore } from "../zustand/store";

const Header = () => {
  //const userName = useSelector((state: StoreStateType) => state?.userName);
  const userName = useStore((state) => state.userName);

  return (
    <div className="header">
      <div>{userName}</div>
    </div>
  );
};

export default Header;
