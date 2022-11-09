
import './App.css';
import Auctions from './components/Auctions/Auctions.component';
import MarketPlace from './components/MarketPlace/MarketPlace.component';

function App() {
  return (
    <div className='app'>

      <MarketPlace/>
      <Auctions/>
    </div>
  );
}

export default App;
