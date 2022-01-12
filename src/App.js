import { useEffect } from 'react';
import reactDragula from 'react-dragula';
import Card from './components/Card'
import './App.css'


function App() {

  useEffect(() => {
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    reactDragula([left, right]);

  }, [])

  return (
    <div className="container">
      <div id="left" className="container">
        <Card body="Card 1" />
        <Card body="Card 2" />
        <Card body="Card 3" />
        <Card body="Card 4" />
      </div>
      <div id="right" className="container">
        <Card body="Card 5" />
      </div>
    </div>
  );
}

export default App;