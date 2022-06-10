import { combineReducers } from 'redux'
import { fetchData } from './reducer'


export default combineReducers({
    alldata:fetchData,
    
    
})