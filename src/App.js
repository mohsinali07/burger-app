import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignIn from './components/signin/SignIn';
import Order from './components/order/Order';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Order />}/>
          <Route path='login' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
