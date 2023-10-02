import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import { CARDS_INFO } from "./utils/data";
import { Body } from "./components/body/body";

function App() {
  return (
    <div className="App"> 
      <div className="container">
        <Header />  
        <Body/>
        <div className="cards">
          {CARDS_INFO.map(({ id, description, img, title }) => (
            <Card id={id} description={description} img={img} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
