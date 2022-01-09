import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import add from "../assets/add.png"
import group from '../assets/group.png'


const Home = () => {

    const [createclass, setCreateClass] = useState({

        classname: "",
        strength: "",
        year: "",
        incharge: ""
    });
    const { classname, strength, year, incharge } = createclass;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateClass((prev) => ({ ...prev, [name]: value }));

    }

    const handleSubmit = () => {
        alert(JSON.stringify(createclass));
    }

    return (
        <div className="conatiner">
            <div style={{ display: 'flex', }}>
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel">Create Class</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text"
                                                className='form-control'
                                                onChange={handleChange}
                                                name="classname"
                                                value={classname}
                                                // value={password}
                                                autoSave="false"
                                                autoCapitalize="false"
                                                autoComplete="false"
                                                autoCorrect="false"
                                                placeholder="Class Name"
                                            />
                                        </div>
                                        <div className="col-sm">
                                            <input type="number"
                                                className='form-control'
                                                onChange={handleChange}
                                                name="strength"
                                                value={strength}
                                                autoSave="false"
                                                autoCapitalize="false"
                                                autoComplete="false"
                                                autoCorrect="false"
                                                placeholder="Class Strength"
                                            /><br />
                                        </div>
                                    </div><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text"
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
                                        <div className="col-sm">
                                            <input type="text"
                                                className='form-control'
                                                onChange={handleChange}
                                                name="incharge"
                                                value={incharge}
                                                autoSave="false"
                                                autoCapitalize="false"
                                                autoComplete="false"
                                                autoCorrect="false"
                                                placeholder="Class Incharge"
                                            />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary"
                                            //  data-bs-target="#exampleModalToggle2"
                                            //   data-bs-toggle="modal"
                                            type='submit'
                                        >Create</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <a style={{ textDecoration: 'none' }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                    <div className='card sm align-items-center' style={{ maxWidth: "13rem", color: 'black' }}>
                        <img src={add} alt="" height='50px' width="50px" /><br />
                        <h5 className='addclass'>Create Class</h5>
                    </div>
                </a>
                <Link to="/class_details" style={{ textDecoration: 'none' }}>
                    <div className='card sm align-items-center' style={{ maxWidth: "13rem", color: 'black' }}>
                        <img src={group} alt="" height='50px' width="50px" /><br />
                        <h5 className='addclass'>Final Year IT</h5>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Home;
