import React,{Fragment, Component} from 'react';

class About extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
    <div>关于我们，{this.props.match.params.id}</div>
    );
  }
}

export default About;