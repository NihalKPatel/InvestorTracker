import React from 'react'
import {RowCoin} from './row-coin'

const titles = ['#', 'Coin', 'Price', 'Price change', '24h volume']

export const TableCoins = (props) => {
    const {coins, search} = props;

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
            <tr>
                {titles.map(title => <td key={title}>{title}</td>)}
            </tr>
            </thead>
            <tbody>
            {filteredCoins.map(coin =>
                <RowCoin coin={coin} key={coin.id}/>
            )}
            <p>test</p>
            </tbody>
        </table>
    )
}
