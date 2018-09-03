import React, { Component } from 'react';
import './App.css';
import '../node_modules/dseg/css/dseg.css'

const initialTime = {
    inputTime: 0.5, //minutes
    remainTime : 0.5 * 60,
    isRunning : false,
    isTimeOut : false,
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
     * TODO : 시간 다됐을때 깜빡깜빡으로 변경, initialize 와 충돌 해결
     * */

    countDown(){
        this.timer = setInterval(
            ()=>{
                if(this.state.remainTime === 0 ){
                    this.toggleTimeOutModal();
                    this.countStop();
                    // this.initialize();
                }
                else{
                    this.setState({
                        ...this.state,
                        isRunning: true,
                        remainTime   : this.state.remainTime - 1
                    })
                }
                },
        1000);
    }

    countStop(){
        this.setState({
            ...this.state,
            isRunning: false
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

    toggleTimeOutModal(){
        this.setState({
            ...this.state,
            isTimeOut : !this.state.isTimeOut
        })
    }

    increaseTime(){
      this.setState({
          ...this.state,
          inputTime : this.state.inputTime + 5,
          remainTime : this.state.remainTime + 300,
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

    initialize(){
        this.setState({
            ...initialTime
        })
    }

    numberFormat(num){
        if(num<10){
            return '0'+num;
        }else{
            return num;
        }
    }

  render() {
    return (
      <div className="App">
          {
              this.state.isTimeOut &&
              <div className="dimmed">
                  <div className="timeout-modal">
                      <p>시간 다 됐습니다.</p>
                      <button onClick={()=>{this.toggleTimeOutModal()}}>확인</button>
                  </div>
              </div>
          }

          <div className="counter-wrapper">
              <div id="counter" className={this.state.isRunning ? 'time-running' : ''}>
                  {this.numberFormat(Math.floor(this.state.remainTime/60))}:{this.numberFormat(this.state.remainTime % 60)}
              </div>
              <div className="button-group">
                  <span className="min">min.</span>
                  <button onClick={()=>{this.increaseTime()}}> + 5</button>
                  <button onClick={()=>{this.decreaseTime()}}> - 5</button>
              </div>
          </div>

          <div className="control-buttons">
              <button onClick={()=>this.toggleCount()}>
                  {this.state.isRunning ? '||' : '▶'}
              </button>
              <button onClick={()=>{this.countStop(); this.initialize();}}>RESET</button>
          </div>
      </div>
    );
  }
}

export default App;
