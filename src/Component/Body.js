import React, {Component} from "react";
class Body extends Component {
   constructor(props) {
        super(props);
        this.event1= this.event1.bind(this);
    }

    event = () =>  /* sự kiện sẽ xảy ra khi được gọi */ {
    //  console.log(); // hiện ở màn hình điều khiển chuỗi a
      alert(this.props.children + " "  + this.props.age) // hiện message chuỗi a
    };
    event1()  /* sự kiện sẽ xảy ra khi được gọi */ {
        //console.log(); // hiện ở màn hình điều khiển chuỗi a
        alert(this.props.children + " "  + this.props.age) // hiện message chuỗi a
    };
    event2(a)  /* sự kiện sẽ xảy ra khi được gọi */ {
        console.log(a); // hiện ở màn hình điều khiển chuỗi a
        alert(a) // hiện message chuỗi a
    };
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.name}<br/>
                        {this.props.age} tuoi<br/>
                        Nghe nghiep:
                    </p>
                    <a onClick={() => {this.event2(this.props.name + " " + this.props.children)}}>xem them</a> // cách 1
                    <a onClick={this.event1}>xem them</a> // cách 2
                    <a onClick={this.event}>xem them</a> // cách 3
                </div>
            </div>

        );
    }
}
export default Body;
