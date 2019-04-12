export const SEARCH_SYMBOL = "SEARCH_SYMBOL";
export const GET_BALANCE_SHEET = "GET_BALANCE_SHEET";

export const fetchSymbol = symbol => async dispatch => {
const url = new URL(`https://cloud.iexapis.com/beta/tops?token=${process.env.REACT_APP_API_KEY}&`);
url.searchParams.set('symbols', symbol);

const response = await fetch(url, {
    headers: {
    "Content-Type" : "application/json"
    }
});

const results = await response.json();

dispatch({ type: SEARCH_SYMBOL, results, symbol });
};

export const fetchBalanceSheet = (symbol) => async dispatch => {
    const url = new URL(`https://cloud.iexapis.com/beta/stock/${symbol}/balance-sheet/batch?types=quote,news,chart&range=1m&last=1&token=${process.env.REACT_APP_API_KEY}`);
    
    const response = await fetch(url, {
        headers: {
        "Content-Type" : "application/json"
        }
    });
    
    const results = await response.json();
    
    dispatch({ type: GET_BALANCE_SHEET, results, symbol });
};
