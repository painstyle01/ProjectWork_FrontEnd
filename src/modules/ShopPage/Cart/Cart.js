import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

function Cart(props){
    const [myCart, setMyCart] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        var c = JSON.parse(localStorage.getItem('Cart'))
        let price = 0
        if(c!=null){
            setMyCart(c)
            c.map((e) => price += e.chosenProduct.price * e.count)
        }
        setTotalPrice(price)
      }, [totalPrice]);

      function Delete(e){
          const newCart = [];
          for(let i in myCart){
              if(myCart[i].chosenProduct.id == e.target.id){
                setTotalPrice(totalPrice-myCart[i].price)
                continue;
              }
              else{
                  newCart.push(myCart[i]);
              }
          }
          localStorage.setItem('Cart', JSON.stringify(newCart))
          setMyCart(JSON.parse(localStorage.getItem('Cart')))
      }

      function EditCounter(e){
        e.preventDefault()
        const newCart = [];
        for(let i in myCart){
            if(myCart[i].chosenProduct.id == e.target.id){
                if(e.target.className=="minusProduct") {
                    setTotalPrice(totalPrice-myCart[i].chosenProduct.price)
                    if(myCart[i].count!=1) myCart[i].count -= 1;
                    
                }
                else if(e.target.className=="plusProduct") {
                    setTotalPrice(totalPrice+myCart[i].chosenProduct.price)
                    myCart[i].count += 1;
                }

            }
            newCart.push(myCart[i]);
            localStorage.setItem('Cart', JSON.stringify(newCart))
            setMyCart(JSON.parse(localStorage.getItem('Cart')))
        }
      }
    

    return(
        <div className="mainContainer">
            <span className="cartTitle">Корзина</span>
            <Grid container spacing={1} className="productsInCart">
                {
                    myCart.map((element) => {
                        return(
                            <Grid container spacing={4} className="CartproductCard" alignItems="center">
                                <Grid item xs={2}>
                                    <img className="productImage" src={element.chosenProduct.url_to_photo} alt="not found"/>
                                </Grid>
                                <Grid item xs={5} className="productName">{element.chosenProduct.name}</Grid>
                                <Grid item xs={2} className="productCounter">
                                    <span id={element.chosenProduct.id} className="minusProduct" onClick={EditCounter}>-</span> 
                                    <span className="productCount">{element.count}</span> 
                                    <span id={element.chosenProduct.id} className="plusProduct" onClick={EditCounter}>+</span>    
                                </Grid>
                                <Grid item xs={3} className="productDeleteContainer">
                                    <DeleteIcon id={element.chosenProduct.id} onClick = {Delete}/>
                                    <span className="productDelete" id={element.chosenProduct.id} onClick = {Delete} >Видалити</span>
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
                <Link to = "/order">
                    <div className="orderButton">
                            Оформити замовлення
                    </div>
                </Link>
            </div>    
        </div>
    )
}

export default Cart; 