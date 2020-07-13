import React , { PureComponent } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import About from './about.js';

class Detail extends PureComponent {
  constructor() {
    super();
    this.handleToHome = this.handleToHome.bind(this);
  }
  render() {
    return (
       <div>我是详情页
         <button onClick={this.handleToHome}>回到首页</button>
         <br/>
        
         <NavLink to='/detail/about/111'>话题1</NavLink>
         <NavLink to='/detail/about/222'>话题2</NavLink>
         <NavLink to='/detail/about/333'>话题3</NavLink>
         <Switch>
           <Route path='/detail/about/:id' component={About}></Route>
           <Redirect from='/detail' to='/detail/about/111' />
         </Switch>
       </div>
    );
  }
  handleToHome(){
    this.props.history.push('/home');
  }
}
export default Detail;