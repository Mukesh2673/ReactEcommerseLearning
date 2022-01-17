import {createStore} from 'redux'
import rootReducer from './rootReducer'

const store=createStore(rootReducer) //createStore function can store only one reducers
export default store