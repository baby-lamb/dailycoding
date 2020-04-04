import React from 'react';
import './component/NumberMenu.css';


function NumberMenu() {
  render(){
    const number = [];
    const menu = this.props.number;
    let = 0;
    while ( i < number.langth ){
      number.push(<li key={number[i].id}><a href={"/components/"+number[i].id}">
      {number[i].id}
      </a></li>)

      i = i+1;
    }

    return (
      <div className="NumberMenu">

      </div>
    );
  }
}

export default NumberMenu;
