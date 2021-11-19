import { NavLink } from "react-router-dom";
import { InstagramOutlined, GithubOutlined, GoogleOutlined  } from "@ant-design/icons";

function Footer() {
  return (
    <>
      <NavLink
        to={{ pathname: "https://www.instagram.com/tenomareen/" }}
        target="_blank"
      >
        <InstagramOutlined style={{fontSize: "40px",marginTop: "8px"}}/>
      </NavLink>
      <NavLink
        to={{ pathname: "https://github.com/Tenomareen" }}
        target="_blank"
      >
        <GithubOutlined style={{fontSize: "40px", marginTop: "8px", marginLeft: "15px"}}/>
      </NavLink>
      <NavLink
        to={{ pathname: "https://www.google.com/" }}
        target="_blank"
      >
       <GoogleOutlined style={{fontSize: "40px", marginTop: "8px", marginLeft: "15px"}}/>
      </NavLink>
    </>
  );
}

export default Footer;
