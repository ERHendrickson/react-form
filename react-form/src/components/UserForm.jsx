import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passCon, setPassCon] = useState("");
    const [passConError, setPassConError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passCon };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length === 0){
            setFirstNameError("First name is required");
        }else if(e.target.value.length < 3){
            setFirstNameError("First name must be at least 3 characters long");
        }else{
            setFirstNameError("");
        }
    }

    const handLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length === 0){
            setLastNameError("Last name is required");
        }else if(e.target.value.length < 3){
            setLastNameError("Last name must be at least 3 characters long");
        }else{
            setLastNameError("");
        }
    }

    const handEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length === 0){
            setEmailError("Email is required");
        }else if(e.target.value.length < 5){
            setEmailError("Email must be valid");
        }else{
            setEmailError("");
        }
    }

    const handPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length === 0){
            setPasswordError("Password is required");
        }else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long");
        }else{
            setPasswordError("");
        }
    }

        const handPassCon = (e) => {
        setPassCon(e.target.value);
        if(e.target.value.length === 0){
            setPassConError("Password confirmation is required");
        }else if(e.target.value !== password){
            setPassConError("Password confirmation must match password");
        }else{
            setPassConError("");
        }
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Form submitted.";
    //     }else{
    //         return "Fill out the form, please."
    //     }
    // }

    return(
        <div className="container">
            <div className>
                <form onSubmit={ createUser }>
                    {
                        hasBeenSubmitted ?
                        <h3>Thank you</h3> :
                        <h3>Fill out the form</h3>
                    }
                        {/* <h3>{formMessage()}</h3> */}
                    <div className="form-group">
                        <label>First Name: </label>
                        <input className="form-control" type="text" onChange={ handFirstName} />
                        {
                            firstNameError ?
                            <p className='text-danger'>{ firstNameError }</p>:
                            ''
                        }
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className="form-control" type="text" onChange={ handLastName} />
                        {
                            lastNameError ?
                            <p className='text-danger'>{ lastNameError }</p>:
                            ''
                        }
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input className="form-control" type="text" onChange={ handEmail} />
                        {
                            emailError ?
                            <p className='text-danger'>{ emailError }</p>:
                            ''
                        }
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" type="password" onChange={ handPassword} />
                        {
                            passwordError ?
                            <p className='text-danger'>{ passwordError }</p>:
                            ''
                        }
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input className="form-control" type="password" onChange={ handPassCon } />
                        {
                            passConError ?
                            <p className='text-danger'>{ passConError }</p>:
                            ''
                        }
                    </div>
                    <input className="btn btn-success m-3" type="submit" value="Create User" />
                </form>
            </div>
            <div className='border border-dark border-3 m-3'></div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password Confirmation: {passCon}</p>
        </div>

    );
};

export default UserForm;