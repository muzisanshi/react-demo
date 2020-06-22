// 引入redux管理app数据
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const globalState = {
	pageStates:{
		MyApp:{
			name:'lilei',
			age:1000
		}
	}
}

const reducer = (state = globalState , action) => {
	if(!action.name) return state
	
	// 巧妙实现深拷贝
	let stateStr = JSON.stringify(state);
	let curState = JSON.parse(stateStr);
	let curPageStates = curState.pageStates;
	
	switch(action.name){
		case 'UPDATE_PAGE':
			if(action.payload && action.payload.pageName){
				let t = curPageStates[action.payload.pageName]
				if(action.type === 'cover'){
					t = action.payload.pageState
				}
					
				if(action.type === 'combine'){
					t = Object.assign(t , action.payload.pageState)
				}
			}
			break
		default:
	}
	return curState
}

export const store = createStore(reducer)

export const mapState = (state) => {
	return {
		pageStates:state ? state.pageStates : {}
	}
}

export const mapDispatch = (dispatch) => {
	return {
		setGlobalState:dispatch
	}
}

export const Provide = Provider
export const conn = connect
