import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


class Checkout extends Component {
    
    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({ type: 'CLEAR_CART' })
    }

    handleRemoveItem = (product) => {
        this.props.dispatch({ type: 'DELETE_PRODUCT', payload: product })

    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <ul>
                    {this.props.reduxState.checkoutReducer.products.map((product) => {
                        return <li key={product.name}>{product.name}: {product.price} <button onClick={() => this.handleRemoveItem(product)}>Remove Item</button></li>
                    })}
                </ul>
                <p>Total: {this.props.reduxState.checkoutReducer.total}</p>
                <Link to="/">
                    <button onClick={this.handleCheckout}>Checkout</button>
                </Link>
            </div>
        )
    }
}
const putStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putStateOnProps)(Checkout);