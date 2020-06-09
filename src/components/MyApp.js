import React,{Component} from 'react';

class MyApp extends Component{
	
	constructor(){
		super();
		this.state = {
			
		}
	}
	
	render(){
		return (
			<div>我是MyApp</div>
		)
	}
	
	componentDidMount(){
		console.log('componentDidMount')
	}
	
}

export default MyApp;