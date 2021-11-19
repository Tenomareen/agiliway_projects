import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <>
      <div style={{display: "flex",justifyContent: "space-around", alignItems: "center"}}>
        <Card
          hoverable
          style={{ width: 240, flex: "center"}}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <div>
            Name 
            <div> Hello World</div>
        </div>
        </div>
      </>
    );
  }
}

export default HomePage;
