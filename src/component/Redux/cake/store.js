import {createStore} from 'redux'
import cakereducer from './cakeReducer'

const store=createStore(cakereducer)
export default store