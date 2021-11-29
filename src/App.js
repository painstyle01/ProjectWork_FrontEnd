import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from './themes/mainThemes'


function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World!!!</h1>
          <div>
          <Button color="primary" fullWidth>Button Example</Button>
          </div>        
          </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
