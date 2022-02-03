import React from 'react';
import './Shop.css';
import Grid from '@mui/material/Grid'


let Temporarydata = 
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
            title: 'The Wolf Man\'s Dream Jigsaw Puzzle',
            price: '22.00',
        },
        {
            id: 6,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        },
        {
            id: 7,
            photo: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img708_39.jpg',
            title: 'Freud Museum Shop Gift Card',
            price: '5.00',
        }],

        categories: ['Література', 'Чашки', 'Футболки']
    }



class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedFilter: 0};
    }

    render(){
        return(
            <div style={{marginLeft: '140px', marginRight: '140px'}}>
                <div style={{padding: '50px', textAlign: 'center'}}>Header</div>
                <h2 className="m">Магазин</h2>

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
                  {Temporarydata.products.map((object) => {
                      return(
                        <Grid item xs={2} className="productCard">
                            <img src={object.photo} alt="not found"></img>
                            <span className="productTitle">{object.title}</span>
                            <p className="productPrice">{object.price}</p>
                        </Grid>
                      )
                  })}   
                </Grid>

                <div className="sponsorLine">
                    <img src="https://i.yapx.ru/QaRXg.png" alt="not found"/>
                </div>

                <div style={{padding: '50px', textAlign: 'center'}}>FOOTER</div>


            </div>  
        )
    }
}

export default Shop;