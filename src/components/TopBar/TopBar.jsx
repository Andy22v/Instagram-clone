import "./TopBar.css";
import CameraIcon from "../icons/CameraIcon";
import Logo from "../icons/Logo";
import Igtv from "../icons/Igtv";
import Messanger from "../icons/Messanger";

const TopBar = ({ setSection, setCamera }) => {
  const handleClick = (setctionName) => {
    if (setctionName !== "camera") {
      setSection(setctionName);
      setCamera(true);
    }
    setSection(setctionName);
  };

  return (
    <div className="TopBar">
      <div className="camera-contain" onClick={() => handleClick("camera")}>
        <CameraIcon />
      </div>
      <div className="logo-contain" onClick={() => handleClick("home")}>
        <Logo />
      </div>
      <div className="action-contain">
        <div className="action-tv" onClick={() => handleClick("tv")}>
          <Igtv />
        </div>
        <div className="action-msg" onClick={() => handleClick("message")}>
          <Messanger />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
