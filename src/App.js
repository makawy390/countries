import './App.css';
import Countries from './component/country/Countries';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
import CountryDetails from './component/country/CountryDetails';
import SearchCountry from './component/country/SearchCountry';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route path='/' element = {<Countries />} />
      <Route path='/country/:id' element = {<CountryDetails />} />
      <Route path='/search-country' element = {<SearchCountry />} />


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
