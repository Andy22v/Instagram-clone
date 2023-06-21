import "./Footer.css";
import Home from "../icons/Home";
import Search from "../icons/Search";
import NewPost from "../icons/NewPost";
import Notifications from "../icons/Notifications";

const Footer = ({ userData, setSection }) => {
  const handleClick = (setctionName) => {
    setSection(setctionName);
  };

  return (
    <div className="Footer">
      <div className="footer-contain">
        <div className="home" onClick={() => handleClick("home")}>
          <Home />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="new-post">
          <NewPost />
        </div>
        <div className="notifications">
          <Notifications />
        </div>
        <div className="profile-img-contain">
          <img
            className="profile-img"
            src={userData.userImage}
            alt={userData.username}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
