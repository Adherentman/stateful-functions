import { Top} from "./stateful.js"
import { Args} from "./symbol.js"

const _state= new WeakMap()

export function useState( val){
	const stateful= Top()

	// retrieve existing
	const existing= _state.get( stateful)
	if( existing){
		return existing
	}

	// state
	let _val= val
	function getValue(){
		return _val
	}
	function setValue( val){
		const effected= val!== _val
		_val= val
		state[ 0]= val
		if( effected){
			stateful( ...stateful[ Args])
		}
	}

	// marshal, save & return
	const state= [ _val, setValue, getValue]
	_state.set( stateful, state)
	return state
}
export const UseState= useState
export default useState
