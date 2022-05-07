import React from 'react';
import './ExcutionPage.css'
import Grid from '@mui/material/Grid'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const text = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
const photo = 'https://i.ibb.co/bvXYV7y/image-12.png'

fetch('http://frankos-museum-backend.azurewebsites.net/excursion/')
  .then(response => response.json())
  .then(data => localStorage.setItem('servicesList', JSON.stringify(data)));


function Excurtion() {

  const servicesList = JSON.parse(localStorage.getItem('servicesList')).excursion
  return (
      <div className="mainContainer">
        <Grid container spacing={1}>
          <Grid container xs={12}>
              <Grid xs={12}>
                <div className="excurtionTitle">Екскурсії</div>
            </Grid>
            <Grid xs={12}>
                <img src={photo} alt="not found"className="excurtionPhoto"/>
            </Grid>
            <Grid xs={12}>
                <div className="excurtionDescription">
                  {text}
                </div>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <div className="servicesTitle">Наші послуги</div>
            {servicesList.map((service, i) => {
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
                    {service.excursion}
                </AccordionSummary>
                <AccordionDetails className="serviceText">
                    {service.text}
                </AccordionDetails>
              </Accordion>
              )
            })}
          </Grid>
        </Grid>
      </div>
  );
}

export default Excurtion;