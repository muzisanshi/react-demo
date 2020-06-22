import React,{Component} from 'react'
import BComp from './BComp'
import AComp from './AComp'
import {conn,mapState,mapDispatch} from '../store/index'

class MyApp extends Component{
	
	state = {}
	
	cb = () => {
		console.log('cb')
		console.log(this.state.age)
	}
	
	createElements(){
		return [1,1,1,1,1].map((it,id) => {
			return (<label key={id}>你大爷的{this.state.age}</label>)
		})
	}
	
	constructor(props){
		super(props)
		this.state = this.props.pageStates['MyApp'] || {}
	}
	
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps')
		if(nextProps.pageStates !== this.props.pageStates){
			console.log('fuck')
			this.setState(nextProps.pageStates['MyApp'])
		}
	}
	
	render(){
		
		// 定义一个函数组件
		function FunComp(props){
			return (
				<label>FunComp</label>
			)
		}
		
		return (
			<div>
				我是{this.state.name}
				<BComp age={this.state.age}></BComp>
				<FunComp/><FunComp/>
				{
					this.createElements()
				}
				<AComp/>
			</div>
		)
	}
	
	componentDidMount(){
		console.log('componentDidMount')
		// const stateRef = this.state;
		// setTimeout(() => {
		// 	this.setState({name:'John'})
		// 	console.log(stateRef === this.state)
		// 	this.$bus.emit('change','fuckyou')
		// },5000)
		// console.log(this.refs.bcomp.props.age)
		
	}
	
}

MyApp = conn(mapState,mapDispatch)(MyApp)
export default MyApp