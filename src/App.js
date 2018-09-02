import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
import ControlButtons from './Components/ControlButtons'

const initialTime = {
    inputTime: 15, //minutes
    remainTime : 15 * 60,
    isRunning : false
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...initialTime
        }
    }

    componentDidMount(){

    }

    /**
     * TODO : clearInterval (0초 되면),
     * 인풋값을 계산해서 초로 변환하기
     * */

    countDown(){
        this.timer = setInterval(
            ()=>{this.setState({
                ...this.state,
                isRunning: true,
                remainTime   : this.state.remainTime -1
            })},
        1000);
    }

    countStop(){
        this.setState({
            ...this.state,
            isRunning: false,
            remainTime   : this.state.remainTime -1
        });
        clearInterval(this.timer);
    }

    toggleCount(){
        if(!this.state.isRunning){
            this.countDown();
        }else{
            this.countStop();
        }
    }

    increaseTime(){
      this.setState({
          ...this.state,
          inputTime : this.state.inputTime + 5,
          remainTime : this.state.remainTime + 300,
      })
    }

    initialize(){
        this.setState({
            ...initialTime
        })
    }

    decreaseTime(){
      if(this.state.inputTime > 5){
          this.setState({
              ...this.state,
              inputTime : this.state.inputTime - 5,
              remainTime : this.state.remainTime - 300,
          })
      }else{
          this.setState({
              ...this.state,
              inputTime : 0,
              remainTime : 0,
          })
      }
    }


    /**
     *
     * 필요한 파라미터
     *
     * 사용자가
     * 입력한
     * 시간,
     *
     * 남은 시간(현재 시간),
     * 변하게 하는 함수,
     *
     * */
  render() {
    return (
      <div className="App">
          <div>
              {/*: <span>{this.state.inputTime}</span> 분*/}
              <span>설정시간</span>
              <button onClick={()=>{this.increaseTime()}}> + 5 </button>
              <button onClick={()=>{this.decreaseTime()}}> - 5 </button>
          </div>

          <div id="counter" style={{}}>
              {Math.floor(this.state.remainTime/60)} : { (this.state.remainTime % 60) < 10 ? '0' + (this.state.remainTime % 60) : this.state.remainTime % 60  }
          </div>

          <div>
              <button onClick={()=>this.toggleCount()}>
                  {this.state.isRunning ? '||' : '▶'}
              </button>
              <button onClick={()=>{this.countStop(); this.initialize();}}>RESET</button>
          </div>
          {/*<ControlButtons/>*/}
          <br/>


          <br/>
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
