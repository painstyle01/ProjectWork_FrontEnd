import React from 'react';
import './VideoCategory.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import ReactPlayer from 'react-player'
import VAmenu from '../../VAmenu/VAmenu'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class VideoCategory extends React.Component {

  categories = [
    {
      'title': 'Франко вдома',
      'link': 'franko-vdoma',
      'description': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.',
      'videos': [{'url': 'https://youtu.be/EOf0R9lj3dU', 'description': 'description'}, {'url': 'https://youtu.be/wjUeR6hv5XA', 'description': 'description'}, {'url': 'https://youtu.be/OOdS3IG_Az8', 'description': 'description'}, {'url': 'https://youtu.be/CT3j4hmJe64', 'description': 'description'},
      {'url': 'https://youtu.be/NFpLR9hGACU', 'description': 'description'}, {'url': 'https://youtu.be/tQ1mTcdq0qs', 'description': 'description'}, {'url': 'https://youtu.be/YQHExSqXRKk', 'description': 'description'}, {'url': 'https://youtu.be/i_zSIEGEnqU', 'description': 'description'},
      {'url': 'https://youtu.be/oYjnsjkKTaw', 'description': 'description'}, {'url': 'https://youtu.be/THWDiQIFAAM', 'description': 'description'}, {'url': 'https://youtu.be/OBqVBIXKUjs', 'description': 'description'}, {'url': 'https://youtu.be/NRNYOnPxD3Y', 'description': 'description'},
      {'url': 'https://youtu.be/g9EKl5ta_K8', 'description': 'description'}, {'url': 'https://youtu.be/_m86dy6qhoM', 'description': 'description'}, {'url': 'https://youtu.be/0iJOksXESFA', 'description': 'description'}, {'url': 'https://youtu.be/16ezA1EK6xc', 'description': 'description'},
      {'url': 'https://youtu.be/bwDBvkllLYc', 'description': 'description'}, {'url': 'https://youtu.be/tY1N8E8pbRs', 'description': 'description'}, {'url': 'https://youtu.be/mQ9HdWdGKaU', 'description': 'description'}, {'url': 'https://youtu.be/ku_OazfWtuE', 'description': 'Богдан Тихолоз про походження прізвища і силу наголосу.'}]
    },
    {
      'title': 'Мій Ізмарагд',
      'link': 'miy-izmaragd',
      'description': 'Цикл зустрічей «Мій Ізмарагд: розмови про вічні цінності в епоху Пост-правди» покликаний запросити до спільних роздумів над сенсом вічних цінностей в сучасному світі.',
      'videos': [{'url': 'https://youtu.be/ad0CJy3K4eA', 'description': 'description'}, {'url': 'https://youtu.be/tlNGd1TGu2k', 'description': 'description'}]
    },
    {
      'title': 'Інтелектуальна біографія',
      'link': 'intelektualna-biografiya',
      'description': 'Кожна розмова у серії «Інтелектуальна біографія» – це невимушена мандрівка мапою культурних просторів, людей та ідей, важливих для особистої інтелектуальної історії нашого героя чи героїні.',
      'videos': [{'url': 'https://youtu.be/XKdGdVwO8Gw', 'description': 'description'}, {'url': 'https://youtu.be/R6ffWYofH-c', 'description': 'description'}, {'url': 'https://youtu.be/sBWvPrmU-TA', 'description': 'description'}, {'url': 'https://youtu.be/LYeUDnUQutI', 'description': 'description'},
      {'url': 'https://youtu.be/znyRoU1XJtE', 'description': 'description'}, {'url': 'https://youtu.be/Z1w3w7AcyTM', 'description': 'description'}, {'url': 'https://youtu.be/hXT3oiqYbos', 'description': 'description'}, {'url': 'https://youtu.be/EATH-sTB7ts', 'description': 'description'}]
    },
    {
      'title': 'Філософські сніданки',
      'link': 'filosofski-snidanky',
      'description': "Уже не перший рік Дім Франка починає День міста Львова із запашної кави, вишуканого пляцка та легкої, а попри те глибокої розмови.\nЗнані своїм розумом та непідробною любов'ю до рідного міста львів'яни і львів'янки приходять у гості до іншого, не менш знаного і залюбленого у Львів львів'янина Івана Франка, щоб у дружній атмосфері поділитися думками на смачні й аж ніяк не тільки солодкі теми.",
      'videos': [{'url': 'https://youtu.be/waBXuNgjgh8', 'description': 'description'}, {'url': 'https://youtu.be/FbXIsFaGxMQ', 'description': 'description'}]
    },
    {
      'title': 'Semper tiro',
      'link': 'semper-tiro',
      'description': 'Відкритий цикл лекцій «Semper tiro» у Домі Франка – це платформа для обміну цінним практичним досвідом у найрізноманітніших професійних (і не тільки) сферах.',
      'videos': [{'url': 'https://youtu.be/zFyY32IEPpE', 'description': 'description'}, {'url': 'https://youtu.be/TloK91hZVHM', 'description': 'description'}, {'url': 'https://youtu.be/gsL8WuT3ryQ', 'description': 'description'}, {'url': 'https://youtu.be/cGkQCWsTn1w', 'description': 'description'}]
    },
    {
      'title': 'Мій Франко',
      'link': 'miy-franko',
      'description': 'Кожен українець рано чи пізно стикається з постаттю Івана Франка. Для декого він залишається назвою вулиці в рідному місті, для інших – напівзабутим іменем зі шкільного підручника, для ще інших – визначним діячем давно минулих часів. Але є ті, для кого така зустріч стає початком довгого діалогу з великою живою людиною – почасти вчителем, почасти другом, – діалогу не завжди легкого, але незмінно цікавого. Саме такі люди є героями циклу зустрічей «Мій Франко» у Домі Франка.',
      'videos': [{'url': 'https://youtu.be/ogF5QqVcwOs', 'description': 'description'}, {'url': 'https://youtu.be/Unbck8qb_kU', 'description': 'description'}]
    },
    {
      'title': 'Франкустика',
      'link': 'frankustyka',
      'description': 'Концерти в Домі Франка нагадують домашні концерти давніх часів – не занадто гучні й не занадто штивні, але й не позбавлені інтелектуальної нотки, коли від музикування до дружньої розмови про музику всього один крок.',
      'videos': [{'url': 'https://youtu.be/SI_Nxn45gC0', 'description': 'description'}, {'url': 'https://youtu.be/REZ49bulimM', 'description': 'description'}, {'url': 'https://youtu.be/emYcMctZgh8', 'description': 'description'}, {'url': 'https://youtu.be/RsrllGscPBk', 'description': 'description'},
      {'url': 'https://youtu.be/_adCN2sU6gI', 'description': 'description'}, {'url': 'https://youtu.be/pp08nlWxftM', 'description': 'description'}, {'url': 'https://youtu.be/lgrI_pMR9RA', 'description': 'description'}, {'url': 'https://youtu.be/84Oaxeu_pU4', 'description': 'description'},
      {'url': 'https://youtu.be/nCV8K1JGtks', 'description': 'description'}]
    },
    {
      'title': 'Події поза серіями',
      'link': 'podiyi-poza-seriyamy',
      'description': '',
      'videos': [{'url': 'https://youtu.be/-lO9UXmKF8s', 'description': 'description'}, {'url': 'https://youtu.be/apYrGwS4rfg', 'description': 'description'}, {'url': 'https://youtu.be/O5UQIgk8xg4', 'description': 'description'}, {'url': 'https://youtu.be/PcVTD9p9N1w', 'description': 'description'},
      {'url': 'https://youtu.be/gfo3U9BfDV4', 'description': 'description'}, {'url': 'https://youtu.be/FFPRzcKtd68', 'description': 'description'}, {'url': 'https://youtu.be/SXHxCJGom9Y', 'description': 'description'}, {'url': 'https://youtu.be/C9CqCLA-zkE', 'description': 'description'},
      {'url': 'https://youtu.be/bBQduV1YXrs', 'description': 'description'}, {'url': 'https://youtu.be/1y_ty2moiuM', 'description': 'description'}, {'url': 'https://youtu.be/Rn7NofVWc04', 'description': 'description'}, {'url': 'https://youtu.be/rTvMuAYl_ng', 'description': 'description'},
      {'url': 'https://youtu.be/f4Di60Q514o', 'description': 'description'}, {'url': 'https://youtu.be/xsxsN59lYgQ', 'description': 'description'}, {'url': 'https://youtu.be/TQH4svuGd3M', 'description': 'description'}, {'url': 'https://youtu.be/_KnmvwoiJ8E', 'description': 'description'}]
    }
  ]

  render() {
    let fullUrl = window.location.pathname
    let split = fullUrl.split('/')
    let thisPage = split[split.length-1]
    let page = this.categories.filter(category => category.link == thisPage)[0]
    return (
      <div style={{marginBlock: '100px'}}>
        <VAmenu/>
        <Container maxWidth="lg" style={{backgroundColor: 'white', padding: '50px'}}>
        <Typography variant="h2" color="initial"><b>{page.title}</b></Typography>
        <p>{page.description}</p>
        {page.videos.reverse().map(function(video) {
          console.log(video.url)
          console.log(video.description)
          return (
            <div style={{marginBlock: '50px'}}>
              <ReactPlayer
              url={video.url}
              controls>
              </ReactPlayer>
              <Accordion style={{marginTop: '10px', border: '1px solid black'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{color: 'black'}}>Опис:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{color: 'black'}}>
                    {video.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )
        })}
        </Container>
      </div>
    )
    
  }
}


VideoCategory.propTypes = {};
  
VideoCategory.defaultProps = {};

export default VideoCategory;