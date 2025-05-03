import { useSelector } from "react-redux";
import { StoreStateType } from "../redux/reducer";

const Header = () => {
  const userName = useSelector((state: StoreStateType) => state?.userName);
  return (
    <div className="header">
      <div>{userName}</div>
    </div>
  );
};

export default Header;
