import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";

export const Hello=()=>{
    // const [initialState, setInitialState]=useEffect([])

    // useEffect(()=>{
    //     fetch("/user/").then(res =>{
    //         if (res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonResponse => setInitialState(jsonResponse))
    // },[])
    const [users,setUser]=useState([]);

    useEffect(()=>{
        console.log("how are you pal");
        loadUsers();
    },[])


    const loadUsers= async()=> {
        const result= await axios.get("http://localhost:3005/data")
        console.log(result);
        // setUser=(result.data)
        // console.log(setUser.name)
    }
    
    // console.log(initialState)

    return (
        <div>
            <h2>Table Should Show below this line </h2>
            <h2>--------------------------------------</h2>
            {/* <button type="button" >Button</button> */}
        </div>
    );
}