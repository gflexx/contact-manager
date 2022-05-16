import './App.css';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './context';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import PageNotFound from './components/PageNotFound';

function App() {
  const name = "gflexx"
  return (
    <Provider>
      <div className="App">
      <Header />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-9'>
            <Routes>
              <Route path='/' element={<Contacts/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/add-contact' element={<AddContact/>}/>
              <Route path='*' element={<PageNotFound/>}/>
            </Routes>
          </div>
        </div>
        
      </div>
    </div>
    </Provider>
  );
}

export default App;
