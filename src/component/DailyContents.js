import React from 'react';
import './component/DailyContents';
import './component/daily/DayOne';
import './component/daily/DayTwo';
import './component/daily/DayThree';
import './component/daily/DayFour';

function DailyContents() {
  return (
    <div className="DailyContents">
      <DayOne></DayOne>

    </div>
  );
}

export default DailyContents;
