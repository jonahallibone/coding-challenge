import { combineReducers } from 'redux';
import { stocks } from "./StockReducer";

export default combineReducers({
    stocks,
});