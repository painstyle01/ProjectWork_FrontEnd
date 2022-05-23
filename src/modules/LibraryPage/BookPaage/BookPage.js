import React from 'react'
import './BookPage.css'
import '../../fonts/fonts/Igrasans.ttf'
import Grid from '@mui/material/Grid'
import arrow from '../../../components/img/smallArrow.png'


const TempData = [
    {
        name: 'Франко, Іван Якович. Земле, моя всеплодющая мати',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        photo: 'https://i.ibb.co/zbV1q5t/image-19.png'
    },
]

function BookPage(props) {

    return(
        <div id="bookMainContainer">
            <div class="bookHeader">
                <div className="bookTitle">{TempData[0].name}</div>
            </div>

            <Grid className="bookInfo" container spacing={2}>
                <Grid item xs={5}>
                    <div className="bookDescriptionTitle">Опис</div>
                    <div className="bookDescription">{TempData[0].description}</div>
                    <div className="bookView">Переглянути примірник <img src={arrow} alt="not found"/> </div> 
                    <div className="bookView">Придбати Книгу <img src={arrow} alt="not found"/> </div>
                </Grid>
                <Grid item xs={7} className="bookImgContainer">
                    <img className="bookImg" src={TempData[0].photo} alt="not found"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default BookPage;