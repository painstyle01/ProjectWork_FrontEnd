// import React from 'react';
// import './VideoCategory.css';
// import Container from '@mui/material/Container'
// import ReactPlayer from 'react-player'
// import VAmenu from '../../../components/VAmenu/VAmenu'
// import axios from 'axios'

// let links = ['franko-vdoma', 'miy-izmaragd', 'intelektualna-biografiya', 'filosofski-snidanky', 'semper-tiro', 'miy-franko',
// 'frankustyka', 'podiyi-poza-seriyamy']

// let fullUrl = window.location.pathname
// let split = fullUrl.split('/')
// let thisPage = split[split.length-1]

// class VideoCategory extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       videos: []
//     }
//   }
//   getVideos = async () => {
//       // const { data } = await axios.get("/video/1");
//       const { data } = await axios.get("https://frankosmuseum.herokuapp.com/video/1");
//       this.setState({ videos: data })
//   }
//   componentDidMount() {
//       this.getVideos();
//   }

//   render() {
//     let page = this.videos.filter(video => video.link_video == links.indexOf(thisPage)+1)[0]
//     return (
//       <div style={{marginBlock: '100px'}}>
//         <VAmenu/>
//         <Container maxWidth="lg" style={{backgroundColor: 'white', padding: '50px'}}>
//         {page.videos.reverse().map(function(video) {
//           return (
//               <ReactPlayer
//               url={video.video_file}
//               controls>
//               </ReactPlayer>
//           )
//         })}
//         </Container>
//       </div>
//     )
    
//   }
// }


// VideoCategory.propTypes = {};
  
// VideoCategory.defaultProps = {};

// export default VideoCategory;
