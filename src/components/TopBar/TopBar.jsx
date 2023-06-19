import "./TopBar.css";
import CameraIcon from "../icons/CameraIcon";
import Logo from "../icons/Logo";
import Igtv from "../icons/Igtv";
import Messanger from "../icons/Messanger";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="camera-contain">
        <CameraIcon />
      </div>
      <div className="logo-contain">
        <Logo />
      </div>
      <div className="action-contain">
        <Igtv />
        <Messanger />
      </div>
    </div>
  );
};

export default TopBar;
