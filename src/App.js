
import './App.css';
import Compoclass from "./newComponent";
import Graph from './graphPage';
import {Hello} from "./component/hello";
// import PersonList from "./component/personList";
// import Form from "./component/form";

function App() {
  return (
    <div className="App">
        <div className="split left">
          <Compoclass/>
          {/* <Form/> */}
          <Hello/>
          {/* <PersonList/> */}
        </div>
        <div className="split right">
          <Graph/>
        </div>
    </div>
  );
}

export default App;
