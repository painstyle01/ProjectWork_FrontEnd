import './Contact.css'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import timeC from '../../images/timeC.png'
import locationC from '../../images/locationC.png'
import contactC from '../../images/contactC.png'
import arrivalC from '../../images/arrivalC.png'

fetch('http://frankos-museum-backend.azurewebsites.net/contacts/')
  .then(response => response.json())
  .then(data => localStorage.setItem('contacts', JSON.stringify(data)));

function Contact() {

    const allcontacts = JSON.parse(localStorage.getItem('contacts'))

    console.log(allcontacts)
        
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} id='menuN'>
                <div className='contM'>
                    <h1>Контакти</h1>
                    <div className='lineC'></div>
                </div>
                <div className='timeC'>
                <Grid container spacing={0}>
                    <Grid item xs={1}>
                        <img src={timeC} alt={"timeC"}/>
                    </Grid>
                    <Grid item xs={11}>
                        <h3 className='titleC'>Час</h3>
                        <div className='textInfo'>
                            {allcontacts.contact.time}
                        </div>
                    </Grid>
                </Grid>
                </div>
                <div className='location'>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={locationC} alt={"locationC"}/> 
                        </Grid>
                        <Grid item xs={11}>
                            <h3 className='titleC'>Локація</h3>
                            <div className='textInfo'>
                            {allcontacts.contact.location}
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='contactWU'>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={contactC} alt={"timeCcontactC"}/>
                        </Grid>
                        <Grid item xs={11}>
                            <h3 className='titleC'>Зв’язок з нами</h3>
                            <div className='textInfo'>
                            {allcontacts.contact.contact_us}
                            </div>
                            <div className='textInfo'>
                                lviv_franko@ukr.net
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='arrival'>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={arrivalC} alt={"arrivalC"}/>
                        </Grid>
                        <Grid item xs={11}>
                            <h3 className='titleC'>Доїзд:</h3>
                            <div className='textInfo'>
                            {allcontacts.contact.arrival}
                            </div>
                            <div className='textInfo'>
                                автобус № 4А, маршрутне таксі № 26, трамваї № 4, 8 (зупинка Стрийський парк, 650 м),
                            </div>
                            <div className='textInfo'>
                                автобус № 16, маршрутне таксі № 13, 27 (зупинка Католицький університет, 900 м).
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='mapC'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0763133836685!2d24.029390614636565!3d49.822230879393565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f574262733%3A0x747c1f490c13827e!2z0JvRjNCy0L7QstGB0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQu9C40YLQtdGA0LDRgtGD0YDQvdC-LdC80LXQvNC-0YDQuNCw0LvRjNC90YvQuSDQvNGD0LfQtdC5INCY0LLQsNC90LAg0KTRgNCw0L3QutC-!5e0!3m2!1sru!2sua!4v1651228788518!5m2!1sru!2sua" 
                    width="951" 
                    height="550" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
);
}


export default Contact;
