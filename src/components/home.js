import React,{PureComponent, Component} from 'react';
import {withRouter} from 'react-router-dom'
class Child extends PureComponent {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
       <div>我是一个子组件</div>
    );
  }
}

let WithChild = withRouter(Child);

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>我是首页</div>
        <Child />
        {/* <WithChild /> */}
      </div>
       
    );
  }
}

export default Home;