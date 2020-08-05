import React from 'react';
import './registerComponent.css';

function RegisterComponent(props) {
    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Register</h1>
                <label>Name</label>
                <input id="inputName" className="m-1 form-control" type="email" placeholder="Name" required="" autoFocus=""></input>
                <label>Last Name</label>
                <input id="inputLastName" className="m-1 form-control" type="email" placeholder="Name" required="" autoFocus=""></input>
                <label>Birth Date</label>
                <input id="inputBirthDate" className="m-1 form-control" type="date" placeholder="Fecha" required="" autoFocus=""></input>

                <label>Email address</label>
                <input id="inputEmail" className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                <label>Password</label>
                <input id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required="" minLength="5" maxLength="20" ></input>
                <div className="rowflex">
                    <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit">Create account!</button>
                    <img className="capsule" src="https://i.pinimg.com/originals/c8/3e/92/c83e92534f8ce734d123c1445d1adf14.jpg" alt="capsule"></img>
                </div>
            </form>
        </section >
    )
}

export default RegisterComponent;