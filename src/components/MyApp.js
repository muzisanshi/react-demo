import React,{Component} from 'react'
import BComp from './BComp'
import AComp from './AComp'

class MyApp extends Component{
	
	state = {
		name:'lilei',
		age:31
	}
	
	cb = () => {
		console.log('cb')
		console.log(this.state.age)
	}
	
	createElements(){
		return [1,1,1,1,1].map((it,id) => {
			return (<label key={id}>你大爷的</label>)
		})
	}
	
	render(){
		
		// 定义一个函数组件
		function FunComp(props){
			return (
				<label>FunComp</label>
			)
		}
		
		return (
			<div onClick={this.cb}>
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
		const stateRef = this.state;
		setTimeout(() => {
			this.setState({name:'John'})
			console.log(stateRef === this.state)
			this.$bus.emit('change','fuckyou')
		},5000)
		// console.log(this.refs.bcomp.props.age)
		
	}
	
}

export default MyApp