import React from 'react';
import './NumberMenu.css';


class NumberMenu extends React.Component {
  render(){
    const number = [];
    let i = 0;
    while ( i < number.langth ){
      number.push(<li key={number[i].id}><a href={"/components/"+number[i].id}>
      {number[i].id}
      </a></li>)
      i = i+1;
    }

    return(
      <div className="NumberMenu">

      </div>
    );
  }
}


export default NumberMenu;
