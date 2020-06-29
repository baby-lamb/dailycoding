import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number:[
        { id:0, title:'Main'},
        { id:1, title:'Day One'},
        { id:2, title:'Day Two' }
      ]
    }
  }
  render(){
    if(this.state.mode === 'main'){

    }else if(this.state === ''){


    }
    return(
        <div className="App">
            <NumberMenu data={this.props.number}></NumberMenu>
        </div>
      );
  }
}


export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
