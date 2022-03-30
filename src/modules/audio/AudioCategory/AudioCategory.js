// import React from 'react';
// import './AudioCategory.css';
// import Container from '@mui/material/Container'
// import VAmenu from '../../../components/VAmenu/VAmenu'
// import ReactAudioPlayer from 'react-audio-player';
// import axios from 'axios'

// let links = ['miy-franko', 'filosofski-snidanky', 'semper-tiro', 'intelektualna-biografiya', 'miy-izmaragd', 'dim-poeta',
// 'frankustyka', 'podiyi-poza-seriyamy']

// let fullUrl = window.location.pathname
// let split = fullUrl.split('/')
// let thisPage = split[split.length-1]

// class AudioCategory extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       audios: []
//     }
//   }
//   getAudios = async () => {
//       // const { data } = await axios.get("/audio/1");
//       const { data } = await axios.get("https://frankosmuseum.herokuapp.com/audio/1");
//       this.setState({ audios: data })
//   }
//   componentDidMount() {
//       this.getAudios();
//   }

//   render() {
//     let page = this.audios.filter(audio => audio.link_audio == links.indexOf(thisPage)+1)[0]
//     return (
//       <div style={{marginBlock: '100px'}}>
//         <VAmenu/>
//         <Container maxWidth="lg" style={{backgroundColor: 'white', padding: '50px'}}>
//         {page.audios.reverse().map(function(podcast) {
//           return (
//             <div style={{marginBlock: '50px'}}>
//               <h5>{podcast.title}</h5>
//               <h6>{podcast.subtitle}</h6>
//               <ReactAudioPlayer
//                 src={podcast.audio_file}
//                 controls
//               />
//             </div>
//           )
//         })}
//         </Container>
//       </div>
//     )
//   }
// }


// AudioCategory.propTypes = {};
  
// AudioCategory.defaultProps = {};

// export default AudioCategory;
