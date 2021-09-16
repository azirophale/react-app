import React from "react";
import axios from "axios";


class PersonList extends React.Component{
    state={
        persons: ["hiii","bye,","hello"],
        // persons: ["hksahf","fkajshdfkjah"],
    };

    // componentDidMount(){
    //     axios.get("https://localhost/4000/user").then(res =>{
    //         console.log(res);
    //         this.setState({persons: res.data});
    //     });
    // }
    render(){
        return(    
            <div>
            <ul>
                {this.state.persons.map(person => <li>{person}</li>)}
            </ul>
            </div>
        );
}
}

export default PersonList;