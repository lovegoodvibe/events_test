import React, {Component} from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
class Demo extends Component {
  render() {
      return (
          <div>
              <Header></Header>
              <Body
                  name = "nguyen van a"
                  age = "12"
              >nong dan</Body>
              <Body
                  name = "nguyen van b"
                  age = "27"
              >giao vien</Body>
          </div>

      );
  }
}
export default Demo;

