import { SEARCH_SYMBOL, GET_BALANCE_SHEET } from '../actions/StockActions';

const initialStockState = {
    stock: {},
    selected: null,
    balanceSheet: {}
};

export const stocks = (state = initialStockState, action) => {
    switch (action.type) {
        
        case SEARCH_SYMBOL:
            let stockInfo = action.results[0];
            console.log(stockInfo)
            return {
                ...state,
                stock: stockInfo
            };
        case GET_BALANCE_SHEET:
            let balanceSheet = action.results.balancesheet[0];
            console.log(balanceSheet)
            return {
                ...state,
                balanceSheet: balanceSheet
            };

        default:
            return state;

  }
};