import React from 'react'
import Grid from '@mui/material/Grid'
import './ProductPage.css'
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function ProductPage(Product){

    const [currentPhoto, setPhoto] = React.useState(1);
    const productId = useParams().id;
    let products = JSON.parse(localStorage.getItem('products'));

    const [open, setOpen] = React.useState(false);


    let product;
    products.map((e) => {
        if(e.id==productId) {
            product = e;
        }
        else {
            return false
        };
    })


    let PhotoChange = (e) => {
        setPhoto(e.target.id)
    }
    

    function addToCart(e) {
        let currentCart = JSON.parse(localStorage.getItem('Cart'))
        if(currentCart===null){
            let productToOrder = {
                chosenProduct: product,
                count: 1
            }
            localStorage.setItem('Cart', JSON.stringify([productToOrder]))
        }
        else{
            let found = 0;
            currentCart.map((e)=>{
                if(e.chosenProduct.id==product.id){
                    e.count += 1;
                    found = 1;
                }
            })
            if(found==0){
              let productToOrder = {
                chosenProduct: product,
                count: 1
              }
              currentCart.push(productToOrder)  
            }
            
            localStorage.setItem('Cart', JSON.stringify(currentCart))

            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


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

                <Stack spacing={1} sx={{ width: '100%' }}>
                        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Ви добавили продукт у кошик
                            </Alert>
                        </Snackbar>
                </Stack>
            </Grid>



            <Grid item xs={12} className="otherProducts">   
                <span className="otherProductsTitle">Наші рекомендації</span>
                <Grid className="otherProductsCards" container spacing={0}>
                    {products.map((object) => {
                            return(
                                <Grid item xs={6} sm={4} md={3} lg={2} className="productCard">
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
