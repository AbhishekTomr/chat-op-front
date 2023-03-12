import './App.css';
import Header from './components/Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './components/LandingPage/LandingPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#242424',
    }
  },
});

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
      <div className="App">
      <Header/>
      <LandingPage/>
    </div>
    // </ThemeProvider>
  );
}

export default App;
