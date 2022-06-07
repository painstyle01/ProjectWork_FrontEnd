import './Contactroad.css'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import timeC from '../../images/timeC.png'
import locationC from '../../images/locationC.png'
import contactC from '../../images/contactC.png'
import arrivalC from '../../images/arrivalC.png'
import Vector2 from '../../images/Vector2.png'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Rule } from '@mui/icons-material';
import { Stack } from '@mui/material';


fetch('http://frankos-museum-backend.azurewebsites.net/contacts/')
  .then(response => response.json())
  .then(data => localStorage.setItem('contacts', JSON.stringify(data)));



  
fetch('http://frankos-museum-backend.azurewebsites.net/api/ticket/')
    .then(response => response.json())
    .then(data => localStorage.setItem('ticket', JSON.stringify(data)));



fetch('http://frankos-museum-backend.azurewebsites.net/api/rule/')
    .then(response => response.json())
    .then(data => localStorage.setItem('rule', JSON.stringify(data)));

function Contactroad() {


    const allcontacts = JSON.parse(localStorage.getItem('contacts'))

    const alltickets = JSON.parse(localStorage.getItem('ticket'))

    const allrule = JSON.parse(localStorage.getItem('rule'))


        
    return (
        <Grid container spacing={0}>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} id='menuN'>
                <div className='contM'>
                    <h1 className='igraSans'>Спланувати візит</h1>
                    <div className='lineC'></div>
                </div>
                <div className='timeC'>
                 <Stack direction="row" spacing={4}>
                    <Stack>
                        <img id='timeC' src={timeC} alt={"timeC"}/>
                    </Stack>
                    <Stack>
                        <h3 className='titleC'>Час</h3>
                        <div className='textInfo'>
                            {allcontacts.contact.time}
                        </div>
                    </Stack>
                </Stack>
                </div>
                <div className='location'>
                 <Stack direction="row" spacing={2}>
                    <Stack>
                        <img id='locationC' src={locationC} alt={"locationC"}/> 
                    </Stack>
                        <Stack>
                            <h3 className='titleC'>Локація</h3>
                            <div className='textInfo'>
                            {allcontacts.contact.location}
                            </div>
                        </Stack>
                    </Stack>
                </div>
                <div classStack='contactWU'>
                 <Stack direction="row" spacing={2}>
                    <Stack>
                        <img id='contactC' src={contactC} alt={"timeCcontactC"}/>
                    </Stack>
                        <Stack>
                            <h3 className='titleC'>Зв’язок з нами</h3>
                            <div className='textInfo'>
                            {allcontacts.contact.contact_us}
                            </div>
                            <div className='textInfo'>
                                lviv_franko@ukr.net
                            </div>
                        </Stack>
                    </Stack>
                </div>
                <div className='arrival'>
                 <Stack direction="row" spacing={2}>
                    <Stack>
                        <img id='arrivalC' src={arrivalC} alt={"arrivalC"}/>
                    </Stack>
                        <Stack>
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
                        </Stack>
                    </Stack>
                </div>
                <div className='excur'>
                    <h2 className='igraSans' style={{marginTop: '50px'}}>Екскурсії <img id='Vector2' src={Vector2} alt={"Vector2"}/> </h2>
                 
                </div>
                <div className='mapC'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0763133836685!2d24.029390614636565!3d49.822230879393565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f574262733%3A0x747c1f490c13827e!2z0JvRjNCy0L7QstGB0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQu9C40YLQtdGA0LDRgtGD0YDQvdC-LdC80LXQvNC-0YDQuNCw0LvRjNC90YvQuSDQvNGD0LfQtdC5INCY0LLQsNC90LAg0KTRgNCw0L3QutC-!5e0!3m2!1sru!2sua!4v1651228788518!5m2!1sru!2sua" 
                    id="mapSt" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </div>
            
                
                <Grid xs={12}>
                <div className="servicesTitle" style={{marginTop: '50px'}}>Наші послуги</div>
                {alltickets.map((ticket, i) => {
                return(
                <Accordion className="servicesObjects" sx={{
                    boxShadow: 'none',
                    borderBottom: '2px solid #C5C5C5'
                }}
                key={i}
                >
                    <AccordionSummary
                    expandIcon={<AddIcon/>}
                    className="departmentTitle">
                        {ticket.name}
                    </AccordionSummary>
                    <AccordionDetails className="serviceText">
                        {ticket.text}
                    </AccordionDetails>
                </Accordion>
                )
                })}
                </Grid>
                <div style={{marginBlock: '50px'}}>
                    <div className='rules'>Правила поведінки</div>
                    <div className='lineC'></div>
                    <div>{allrule.text}</div>
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
);
}


export default Contactroad;
