import React from 'react';
import './ProductCard.css'
import { Card } from '@mui/material';

class ProductCard extends React.Component {
    render() {
        return(
            <Card className="Card"> 
                <img src={this.props.data.photo} alt="none" className="Image"/>
                {this.props.data.title}
                <p>${this.props.data.price}</p>
            </Card>
        )
    }
}

export default ProductCard;