// import React from 'react';
// import './AudioPage.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid'
// import Container from '@mui/material/Container'
// import { CardActionArea } from '@mui/material'
// import { NavLink } from 'react-router-dom';
// import VAmenu from '../../../components/VAmenu/VAmenu'
// import axios from 'axios'

// let links = ['/miy-franko', '/filosofski-snidanky', '/semper-tiro', '/intelektualna-biografiya', '/miy-izmaragd', '/dim-poeta',
// '/frankustyka', '/podiyi-poza-seriyamy']

// class AudioPage extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: []
//     }
//   }
//   getCategories = async () => {
//       // const { data } = await axios.get("/audio/");
//       const { data } = await axios.get("https://frankosmuseum.herokuapp.com/audio/");
//       this.setState({ categories: data })
//   }
//   componentDidMount() {
//       this.getCategories();
//   }

//   render() {
//     return (
//       <div style={{marginBlock: '100px'}}>
//         <VAmenu/>
//         <Container maxWidth="lg" style={{backgroundColor: 'white', padding: '50px'}}>
//           <Typography variant="h2" color="initial">Аудіо</Typography>
//           <Grid container spacing={1} style={{ marginTop: '50px' }} >
//             {this.categories.map(function(category) {
//               return (
//                 <Grid item xs={12} sm={6} md={4} lg={3}>
//                 <NavLink to={'/audio'+links[category.id-1]}>
//                   <Card>
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         image={category.picture}
//                       />
//                       <CardContent>
//                         <Typography style={{color: 'black'}} gutterBottom variant="h3" component="div">
//                           {category.title}
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                   </NavLink>
//                 </Grid>
//               )
//             })}
//           </Grid>
//         </Container>
//       </div>
//     )
//   }
// }


// AudioPage.propTypes = {};
  
// AudioPage.defaultProps = {};

// export default AudioPage;
