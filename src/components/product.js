import React, { Component } from 'react'
import formatCurrency from './dinar';
 
export default class Product extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map ((product)=> (
                         <li key={product._id}>
                             <div className="product">
                        <a href={"#" + product._id}>
                            <div className="product-image">
                            <img src={product.image} alt={product.image}/>
                        </div>
                        <p>{product.title}</p>
                    </a>
                    <div className="product_price">
                    <div>
                    {formatCurrency(product.price)}  
                     </div>
                        <button onClick={()=>this.props.addToCart(product)} className="btn btn-primary">ADD TO CART</button>
                    </div>
                    </div>
                    </li>
                    ))}
                       

                </ul>
            </div>
        )
    }
}
