import React,{Component} from "react";
import './App.css';
// import  Chart  from "react-charts";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import { useEffect,useState } from "react";



const state = {
    
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'User Count',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
}


export default class Graph extends Component{


    render(){
      return(
      <div>
        <h1>Trial Graph </h1>
      <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'User registered',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
        <br></br><br></br>
        <label>Start date</label ><input type="date"></input>
        <label>End date</label><input type="date"></input>
        <br></br>
        <button type="submit">Show Graph</button>
    </div>
    
      );
      }
}