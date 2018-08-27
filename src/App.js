import React, { Component } from 'react';
import './App.css';
import ControlButtons from './Components/ControlButtons'
class App extends Component {

  constructor(props){
    super(props);
    state:{
      // hours : '',
      // minutes : '',
      // seconds: '',
    }
  }

  render() {
      let currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();

      // setTimeout(function (){alert("hello");},3000);
      setInterval(()=>{
          seconds = currentTime.getSeconds();
      },1000);

    return (
      <div className="App">

          {hours} : {minutes} : {seconds}

          <ControlButtons/>

          1초마다 카운트가 되도록 하기
          {/*카운트 시작*/}
          {/*카운트 종료 알림*/}
          {/*카운트 초기화*/}
          {/*카운트 시간 설정*/}
          {/*카운트 중지*/}
      </div>
    );
  }
}

export default App;
