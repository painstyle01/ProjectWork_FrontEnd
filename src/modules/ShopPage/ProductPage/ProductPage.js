import React from 'react'
import Grid from '@mui/material/Grid'
import './ProductPage.css'
import { Button } from '@mui/material';

const Temporarydata = 
    {
        photos: ['https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg', 
                  'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
                  'https://cdn.shopify.com/s/files/1/1331/9421/products/patrick_caulfield_d.e.a.d._compact.jpg?v=1556019690',
                  'https://cdn.shopify.com/s/files/1/1331/9421/products/patrick_caulfield_d.e.a.d._compact.jpg?v=1556019690',
                ],
        title: 'Іван Франко - дітям',
        price: '£400.00',
        description: 'До збірки увійшли вірші, казки та оповідання, доступні для сприймання дітьми молодшого шкільного віку. Книга адресована дітям, батькам та вчителям.',
    }

let Temporarydata2 = 
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
            title: 'Dream Jigsaw Puzzle',
            price: '22.00',
        },
        {
            id: 6,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        }],

        categories: ['Література', 'Чашки', 'Футболки']
    }

function ProductPage(Product){

    Product = Temporarydata;
    const [currentPhoto, setPhoto] = React.useState(1);

    let PhotoChange = (e) => {
        setPhoto(e.target.id)
    }

    return(
        <Grid container spacing={1}>

            <Grid item xs={12} className="productContainer">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Grid container spacing={1}>
                                    {Product.photos.map((photos, index) =>{
                                        return(
                                            <Grid item xs={12} key={index}>
                                                <img src={photos}
                                                    className='photos' 
                                                    alt="not found"
                                                    id={index}
                                                    onClick={PhotoChange}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item xs={10} >
                                <img src={Product.photos[currentPhoto]} id='mainImage' alt="not found"/>
                            </Grid>

                        </Grid>
                    

                    </Grid>

                    <Grid item xs={6} className="productInfo">
                        <div className="productTitle">{Product.title}</div>

                        <br/><div className="productPrice">{Product.price}</div>
                        <span className="descriptionHader">Опис</span>
                        <div className="productDescription">{Product.description}</div>

                        <Button variant="fef" color="default" className="makeOrderButton">
                          Додати у кошик
                        </Button>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item xs={12} className="otherProducts">   
                <span className="otherProductsTitle">Наші рекомендації</span>
                <Grid className="otherProductsCards" container spacing={6}>
                    {Temporarydata2.products.map((object) => {
                            return(
                                <Grid item xs={2} className="productCard">
                                    <img src={object.photo} alt="not found"></img>
                                    <span className="otherProductTitle">{object.title}</span>
                                    <p className="otherProductPrice">{object.price}</p>
                                </Grid>
                            )
                    })} 
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default ProductPage;