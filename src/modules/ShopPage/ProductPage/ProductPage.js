import React from 'react'
import Grid from '@mui/material/Grid'
import './ProductPage.css'
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import {UseEffect} from 'react'
import {Link} from 'react-router-dom'

function ProductPage(Product){

    const [currentPhoto, setPhoto] = React.useState(1);
    const productId = useParams().id;
    let products = JSON.parse(localStorage.getItem('products'));

    let product;
    products.map((e) => {
        if(e.id==productId) product = e;
        else return false;
    })

    let PhotoChange = (e) => {
        setPhoto(e.target.id)
    }
    

    function addToCart(e) {
        let currentCart = JSON.parse(localStorage.getItem('Cart'))
        if(currentCart===null){
            localStorage.setItem('Cart', JSON.stringify([product]))
        }
        else{
            currentCart.push(product)
            localStorage.setItem('Cart', JSON.stringify(currentCart))
        }
    }



    return(
        <Grid container spacing={1}>

            <Grid item xs={12} className="productContainer">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <img src={product.url_to_photo}
                                        className='photos' 
                                        alt="not found"/>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={10} >
                                <img src={product.url_to_photo} id='mainImage' alt="not found"/>
                            </Grid>
                                    
                        </Grid>
                    

                    </Grid>

                    <Grid item xs={6} className="productInfo">
                        <div className="productTitle">{product.name}</div>

                        <br/><div className="productPrice">{product.price}</div>
                        <span className="descriptionHader">Опис</span>
                        <div className="productDescription">{product.description}</div>

                        <Button variant="fef" color="default" className="makeOrderButton" onClick={addToCart}>
                          Додати у кошик
                        </Button>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item xs={12} className="otherProducts">   
                <span className="otherProductsTitle">Наші рекомендації</span>
                <Grid className="otherProductsCards" container spacing={6}>
                    {products.map((object) => {
                            return(
                                <Grid item xs={2} className="productCard">
                                    <Link to={"/products/"+object.id}>
                                        <img src={object.url_to_photo} alt="not found"></img>
                                        <span className="otherProductTitle">{object.name}</span>
                                        <p className="otherProductPrice">{object.price}</p>
                                    </Link>
                                </Grid>
                            )
                    })} 
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default ProductPage;