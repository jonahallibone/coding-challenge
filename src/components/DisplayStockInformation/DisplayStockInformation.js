import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const DisplayStockInformation = ( stocks ) => {

    const displayInformation = (stock) => {
        return(
            <ul>
            <li>Ask Price: {stock.askPrice}</li>
            <li>Ask Size: {stock.askSize} </li>
            <li>{stock.bidPrice}</li>
            <li>{stock.bidSize}</li>
            <li>{stock.lastSalePrice}</li>
            <li>{stock.lastSaleSize}</li>
            <li>{stock.lastSaleTime}</li>
            <li>{stock.lastUpdated}</li>
            <li>{stock.sector}</li>
            <li>{stock.securityType}</li>
            <li>{stock.symbol}</li>
            <li>{stock.volume}</li>
            </ul>
        )
    }
    
    return (

        <div>
            {
                Object.keys(stocks.stock.stock).length > 0
                ?
                    <div>
                    <h2><Link to={`/symbol/${stocks.stock.stock.symbol}`}>{stocks.stock.stock.symbol}</Link></h2>
                    {displayInformation(stocks.stock.stock)}
                    </div>
                :
                <h3>No Stock Selected</h3>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    stock: state.stocks,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayStockInformation);