import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { connect } from 'react-redux';

class ProductList extends Component {

    render() {
        return (
            <div>
                <ul>
                   {this.props.reduxState.productReducer.map((product, i) => {
                       return (
                           <ProductListItem key={i} product={product} />
                       );
                   })} 
                </ul>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ 
    reduxState 
})

export default connect(putStateOnProps)(ProductList);