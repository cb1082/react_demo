// import React , { Component , Fragment } from 'react';

// class Header extends Component {
// 	render(){
// 		return (
// 			<Fragment>
// 				<h2>这是一个组件</h2>
// 				<div>这是一个盒子</div>
// 			</Fragment>
// 		);
// 	}
// }
// export default Header;

// import React, {Component , Fragment} from 'react';

// class Header extends Component {
// 	render() {
// 		return (
// 			<Fragment>
// 				<div>程彬很牛逼</div>
// 				<h2>成斌太牛逼了</h2>
// 			</Fragment>
// 		)
// 	}
// }

// export default Header;


// import React,{Fragment,Component} from 'react';

// class header extends Component{
// 	render() {
// 		return (
// 			<Fragment>
// 				<h2>2121</h2>
// 				<div className='box'>这是一个盒子</div>
// 				<label htmlFor="">111</label>
// 				<br/>
// 				<img src="" alt=""/>
// 			</Fragment>
// 		)
// 	}
// }

// export default header;

// import React, {Fragment, Component} from 'react'

// class Header extends Component{
// 	constructor() {
// 		super();
// 		this.message = 'hello world';
// 		// setTimeout(() => {
// 		// 	console.log(this.message);
// 		// 	this.message = 'hello React';
// 		// }, 2000);
// 	}
// 	render() {
// 		return (
// 			<Fragment>
// 				<div>
// 					{ this.message }
// 				</div>
				
// 			</Fragment>
// 		)
// 	}
// }
// export default Header;

// import React from 'react'

// function Header() {
// 	return (
// 		<h2>成斌212121</h2>
// 	)
// }
// export default Header;

// import React, { Fragment, Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.message='<h2>11111</h2>';
// 	}
// 	render() {
// 		return (
// 			<Fragment>
// 				<div>
// 					{this.message}
// 				</div>
// 			</Fragment>
// 		)
// 	}
// }
// export default Header;


// import React, { Fragment, Component} from 'react';

// class Header extends Component{
// 	constructor() {
// 		super();
// 		this.message = '<h2>hello react</h2>';
// 		this.list = [ <li>111</li> , <li>222</li> , <li>333</li> ];
// 	}
// 	render() {
// 		return(
// 		<Fragment>
// 			{this.message}
// 			<div dangerouslySetInnerHTML={{__html: this.message}}></div>
// 			<ul>
// 				{this.list}
// 			</ul>
// 		</Fragment>
// 		)
// 	}
// }

// export default Header;



// import React , {Fragment , Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.message ='hello react';
// 		this.isShow = true;
// 	}
//    render() {
// 		 var info = this.isShow && <h2>这是一段信息</h2>
// 		 return (
// 			 <Fragment> 
// 				 <div title={this.message}>这是一个盒子</div>
// 				 <div>
// 					 {''} | {false} | {null} | {undefined}
// 				 </div>
// 				 <div>
// 					 {info}
// 				 </div>
// 			 </Fragment>
// 		 )
// 	 }
// }

// export default Header;


// import React, {Fragment, Component} from 'react'

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.message = 'hello react';
// 		this.list = ['第一项', '第二项', '第三项']; 
// 	}
// 	render() {
// 		var content = this.list.map((item, index) => {
// 			console.log(item);
// 			return <li key={index}>{item}</li>;
// 		})
// 		return (
// 			<Fragment>
// 				<div>{this.message}</div>
// 				<ul>{content}</ul>
// 				<ul>
// 					{
// 						this.list.map((item, index) => {
// 							return <li key={index}>{item}</li>;
// 						})
// 					}
// 				</ul>
// 			</Fragment>
// 		)
// 	}
// }

// export default Header;



// import React, { Component} from 'react';

// class Title extends Component {
// 	constructor(props) {
// 		super(props);
// 		console.log(this.props);
// 		this.props.getData('来自子组件的问候');
// 		console.log(this.props.children);
// 	}
// 	render() {
// 		return (
// 		<div>{this.props.children[0]}这是子组件,{this.props.message}{this.props.children[1]}</div>
// 		)
// 	}
// }

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.parentInfo = '来自父组件的问候';
// 	}
// 	render() {
// 		return (
// 			<div>
// 				这是父组件
// 				<Title message={this.parentInfo} getData={this.getData}>
// 					<h2>这是一个标题1</h2>
// 					<h2>这是一个标题2</h2>
// 				</Title>
// 			</div>
// 		)
// 	}
// 	getData(data) {
// 		console.log(data);
// 	}
// }

// export default Header;


// import React, {Fragment, Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<div onClick={this.handleChange}>aaaa</div>
// 				<div onClick={(ev) => {this.handleChange(123,ev)}}>1111</div>
// 			</div>
// 		)
// 	}
// 	handleChange(num, ev){
// 		console.log(num);
// 		console.log(ev);
// 		console.log(this);
// 		console.log(ev.pageX);
// 		ev.persist();
// 		setTimeout(()=>{
// 			console.log(2222);
// 		},1000)
// 	}
// }
// export default Header;


// import React, {Fragment, Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			message : 'hello react',
// 			count: 0,
// 			list: ['111', '222', '333'],
// 			info: {
// 				username: '小明',
// 			}
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return(
// 			<div>
// 				<div onClick={this.handleChange}>
// 					{this.state.message}
// 				</div>
// 				<ul>
// 					{
// 						this.state.list.map((item, index) => {
// 							return <li key={index}>{item}</li>
// 						})
// 					}
// 				</ul>
// 				<div>{this.state.info.username}</div>
// 			</div>
			
// 		)
// 	}
// 	handleChange(){
// 		 let cloneList = [...this.state.list];
// 		 cloneList.push('444');
// 		 this.setState({
// 			 list: cloneList,
// 		 })
// 		 let cloneInfo = {...this.state.info};
// 		 cloneInfo.username = '成斌';
// 		 this.setState({
// 			 info: cloneInfo
// 		 })

// 	}
// }
// export default Header;



// import React, {Fragment ,Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			message: 'aaaa'
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				  <input type="text" value={this.state.message} onChange={this.handleChange}/>
// 				  <p>{this.state.message}</p>
// 			 </div>
// 		);
// 	}
// 	handleChange(ev){
// 		this.setState({
// 			message : ev.target.value,
// 		})
// 	}
// }
// export default Header;


// import React, {Fragment, Component} from 'react';

// class Header extends Component{
// 	constructor() {
// 		super();
// 		this.state = {
// 			message: '111'
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 <input type="text" onInput={this.handleChange}/>
// 				 <p>{this.state.message}</p>
// 			 </div>
// 		);
// 	}
// 	handleChange(ev) {
// 		this.setState({
// 			message: ev.target.value,
// 		})
// 	}
// }
// export default Header;


// import React, {Fragment ,Component} from 'react';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			message: '',
// 			list: [],
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleAdd = this.handleAdd.bind(this);
// 		this.handleRemove = this.handleRemove.bind(this);
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 <input type="text" value={this.state.message} onChange={this.handleChange} onKeyDown={this.handleAdd}/>
// 				 <ul>
// 					 {
// 						 this.state.list.map((item, index) => {
// 						 	return <li key={index}>{item}<button onClick={()=>{this.handleRemove(index)}}>x</button></li>
// 						 })
// 					 }
// 				 </ul>
// 			 </div>
// 		);
// 	}
// 	handleChange(ev) {
// 		this.setState({
// 			message: ev.target.value,
// 		})
// 	}
// 	handleAdd(ev) {
// 		if (ev.keyCode === 13) {
// 			this.setState({
// 				list:[this.state.message,...this.state.list],
// 				message: '',
// 			})
// 		}
// 	}
// 	handleRemove(index) {
// 		var cloneList = [...this.state.list];
// 		cloneList.splice(index, 1);
// 		this.setState({
// 			list:cloneList
// 		})
// 	}
// }
// export default Header;


// import React, {Fragment, Component} from 'react';

// class Header extends Component{
// 	constructor() {
// 		 super();
// 		 this.state = {
// 			 myValue: 0,
// 			 rmbValue: 0
// 		 }
// 		 this.handleMy = this.handleMy.bind(this);
// 		 this.handleRmb = this.handleRmb.bind(this);
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 <MyInput myValue={this.state.myValue} handleMy={this.handleMy}></MyInput>
// 				 <RmbInput rmbValue={this.state.rmbValue} handleRmb={this.handleRmb}></RmbInput>
// 			 </div>
// 		);
// 	}
// 	handleMy(ev) {
// 		this.setState({
// 			myValue:ev.target.value,
// 			rmbValue: ev.target.value * 6,
// 		})
// 	}
// 	handleRmb(ev) {
// 		this.setState({
// 			myValue:ev.target.value/6,
// 			rmbValue:ev.target.value,
// 		})
// 	}
// }
// class MyInput extends Component {
// 	render(){
// 		return (
// 			<div>
// 				{/*受控组件 ，子父通信*/}
// 				美元： <input type="text" value={this.props.myValue} onChange={this.props.handleMy} />
// 			</div>
// 		);
// 	}
// }

// class RmbInput extends Component {
// 	render(){
// 		return (
// 			<div>
// 				人民币： <input type="text" value={this.props.rmbValue} onChange={this.props.handleRmb} />
// 			</div>
// 		);
// 	}
// }

// export default Header;

// import React, {Fragment,Component,createRef} from 'react';

// class Title extends Component {
// 	render(){
// 		return (
// 			<div>这是一个子组件</div>
// 		);
// 	}
// }

// class Header extends Component {
// 	constructor(){
// 		super();
// 		this.refObj = createRef();
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 <div ref='elem'>hello</div>
// 				 <Title ref='elem2'></Title>
// 				 <input type="text" ref={this.refObj}/>
// 				 <input type="text" ref={this.handleRef}/>
// 			 </div>
// 		);
// 	}
// 	componentDidMount() {
// 		console.log( this.refs.elem );
// 		console.log( this.refs.elem2 );
// 		console.log(this.refObj.current);
// 	}
   
// }

// export default Header;


// import React,{Fragment, Component} from 'react';

// class Child extends Component {
// 	render() {
// 		return (
// 		<div>这是一个子组件,{this.props.count}</div>
// 		);
// 	}
// 	componentWillReceiveProps(props) {
// 		console.log('child:componentWillReceiveProps', props)
// 	}
// 	shouldComponentUpdate(nextProps,nextState) {
// 		if(nextProps.count === this.props.count) {
// 			return false;
// 		}else {
// 			return true;
// 		}
// 	}
// } 

// class Header extends Component {
// 	constructor() {
// 		super();
// 		console.log('constructor');
// 		this.state = {
// 			count: 0,
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		console.log('render');
// 		return (
// 			<div onClick={this.handleChange}>
// 				<Child count={this.state.count}/>
// 			</div>
// 		);
// 	}
// 	handleChange() {
// 		this.setState({
// 			count:1
// 		})
// 	}
// 	componentWillMount() {
// 		console.log('componentWillMount');
// 	}
// 	componentDidMount() {
// 		console.log('componentDidMount');
// 	}
// 	componentWillUpdate(){
// 		console.log('componentWillUpdate');
// 	}
// 	componentDidUpdate(){
// 		console.log('componentDidUpdate');
// 	}
// 	componentWillReceiveProps(){
// 		console.log('componentWillReceiveProps');
// 	}
// }
// export default Header;

// import React, {Fragment, Component} from 'react';
// import { StyleSheet, css} from 'aphrodite';
// import './base.css'

// const styles = StyleSheet.create({
// 	red: {
// 		backgroundColor: 'red',
// 		height:'20px',
// 		width: '100px',
// 	}
// })

// class Header extends Component {
// 	constructor() {
// 		super();
// 	}
// 	render() {
// 		return (
// 			 <div className={ css(styles.red)}>
// 				 	bbbb
// 			 </div>
// 		);
// 	}
// }
// export default Header;

// import React,{Fragment,Component} from 'react';
// import {
// 	HashRouter as Router,
// 	Route,
// 	Link,
// 	NavLink,
// 	Redirect,
// 	Switch
// } from 'react-router-dom';


// import About from '../about.js';
// import Home from '../home.js';
// import Detail from '../detail.js';

// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return (
// 			<Router>
// 				{/* <ul>
// 					<li><Link to='/home?userName=xiaoming'>首页</Link></li>
// 					<li><Link to='/about' innerRef = {this.handleChange}>关于</Link></li>
// 					<li><Link to='/detail'>我的</Link></li>
// 				</ul> */}
// 				<NavLink to='/home' activeClassName='selected'>首页</NavLink>
// 				<NavLink to='/about' activeClassName='selected'>关于</NavLink>
// 				<NavLink to='/detail' isActive={()=>{return false}} activeClassName='selected'>我的</NavLink>
// 			  <Switch>
// 					<Route exact path="/home" component={Home}/>
// 					<Route path='/about' component={About}/>
// 					<Route path='/detail' component={Detail}/>
// 					<Redirect from='/*' to='/home'></Redirect>
// 			  </Switch>
// 			</Router>
// 		);
// 	}
// 	handleChange(elem) {
// 		elem.style.border = '1px red solid';
// 	}
// }

// export default Header;


// import React, {Fragment, Component} from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import './base.css';
// class Header extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			isShow: false
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 <button onClick={this.handleChange}>点击</button>
// 				 <ReactCSSTransitionGroup
// 				 	transitionName="fade" 
// 					 transitionEnterTimeout={1500}
// 					 transitionLeaveTimeout={1500}
// 					 transitionAppear={true}
// 					 transitionAppearTimeout={0}
// 				 >
// 						{this.state.isShow && <div className='redBox'></div>}
// 				 </ReactCSSTransitionGroup>
// 			 </div>
// 		);
// 	}
// 	handleChange() {
// 		console.log(2121);
// 		this.setState({
// 			isShow: !this.state.isShow
// 		})
// 	}
// }
// export default Header;
import React, {Fragment , Component} from 'react';

import { createStore } from 'redux';

function reducerFn(state, action){
	if(action.type === 'COUNT_CHANGE') {
		console.log(state);
		let cloneState = {...state};
		console.log(action);
		cloneState.count += action.payload;
		return cloneState;
	}else if (action.type === 'LIST_CHANGE'){
		let	cloneState = {...state};
		cloneState.list.push( action.payload );
		return cloneState;
	}else{
		return false;
	}
}

var store = createStore(reducerFn , {
	count : 3,
	list : [111,222,333]
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);

class Header extends Component {
	constructor() {
		super();
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		store.subscribe(()=>{
			this.setState({});
		})
		console.log(store.getState());
	}
	render() {
		return (
			 <div>
				 <h2>计数器</h2>
				 <button onClick={()=>this.handleChange(1)}>+</button>
				 {store.getState().count}
				 {store.getState().list}
				 <button onClick={()=>this.handleChange(-1)}>-</button>
			 </div>
		);
	}
	handleChange(n) {
		console.log(n);
		store.dispatch({ type: 'COUNT_CHANGE', payload: n });
	}
}

export default Header;