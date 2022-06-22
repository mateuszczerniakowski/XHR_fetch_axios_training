import './App.css';
import BeerList from './components/BeerList';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <WelcomePage></WelcomePage>
        <BeerList></BeerList>
    </ThemeProvider>
  )
}

export default App;
