import React from "react";
import axios from "axios"
import { useEffect,useState } from "react";


// const api= axios.create({
//     baseURL:"http://localhost:3005/"
// })

class Compoclass extends React.Component{

    constructor(props) {
        super(props);
        // api.get("/").then(res => {
        //     console.log(res.data)
        // })
        this.state = {
            name: "",
            email: "",
            date: "",
          }
      
        this.button2Clicked = this.button2Clicked.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
        
      }



    button2Clicked=() => {
        console.log("button 2 clicked ")
        // event.preventDefault();
        // var name=(this.name.value)
        // var mail=(this.eMail.value)
        // var date=(this.Date.value)
        // var msg=name+" "+mail+" "+date
        // alert(msg);
        var body={
            "userName": "name",
            "userEmail": "mail",
            "userDate": "date"
            }
        // const result = axios.get('http://localhost:3005/data').then(
        // // console.log(result)
        // alert("data is feteched"));
        // axios.post('http://localhost:3005/data',body)
        // .then(function (response) {
        //     alert(response);
        // })
        // .catch(function (error) {
        //     alert(error);
        // });
                
         
      }  
    buttonClicked=()=>{
        alert("clicked ...");
        console.log("button is clicked ");
    }

    render(){
        return(
            <div>
                <h1>Form for login</h1>
                {/* <form onSubmit={this.button2Clicked}> */}
                <p><label>name</label><input type="text" name="username" ref={node => (this.name = node)}></input></p>
                <p><label>Email</label><input type="email" name="mail" ref={node => (this.eMail = node)}></input></p>
                <p><label>Time</label><input type="date" ref={node => (this.Date = node)}></input></p>
                <button type="submit" onClick={this.buttonClicked}>Read this fast </button>
                <br></br><button type="button" onClick={this.button2Clicked()}>testing this button </button>
                {/* </form> */}
            </div>
        )
    }
}

// ReactDOM.render(<buttonClicked />, document.getElementById('root'));
export default Compoclass;
