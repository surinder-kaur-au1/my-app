import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: ''
        }
    }

    submitChange=(event) => {
        event.preventDefault()
            let data = this.state
            console.log("final data is ", data);
    }
    inputChange=(event) =>{
        event.preventDefault()
        //console.log(event);
        //console.log(event.target.name);
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
        
    
    }
            
              
    render() {
      const {fullName}= this.state;
      
        return(
        <div>
            <h2>ADD NEW INFORMATION</h2>
            <h3>hello {fullName}</h3>
            <form onSubmit={this.submitChange}>
        <input type= 'text'  placeholder='your name' name='fullName' onChange={this.inputChange}></input><br></br>
            <button>submit</button>
            

            </form>

           </div>
        )
    }
}


    
    



ReactDOM.render(<Header />, document.getElementById('root'));