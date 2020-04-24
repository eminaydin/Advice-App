import React from 'react';
import './App.css';
import axios from "axios"
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
console.log(res);

})
.catch((err) => {
console.log(err);

})
  }
  render() {
    return (
    <div className="App">
     
    </div>
  );
}
}
export default App;
