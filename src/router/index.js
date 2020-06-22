import React,{Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {conn,mapState,mapDispatch} from '../store/index'

import MyApp from '../components/MyApp'
import AComp from '../components/AComp'
import BComp from '../components/BComp'

class RouterMap extends Component{
	
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route exact={true} path="/" component={MyApp}></Route>
					<Route exact={true} path="/acomp" component={AComp}></Route>
					<Route exact={true} path="/bcomp" component={BComp}></Route>
				</Switch>
			</HashRouter>
		)
	}
	
}

RouterMap = conn(mapState,mapDispatch)(RouterMap)
export default RouterMap
