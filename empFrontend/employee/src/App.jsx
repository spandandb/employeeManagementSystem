import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import About from './components/pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='box-border'>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
