import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Layouts';
import ListProduct from './components/Product/ListProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="home" element={<ListProduct />} />
          <Route path="list-product" element={<ListProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
