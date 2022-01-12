import './App.css'
import Card from './components/Card'

const React = require('react');
const dragula = require('react-dragula');

class App extends React.Component {
  componentDidMount() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right]);
  }

  render() {
    return (
      <div className="container">
        <div id="left" className="container">
          <Card body="Card 1" />
          <Card body="Card 2" />
          <Card body="Card 3" />
          <Card body="Card 4" />
        </div>
        <div id="right" className="container">
        </div>
      </div>
    );
  }
}


export default App;