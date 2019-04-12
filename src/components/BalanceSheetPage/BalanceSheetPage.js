import React, {useEffect} from "react"
import { connect } from 'react-redux';
import { fetchBalanceSheet } from '../../actions/StockActions';

const BalanceSheetPage = ({fetchBalanceSheet, balancesheet, ...props}) => {
    console.log(balancesheet.balanceSheet);

    useEffect(() => {
        const {symbol} = props.match.params;
        console.log(symbol);
        fetchBalanceSheet(symbol);
    }, [])

    const displayBalanceSheet = () => {
        return(
            Object.keys(balancesheet.balanceSheet).map((key, index) => <li key={index}><strong>{key}: </strong>{balancesheet.balanceSheet[key]}</li>)
        )
    }

    return(
        <div>
            <h3>BALANCE SHEET FOR {props.match.params.symbol}</h3>
            <ul>
                {displayBalanceSheet()}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    balancesheet: state.stocks,
});

const mapDispatchToProps = dispatch => ({
    fetchBalanceSheet: value => dispatch(fetchBalanceSheet(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BalanceSheetPage);