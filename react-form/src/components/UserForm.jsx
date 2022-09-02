import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passCon, setPassCon] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passCon };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

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
                        <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value) } />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input className="form-control" type="text" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input className="form-control" type="password" onChange={ (e) => setPassCon(e.target.value)} />
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