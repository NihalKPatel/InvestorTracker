import React from 'react'

export const RowCoin = (props) => {
    const {coin} = props;

    return (
        <tr>
            <td>{coin.id}</td>
            <td><img src={coin.image} alt={coin.name} width="3%" className="me-4"/>
                {coin.name}
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
            </td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}
