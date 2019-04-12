import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSymbol } from '../../actions/StockActions';

const SearchSymbolField = ({ fetchSymbol }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value
        setValue(inputValue);
    }
    
    const handleClick = () => {
        fetchSymbol(value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>Search</button>
        </div>
    );
};

const mapStateToProps = state => ({
    stocks: state.stocks,
});

const mapDispatchToProps = dispatch => ({
    fetchSymbol: value => dispatch(fetchSymbol(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSymbolField);