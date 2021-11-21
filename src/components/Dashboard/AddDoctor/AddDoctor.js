import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh'
    }

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);

        fetch('https://stark-shore-06055.herokuapp.com/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Doctor added successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <div style={containerStyle} className=" row ">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 mt-5">
                    <h6>Add Doctor</h6>
                    <form onSubmit={handleSubmit} className="me-5 pe-5 w-50">
                        <div class="form-group mt-2">
                            <label >Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                        </div>

                        <div class="form-group mt-2">
                            <label >Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                        </div>

                        <div class="form-group mt-2">
                            <label >Phone Number</label>
                            <input onBlur={handleBlur} type="number" class="form-control" name="phone" placeholder="Phone Number" />
                        </div>

                        <div class="form-group mt-2">
                            <label for="exampleInputPassword">Upload a photo</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="file" />
                        </div>
                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddDoctor;