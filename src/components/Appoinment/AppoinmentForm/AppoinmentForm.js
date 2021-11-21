import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import '../../../App.css';

const customStyles = {

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


const AppoinmentForm = ({ modalIsOpen, closeModal, appoinmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);

        data.service = appoinmentOn;
        data.date = date;
        data.created = new Date();

        fetch('https://stark-shore-06055.herokuapp.com/addAppoinment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert("appoinment created successfully");
                }
            })

    };

    return (

        <div className="w-50">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className="text-brand text-center">{appoinmentOn}</h4>
                <p className=" text-center mb-2">{date.toDateString()}</p>

                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group mb-3">
                        <input type="test" className="form-control" nsme="name" placeholder="Your Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group mb-3 ">
                        <input type="number" className="form-control" nsme="phone" placeholder="Phone Number" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group mb-3 ">
                        <input type="email" className="form-control" nsme="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}

                    </div>

                    <div className="form-group mb-3 row">
                        <div className="col-4">
                            <select placeholder="Gender" className="form-control" name="gender"{...register("gender", { required: true })}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Others</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}<br />
                        </div>

                        <div className="col-4">
                            <input type="number" className="form-control" nsme="age" placeholder="Age" {...register("age", { required: true })} />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input type="number" className="form-control" nsme="weight" placeholder="Weight" {...register("weight", { required: true })} />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>

                    </div>


                    <div className="form-group text-end">
                        <input className="btn btn-primary " type="submit" />
                    </div>
                </form>

            </Modal>
        </div>
    );
}
export default AppoinmentForm;