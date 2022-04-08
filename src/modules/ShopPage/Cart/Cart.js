import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';

fetch('http://frankos-museum-backend.azurewebsites.net/api/products/')
        .then(response => response.json())
        .then(data =>(localStorage.setItem('myCart', JSON.stringify(data))));

function Cart(props){
    const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem('myCart')))
    let [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let price = 0
        myCart.map((e) => price += e.price)
        setTotalPrice(price)
      });

      function Delete(e){
          e.preventDefault()
          const newCart = [];
          for(let i in myCart){
              if(myCart[i].id == e.target.id){
                continue;
              }
              else{
                  newCart.push(myCart[i]);
              }
          }
          localStorage.setItem('myCart', JSON.stringify(newCart))
          setMyCart(JSON.parse(localStorage.getItem('myCart')))
      }

    return(
        <div className="mainContainer">
            <span className="cartTitle">Корзина</span>
            <Grid container spacing={1} className="productsInCart">
                {
                    myCart.map((element) => {
                        return(
                            <Grid container spacing={4} className="productCard">
                                <Grid item xs={2}>
                                    <img className="productImage" src={element.url_to_photo} alt="not found"/>
                                </Grid>
                                <Grid item xs={5} className="productName">{element.name}</Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={2} className="productDeleteContainer">
                                    <DeleteIcon id={element.id} onClick = {Delete}/>
                                    <span className="productDelete" id={element.id} onClick = {Delete}>Видалити</span>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <div className="orderContainer">
                <div className="totalPrice">
                    До оплати: {totalPrice} грн
                </div>  

                <div className="orderButton">
                    Оформити замовлення
                </div>
            </div>
                
        </div>
    )
}

export default Cart; 