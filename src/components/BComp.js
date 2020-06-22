import React,{Component} from 'react'
import {conn,mapState,mapDispatch} from '../store/index'
import '../css/BComp.scss'

class BComp extends Component{
	
	state = {}
	
	render(){
		return (
			<div className="btitle">我是BComp,age是{this.state.age}
				<span className="nihao">你好</span>
				
				<input type="button" value="修改年龄" onClick={this.changeAge}/>
				
			</div>
		)
	}
	
	changeAge = () => {
		this.props.setGlobalState({
			name:'UPDATE_PAGE',
			type:'combine',// cover覆盖,combine合并
			payload:{
				pageName:"MyApp",
				pageState:{
					age:100
				}
			}
		})
	}
	
	constructor(props){
		super(props)
		this.state = this.props.pageStates['MyApp'] || {}
	}
	
	componentDidMount(){
		// this.$bus.addListener('change',(d) => {
		// 	console.log(d)
		// })
	}
	
}

BComp = conn(mapState,mapDispatch)(BComp)
export default BComp