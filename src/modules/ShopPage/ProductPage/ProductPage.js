import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './ProductPage.css'

const Temporarydata = 
    {
        photos: ['https://cdn.shopify.com/s/files/1/1331/9421/products/Art_Prints_Freud_Museum_London_9.jpg?v=1487865063', 
                  'https://cdn.shopify.com/s/files/1/1331/9421/products/Art_Prints_Freud_Museum_London_13_compact.jpg?v=1487864587',
                  'https://cdn.shopify.com/s/files/1/1331/9421/products/patrick_caulfield_d.e.a.d._compact.jpg?v=1556019690',
                  'https://cdn.shopify.com/s/files/1/1331/9421/products/patrick_caulfield_d.e.a.d._compact.jpg?v=1556019690'],
        title: 'Paul Wunderlich - Untitled, 1996',
        price: '£400.00',
        text: 'Sigmund Freud has exerted a remarkable influence over several generations of artists through both his writing and his singular collection of antiquities. The Freud Museum Prints have been printed to celebrate his impact on the visual arts and to mark the 10th anniversary of The Museum in 1996, All the printing has been undertaken by Gresham Studio (Cambridge, England) who is devoted to collaborative printmaking of the highest standard. They work with artists from many countries, specialising in screen printing and etching.',
    }

class ProductPage extends React.Component {

    ChangePhoto = (e) => {
        document.getElementById("mainPhoto").src = e.target.src
    }

    render() {
        return(
            <Container fixed>
              <div style={{marginBottom: '100px', textAlign: 'center'}}>HEADER</div>
              <Grid container spacing={3}>
                <Grid item md={5}>
                    <Grid container spacing={2}>
                        <Grid item md={9}>
                            <img src={Temporarydata.photos[0]} alt="not found" id="mainPhoto"></img>
                        </Grid>
                        <Grid item md={3}>
                            {Temporarydata.photos.map((e)=>{return(
                                <img src={e} alt="not found" style={{width: "70%"}} onClick={this.ChangePhoto}/>
                            )})}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h2" className="txt">{Temporarydata.title}</Typography>
                    <p>{Temporarydata.price}</p>
                    <Button className="AddButton">Add to cart</Button>
                    <p className="text">{Temporarydata.text}</p>
                </Grid>
                <Grid item md={1}>
                    <p className="text">More in collection</p>
                    {Temporarydata.photos.map((e)=>{return(
                                <img style={{margin: "10px", width: "120%"}} src={e} alt="not found"/>
                            )})}
                </Grid>
              </Grid>
              <div style={{marginTop: '100px', textAlign: 'center'}}>FOOTER</div>
            </Container>
            
        )
    }
}

export default ProductPage;