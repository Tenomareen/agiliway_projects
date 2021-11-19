import { Layout, Menu, Breadcrumb } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useImperativeHandle } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import notes from "./notes.png";

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.5em;
  height: 100%;
  vertical-align: center;
  height: 62px;
  line-height: 62px;
  margin-right: 5px;
`;

function Navbar() {
  return (
    <>
      <Header style={{display: "flex"}}>
          <NavLink key="home" to="/">
            <LogoBlock>
              <img src={notes} alt={"ads"} height={52}></img>
              Note Book
            </LogoBlock>
          </NavLink>
        <Menu
          className="App-header"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{flexGrow:"1",justifyContent: "end"}}
        >
          <Menu.Item key="1">
            <NavLink to="/home">Home Page</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/notes">Notes</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/statistics">Statistics</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default Navbar;
