import React,{Component} from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    Increment()
    {
        this.setState({
            count:this.state.count+1
        }, ()=>{
            console.log('Callback Value',this.state.count)
            }
    )
        
    }
   inc(){
    this.setState((prevState)=>({
        count: prevState.count+1
    }))
   }
    IncrementFive()
    {
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        this.inc()
    }
  render() {
    return (
        <div>
      <div>
        <h2>count : {this.state.count}</h2>
        <button onClick={() => this.IncrementFive()}>Increment</button>
      </div>
      </div>
    )
  }
}

export default counter
