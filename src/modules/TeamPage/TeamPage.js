import React from 'react';
import './TeamPage.css'
import Grid from '@mui/material/Grid'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import WorkerCard from './WorkerCard';

fetch('https://frankos-museum-backend.azurewebsites.net/team/')
  .then(response => response.json())
  .then(data => localStorage.setItem('departmentList', JSON.stringify(data)));


const text = `Структурно Музей складається з Адміністрації, Фондового, Книжково-фондового, Експозиційного та Науково-освітнього відділів, Бухгалтерії та Господарської частини. До адміністрації Музею належить: директор музею, заступник директора з наукової роботи, заступник директора з маркетингу, заступник директора з господарської роботи та учений секретар музею. Фондовий відділ займається поповненням, збереженням та опрацюванням Основних фондів музею та Науково-допоміжного фонду. Книжково-фондовий відділ зберігає, поповнює та опрацьовує Книжкові фонди Музею, тобто книжки й періодику, видані від Франкових часів до сьогодні. Експозиційний відділ формує та оновлює меморіальну та літературну експозиції Музею, а також, у рамках Виставкового сектору, забезпечує виставкову діяльністю музею. Науково-освітній відділ розробляє, впроваджує та забезпечує Музей екскурсійним супроводом та освітньо-культурними програмами для людей різного віку й зацікавлень`
const photo = 'https://i.ibb.co/4MHbN8y/image.png'


function Team() {

  const departmentList = JSON.parse(localStorage.getItem('departmentList'))
  function getWorkers(departmentID){
    fetch(`https://frankos-museum-backend.azurewebsites.net/team/` + departmentID)
      .then(response => response.json())
      .then(data => localStorage.setItem('worker', JSON.stringify(data)));
      const worker = JSON.parse(localStorage.getItem('worker'));
      return(
        <Grid container spacing={4}>
          {worker.map((worker, key)=>{
            return(
              <Grid xs={3}>
                <WorkerCard worker={worker}/>
              </Grid>
              )
          })}
        </Grid>
      )
  }

  return (
      <div className="mainContainer">
        <Grid container spacing={1}>
          <Grid container xs={12}>
              <Grid xs={12}>
                <div className="teamTitle">Команда</div>
            </Grid>
            <Grid xs={12}>
                <img src={photo} alt="not found"className="teamPhoto"/>
            </Grid>
            <Grid xs={12}>
                <div className="teamDescription">
                  {text}
                </div>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <div className="workersTitle">Працівники</div>
            {departmentList.map((department, i) => {
              return(
              <Accordion className="workersObjects" sx={{
                boxShadow: 'none',
                borderBottom: '2px solid #C5C5C5'
              }}
              key={i}
              >
                <AccordionSummary
                  expandIcon={<AddIcon/>}
                  className="departmentTitle">
                    {department.department}
                </AccordionSummary>
                <AccordionDetails>
                <Grid container spacing={4} className="workerList">
                  {
                    getWorkers(department.id)
                  }
                  </Grid>
                </AccordionDetails>
              </Accordion>
              )
            })}
          </Grid>
        </Grid>
      </div>
  );
}

export default Team;