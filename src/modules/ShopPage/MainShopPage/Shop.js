import React from 'react';
import './Shop.css';
import ProductCard from '../../../components/ShopComponents/ProductCard'
import Slider from '../MainShopPage/Slider'
import { Box } from '@mui/material';

let Temporarydata = [
    {
        photo: 'https://cdn.shopify.com/s/files/1/1331/9421/products/5_copy_grande.jpg?v=1586086912',
        title: 'Freud Museum Shop Gift Card',
        price: '5.00',
    },
    {
        photo: 'https://cdn.shopify.com/s/files/1/1331/9421/products/CodeNameCover_grande.jpg?v=1636443318',
        title: 'Code name \'Mary\'',
        price: '15.00',
    },
    {
        photo: 'https://cdn.shopify.com/s/files/1/1331/9421/products/FREUDMUSEUMCHRISTMASHAMPER_grande.jpg?v=1636440587',
        title: 'Hamper',
        price: '35.00',
    },
    {
        photo: 'https://cdn.shopify.com/s/files/1/1331/9421/products/FreudMuseumMerryChristamsCard_grande.jpg?v=1636441811',
        title: 'Mery Christmas',
        price: '5.00',
    },
    {
        photo: 'https://cdn.shopify.com/s/files/1/1331/9421/products/TheWolfMan_sDreamJigsawPuzzle_grande.jpg?v=1636441259',
        title: 'The Wolf Man\'s Dream Jigsaw Puzzle',
        price: '22.00',
    },
]

class Shop extends React.Component {
    render() {
        return(
            <div>

                <div style={{marginBottom: '100px', textAlign: 'center'}}>HEADER</div>

                <Slider/>

                <h2><span>Featured Products</span></h2>

                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2}}>
                   {Temporarydata.map(function(element){
                        return <ProductCard data={element}/>
                    })}
                </Box>

                <div style={{marginTop: '100px', textAlign: 'center'}}>FOOTER</div>

            </div>
        )
    }
}

export default Shop;