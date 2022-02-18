import './Gallery.css'
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../../modules/themes/mainThemes'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Grid'
import foto1 from '../img/foto1.jpg'
import logo from '../img/logo.png'











function Foto() {
    return (
        <ThemeProvider theme={MainTheme}>
            <div className='GManu'>
            <Grid container spacing={0}>
                <Grid item xs={7}>
                    <Grid container spacing={0}
                    justifyContent="space-around"
                    alignItems="center">
                        <Grid item xs={3}>
                            <div id='logo1'>
                                <img src={logo} alt={"foto1"}/> 
                          </div></Grid>
                     
                        <Grid item xs={1}>
                            <div className='nameMenu'>ГОЛОВНА</div>
                        </Grid>  
                        <Grid item xs={1}>
                            <div className='nameMenu'>ПРО ПРОЕКТ</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className='nameMenu'>ГРАФІКА</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className='nameMenu'>ФАРФОР</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className='nameMenu'>3D</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className='nameMenu'>СТАТТІ</div>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item xs={5}></Grid> 
            </Grid>
        </div>
        <div className='GContent'>
            <Grid container spacing={5}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}
                 direction="column">
                     <h3>ЦИФРОВА КОЛЕКЦІЯ ХУДОЖНЬОГО МУЗЕЮ</h3>
                    <Grid container spacing={0}
                     container
                     direction="row"
                     justifyContent="space-around"
                     alignItems="center">
                        <Grid item xs={3}>
                            <div className='CText'>
                            Проект «Цифрова колекція художнього музею» є
                             унікальним для Миколаївського художнього
                              музею ім. В.В. Верещагіна. Наразі через 
                              низку причин музейна колекція фарфору кінця
                               XVIII – XX ст. та графічних творів XVIIІ – середини
                                XX ст. у більшості недоступна для
                                 дослідників й відвідувачів та зберігається
                                  виключно у фондах. Хоча вона становить
                                   надзвичайну історико-культурну цінність,
                                    демонструє надбання української та
                                    європейської культури та раніше не 
                                    була експонована для широкої аудиторії.
                                    В результаті реалізації проекту було
                                    створено цифрову колекцію фарфору та
                                     графіки з вільним доступом до неї в форматі 
                                     24/7, що дозволяє ввести твори
                                      в науковий обіг, покращує джерельну баз
                                      у наукових досліджень та забезпечує 
                                      необмежене тиражування цих копій.
                                    Так, в рамках проекту у 2020 році оцифровано,
                                     оброблено, досліджено та каталогізовано 518
                                      графічних робіт (малюнок, акварель, пастель)
                                      . У 2021 році – оцифровано та  каталогізовано
                                       302 одиниць порцеляни. Створено веб-ресурс, що
                                        дозволяє користувачам у зручному форматі переглядати
                                         та скачувати електронні копії графіки.
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                          <div id='foto1'>
                          <img src={foto1} alt={"foto1"}/> 
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className='CText'>Видання ілюстрованих альбомів-каталогів є ще одним джерелом знань про рідкісну музейну колекцію серед культурних установ України.
У 2020 році ми створили 5 3D-моделей графіки в AR та надруковали серію поштових листівок для відповідного зчитування зображень. Реалізували освітню програму з 4 онлайн-лекцій із запрошеними експертами з України та Європи, які ділились знаннями та практичними порадами щодо розвитку музеїв та привернення аудиторії. У 2021 році створили 3D-моделі на основі 7 виробів з фарфору, відзняли навчальні відео щодо історії порцеляни та фотопроект із музейними експонатами. Також виготовили лімітовану промо-продукцію з кераміки для популяризації проекту. Проект сприяє збереженню та популяризації культурної спадщини України та дозволяє інтегрувати надбання вітчизняної культури у світовий культурний простір, а також відкриває Миколаїв як ще одну точку на культурній мапі країни.

</div>
<Button>
            VISIT US
          </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
        </ThemeProvider>
      
        );
      }
    
    
    
    
    
    

export default Foto;
