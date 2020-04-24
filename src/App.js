import React from 'react';
import './App.css';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

class App extends React.Component {
  state = {
    advice:""
  }
  
  componentDidMount() {
this.fetchAdvice()
  }
  
  fetchAdvice = () => {
axios.get("https://api.adviceslip.com/advice")
.then((res) => {
  const {advice} = res.data.slip;
  this.setState({
    advice
  });
console.log(res);

})
.catch((err) => {
console.log(err);

})
  }
  render() {
    const {advice} = this.state;
    return (
    <div className="App">
     
     
     <Card className="card-body">
  <Card.Header as="h5" className="advice-header">Simple advice app</Card.Header>
  <Card.Body>
  
    <Card.Text>
    <p className="advice-text">{advice}</p>
    </Card.Text>
    <Button variant="primary" onClick={this.fetchAdvice}>Gimme new advice!</Button>
  </Card.Body>
</Card>
    </div>
  );
}
}
export default App;
