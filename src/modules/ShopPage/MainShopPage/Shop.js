import React from 'react';
import './Shop.css';
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'


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

                    <Grid container spacing={0} marginBottom={'30px'}>
                    {this.state.products.map((object) => {
                        return( 
                                
                                    <Grid item xs={6} sm={4} md={3} lg={2}
                                        className="productCard"
                                        onClick = {() => this.GetOneProduct(object)}
                                        key = {object.id}
                                        >
                                        <Link to={"/products/"+object.id}>
                                        <img src={object.url_to_photo} alt="not found"></img>
                                        <span className="Title">{object.name}</span>
                                        <p className="Price">{object.price} грн</p>
                                        </Link>
                                    </Grid>
                                
                        )
                    })}     
                    </Grid>
                    
                </div>
        )
    }
}

export default Shop;
