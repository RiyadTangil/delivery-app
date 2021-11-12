import { combineReducers } from 'redux'
import EcommerceReducer from './EcommerceReducer'


const RootReducer = combineReducers({
    Restaurants: EcommerceReducer,
})

export default RootReducer
