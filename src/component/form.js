import React from "react";
import axios from "axios"
import { useEffect,useState } from "react";


// const api= axios.create({
//     baseURL:"http://localhost:3005/"
// })
// export const Hello=()=>{
export const From=() => {

    const button2Clicked=(event)=>{
        event.preventDefault();
        var name=(this.name.value)
        var mail=(this.eMail.value)
        var date=(this.Date.value)
        var msg=name+" "+mail+" "+date
        alert(msg);
        var body={
            userName: name,
            userEmail: mail,
            userDate: date,
        }

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:4000/user/',
        //     data: body,
        // })
        // .then(function (response) {
        //     alert(response);
        // })
        // .catch(function (error) {
        //     alert(error);
        // });
                
         
      }  
    const buttonClicked=()=>{
        alert("clicked ...");
        console.log("button is clicked ");
    }
    return(
        <div>
            <h1>Form for login</h1>
            {/* <form onSubmit={this.button2Clicked}> */}
            <p><label>name</label><input type="text" name="username" ref={node => (this.name = node)}></input></p>
            <p><label>Email</label><input type="email" name="mail" ref={node => (this.eMail = node)}></input></p>
            <p><label>Time</label><input type="date" ref={node => (this.Date = node)}></input></p>
            <button type="submit" onClic={buttonClicked}>Read this fast </button>
            <br></br><button type="button" onClick={button2Clicked}>testing this button </button>
            {/* </form> */}
        </div>
    )
    }


// ReactDOM.render(<buttonClicked />, document.getElementById('root'));
// export default Compoclass;
