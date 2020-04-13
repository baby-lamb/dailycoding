import React from 'react';
import './App.css';
import './component/NumberMenu';
import './component/DailyContents';

function App() {
  constructor(props){
    this.state={
      number:[
        { id:1 },
        { id:2 }
      ]
    }
  }
  return (
    <div className="App">
      <NumberMenu data={this.props.number}
      onChangePage={function(){
        alert('no');
      }.bind(this)}></NumerMenu>
      <DailyContents></DailyContents>
    </div>
  );
}

export default App;
