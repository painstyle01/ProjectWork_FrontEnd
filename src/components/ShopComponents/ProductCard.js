import React from 'react';
import './ProductCard.css'
import { Grid } from '@mui/material';

let Temporarydata = 
    {
        products: [
        {
            id: 1,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        },
        {
            id: 2,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Code name \'Mary\'',
            price: '15.00',
        },
        {
            id: 3,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Hamper',
            price: '35.00',
        },
        {
            id: 4,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Mery Christmas',
            price: '5.00',
        },
        {
            id: 5,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'The Wolf Man\'s Dream Jigsaw Puzzle',
            price: '22.00',
        },
        {
            id: 6,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        },
        {
            id: 7,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        }],

        categories: ['Література', 'Чашки', 'Футболки']
    }

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: Temporarydata}
    }

    render() {
        return(
            <div>
                    {Temporarydata.products.map((object) => {
                            return(
                                <Grid item xs={2} className="productCard">
                                    <img src={object.photo} alt="not found"></img>
                                    <span className="productTitle">{object.title}</span>
                                    <p className="productPrice">{object.price}</p>
                                </Grid>
                            )
                    })} 
            </div>
        )
    }
}

export default ProductCard;