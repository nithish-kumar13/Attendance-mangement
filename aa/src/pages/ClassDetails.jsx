/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import add from "../assets/add.png";
import axios from 'axios';
import Classgetdetails from './classgetdetails'
// import * as XLSX from "xlsx";

function ClassDetails() {
    const [data, setData] = useState({
        regno: "",
        studentname: "",
        section: "",
        year: "",
        dob: "",
        department: "",
        address: "",
        ph: "",
    });
    const { studentname, regno, section, year, department, address, ph, dob } = data;

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});}

    

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://management-db95c-default-rtdb.firebaseio.com/Finalyearstudent.json',data ).then(()=>alert("Submitted successfully"))
        

    }




    return (
        <div className="Container">
            <h4>Class Details</h4><br />
            <div className="conatiner">
                <div style={{ display: 'flex', }}>
                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalToggleLabel">Student Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-sm">
                                                <input type="text"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="regno"
                                                    value={regno}
                                                    // value={password}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="Register No"
                                                />
                                            </div>
                                            <div className="col-sm">
                                                <input type="text"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="studentname"
                                                    value={studentname}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="studentname"
                                                />
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-sm">
                                                <input type="text"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="section"
                                                    value={section}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="Section"
                                                />
                                            </div>
                                            <div className="col-sm">
                                                <input type="number"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="year"
                                                    value={year}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="Year"
                                                />
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-sm">
                                                <input type="text"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="department"
                                                    value={department}
                                                    // value={password}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="Department"
                                                />
                                            </div>
                                            <div className="col-sm">
                                                <input type="date"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="dob"
                                                    value={dob}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="DOB"
                                                />
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-sm">
                                                <input type="text"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="address"
                                                    value={address}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="Address"
                                                />
                                            </div>
                                            <div className="col-sm">
                                                <input type="number"
                                                    className='form-control'
                                                    onChange={handleChange}
                                                    name="ph"
                                                    value={ph}
                                                    autoSave="false"
                                                    autoCapitalize="false"
                                                    autoComplete="false"
                                                    autoCorrect="false"
                                                    placeholder="PhoneNo"
                                                />
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary"
                                                //  data-bs-target="#exampleModalToggle2"
                                                //   data-bs-toggle="modal"
                                                type='submit'
                                            >Add</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a style={{ textDecoration: 'none', float: 'right' }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                        <button className='btn btn btn-outline-secondary' ><img src={add} alt="" height="30px" style={{ paddingRight: "10px" }} />Add student</button>

                    </a>


                </div>
            </div>
            <Classgetdetails/>
        </div>
    );
}

export default ClassDetails;
