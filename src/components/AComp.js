import React,{Component} from 'react'
import {conn,mapState,mapDispatch} from '../store/index'
import '../css/AComp.scss'

class AComp extends Component{
	
	state = {}
	
	render(){
		return [
			<label key="fuck">fuck you</label>
		]
	}
	
	componentDidMount(){
		
	}
	
}

AComp = conn(mapState,mapDispatch)(AComp)
export default AComp