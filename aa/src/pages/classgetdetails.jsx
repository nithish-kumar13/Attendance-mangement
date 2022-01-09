/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from 'axios';
import './getdetails.css';

class Classgetdetails extends React.Component{
    state={
        results:[]
    }

    componentDidMount(){
        axios.get('https://management-db95c-default-rtdb.firebaseio.com/Finalyearstudent.json')
        .then(response=>{
            console.log(response.data)
            const fetchedResults=[];
            for(let key in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key 
                    }

                )

            }
            this.setState({results:fetchedResults})
        })
    }





    render(){
        return(
            <div>
                <br/>
                <table><thead>
                <tr><th>Reg No</th>
                 <th>Name</th>
                 <th>Year</th>
                 <th>Department</th>
                 <th>Section</th>
                 <th>DOB</th>
                 <th>Phone no</th>
                 <th>Address</th></tr>
                </thead>
                <tbody>
                {this.state.results.map(result=>{
                    return(
                        <tr>
                        <td>{result.regno}</td>
                        <td>{result.studentname}</td>
                        <td>{result.year}</td>
                        <td>{result.department}</td>
                         <td>{result.section}</td>
                         <td>{result.dob}</td>
                         <td>{result.ph}</td>
                         <td>{result.address}</td></tr>

                    );
                    })}
                </tbody>
                </table>

            </div>
        )
    }
    
}export default Classgetdetails;