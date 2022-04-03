import React from 'react';
import './Shop.css';
import Grid from '@mui/material/Grid'
// import {BrowserRouter as
//     Route, Routes, Link, Router
//   } from 'react-router-dom';
//import productPage from '../ProductPage/ProductPage'

let Temporarydata = 
    {
        products: [
        {
            id: 1,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        },
       ],

        categories: ['Література', 'Чашки', 'Футболки']
    }

    fetch('http://frankos-museum-backend.azurewebsites.net/api/products/')
        .then(response => response.json())
        .then(data =>(localStorage.setItem('products', JSON.stringify(data))));


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedFilter: 0, products: JSON.parse(localStorage.getItem('products'))};
    }

    GetOneProduct = (element) => {

    }

    render(){
        return(
                <div className="container">
                    <h2>Магазин</h2>

                    <Grid container spacing={1} className="menuLine">
                        {Temporarydata.categories.map((object, index)=>{
                            return(
                                <Grid item className="filterItem" key={index}>
                                    {object}
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Grid container spacing={6}>
                    {this.state.products.map((object) => {
                        return( 
                                <Grid item xs={2} 
                                    className="productCard"
                                    onClick = {() => this.GetOneProduct(object)}
                                    key = {object.id}
                                    >
                                    <div className="productimage"><img src={object.url_to_photo} alt="not found"></img></div>
                                    <span className="productTitle">{object.name}</span>
                                    <p className="productPrice">{object.price}</p>
                                </Grid>
                        )
                    })}  
                    </Grid>
                    {/* <Routes>
                        <Route path="/products" element={<productPage/>}/>
                    </Routes> */}
                </div>
        )
    }
}

export default Shop;