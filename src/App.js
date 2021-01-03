import './App.css';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App;
