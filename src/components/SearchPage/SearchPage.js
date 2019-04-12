import React from "react"
import SearchSymbolField from '../../components/SearchSymbolField/SearchSymbolField';
import DisplayStockInformation from '../../components/DisplayStockInformation/DisplayStockInformation';

const SearchPage = () => {
    return(
        <div>
            <h2>Search for stock symbol</h2>
            <SearchSymbolField />
            <DisplayStockInformation />
        </div>
    )
}

export default SearchPage;