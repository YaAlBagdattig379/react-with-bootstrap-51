// import CardGroup from './Components/CardGroup/CardGroup';
import './App.css';
import {Button,Spinner} from 'react-bootstrap';
import CardGroup2 from './Components/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
        <h1>Using react bootstrap</h1>
        {/* bootstarp button  */}
        <Button variant="success">my button</Button> <br />
        {/* bootstarp spinner  */}
        <Spinner animation="border" role="status">
        <span className="visually-hidden">loading...</span>
        </Spinner>
        {/* bootstarp card */}
        <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;