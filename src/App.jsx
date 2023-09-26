import './App.css';
import Banner from './components/header/banner/banner';
import Menu from './components/header/menu/menu';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Body/>
    </div>
  );
}

export default App;
