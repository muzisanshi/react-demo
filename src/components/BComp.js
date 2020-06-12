import React,{Component} from 'react'
import '../css/BComp.scss'

class BComp extends Component{
	
	state = {}
	
	render(){
		return (
			<div className="btitle">我是BComp,age是{this.props.age}
				<span className="nihao">你好</span>
			</div>
		)
	}
	
	componentDidMount(){
		this.$bus.addListener('change',(d) => {
			console.log(d)
		})
	}
	
}

export default BComp