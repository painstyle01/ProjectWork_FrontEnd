import React from 'react'
import './BookPage.css'
import '../../fonts/fonts/Igrasans.ttf'
import Grid from '@mui/material/Grid'
import arrow from '../../../images/smallArrow.png'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'


const TempData = [
    {
        name: 'Франко, Іван Якович. Земле, моя всеплодющая мати',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        photo: 'https://i.ibb.co/zbV1q5t/image-19.png'
    },
]

function BookPage(props) {

    const bookId = useParams().id;


    let books = JSON.parse(localStorage.getItem('libraryBooks'));
    let book;
    books.map((e) => {
        if(e.id==bookId) {
            book = e;
        }
        else {
            return false
        };
    })

    useEffect(() => {
        var a = document.getElementsByClassName("bookHeader")[0]
        a.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"" + book.url_to_photo + "\")"
      });

    
      function addToCart(e) {
        let currentCart = JSON.parse(localStorage.getItem('Cart'))
        if(currentCart===null){
            let productToOrder = {
                chosenProduct: book,
                count: 1
            }
            localStorage.setItem('Cart', JSON.stringify([productToOrder]))
        }
        else{
            let found = 0;
            currentCart.map((e)=>{
                if(e.chosenProduct.id==book.id){
                    e.count += 1;
                    found = 1;
                }
            })
            if(found==0){
              let productToOrder = {
                chosenProduct: book,
                count: 1
              }
              currentCart.push(productToOrder)  
            }
            
            localStorage.setItem('Cart', JSON.stringify(currentCart))
        }

        alert("Книга додана в корзину")

    }


    return(
        <div id="bookMainContainer">
            <div class="bookHeader" id="first">
                <div className="bookTitle">{book.name}</div>
            </div>

            <Grid className="bookInfo" container spacing={2}>
                <Grid item xs={5}>
                    <div className="bookDescriptionTitle">Опис</div>
                    <div className="bookDescription">{book.description}</div>
                    <div className="bookView">Переглянути примірник <img src={arrow} alt="not found"/> </div> 
                    <div className="bookView" onClick={addToCart}>
                        Придбати Книгу <img src={arrow} alt="not found"/>
                    </div>
                </Grid>
                <Grid item xs={7} className="bookImgContainer">
                    <img className="bookImg" src={ book.url_to_photo} alt="not found"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default BookPage;