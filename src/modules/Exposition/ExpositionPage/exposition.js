import { Grid } from '@mui/material';
import './exposition.css'
import image10 from '../../../images/image10.png'
import image9 from '../../../images/image9.png'
import library from '../../../images/library.png'
import bedroomF from '../../../images/bedroomF.png'
import diningRoom from '../../../images/diningRoom.png'
import womensRoom from '../../../images/womensRoom.png'
import workRoom from '../../../images/workRoom.png'
import bedroomOF from '../../../images/bedroomOF.png'
import arrow8 from '../../../images/arrow8.png'
import {Link} from 'react-router-dom'
import { AirlineSeatLegroomExtraOutlined } from '@mui/icons-material';



function Exposition() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} id=''>
                <h1 id='memEks'>Меморіальна експозиція</h1>
                <img src={image10} alt={"image10"} className='memorial'/>
                <div className='memtext'>
                    <p>
                        Меморіальну експозицію розміщено в невеликій двоповерховій віллі, збудованій у «швейцарському» стилі, де Іван Франко мешкав останні 14 років. Тут детально відтворено атмосферу життя письменника та його родини. У вишуканих, стильних, хоч і далеко не розкішних інтер’єрах, в особистих речах, давніх книгах та мистецьких творах живе дух людини, що стала символом цілої епохи. Проходячи кімнатами, дізнаємося про смаки та уподобання господарів дому, чий побут поєднував традиції української шляхти з майже селянською простотою, а звичайні сімейні радощі з ненастанною інтелектуальною працею.
                    </p>
                </div>
                <img src={image9} alt={"image9"} className='memorial'/>
                <div className='memtext'>
                    <p>
                        Мати власний дім було заповітною мрією Івана Франка, якому довгі роки доводилось винаймати помешкання для сім’ї. Поштовхом до її здійснення стала невелика сума грошей, яку письменник отримав як подарунок під час святкування 1898 року 25-літнього ювілею його літературної і громадської праці.</p>

                    <p>    Будували віллу протягом 1900–1902 років. На бажання дружини письменника Ольги з Хоружинських дім спроектували за зразком київської оселі видатного історика Володимира Антоновича. Збережені світлини засвідчують подібність обох будівель</p>
    
                    <p>    Стіни Франкового дому зводили польський майстер Цеслевич і відомий львівський будівничий Мартин Заходний.
                        На першому поверсі вілли, крім невеликої веранди, передпокою, кухні, сіней та вбиральні, є п’ять кімнат: бібліотека, Франкова спальня, їдальня, жіноча кімната, робочий кабінет-салон; на другому – дві кімнати: кімната Ольги Франко та кімната синів Тараса і Петра.
                    </p>
                </div>
            <Grid item xs={3}></Grid>
        </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className='roomM'>
                            <h1>Кіманти</h1>
                            <div className='lineExp'></div>
                        </div> 
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                            <img src={library} alt={"library"}/>
                            <h2>Бібліотека
                                <Link to={"/expositions/1"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link>
                            </h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>                    
                    </Grid>
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                           
                                <img src={bedroomF} alt={"bedroomF"}/>
                           
                            <h2>Спальня Івана Франка  
                                <Link to={"/expositions/2"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link>
                            </h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                            <img src={diningRoom} alt={"diningRoom"}/>
                            <h2>Їдальня
                                <Link to={"/expositions/3"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link></h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                 <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                            <img src={womensRoom} alt={"womensRoom"}/>
                            <h2>Жіноча кімната<Link to={"/expositions/4"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link></h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                            <img src={workRoom} alt={"workRoom"}/>
                            <h2>Робочий кабінет<Link to={"/expositions/5"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link></h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='cardRoom'>
                            <img src={bedroomOF} alt={"bedroomOF"}/>
                            <h2>Кімната Ольги Франко
                                <Link to={"/expositions/6"}>
                                    <img src={arrow8} alt={"arrow8"} id='arrow8'/>
                                </Link></h2>
                            <p>Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.</p>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Grid>

        


);
}
export default Exposition;
