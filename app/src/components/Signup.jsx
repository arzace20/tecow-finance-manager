import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Signup.css"

function Signup() {
    const [adminCode, setAdminCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        // Here, you can add code to handle the signup process,
        // such as sending the user's data to a server or performing
        // client-side validation.

        // For now, let's just log the user's data as an example.
        console.log("Admin code:", adminCode);
        console.log("Email:", email);
        console.log("Password:", password);

        // You can clear the form fields after successful signup or other handling.
        setAdminCode("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="signupPage">
            <h1 className="signUpTitle">Sign Up</h1>
            <form onSubmit={handleSignup}>
                <label className="signUpLabel1">
                    Admin code:
                    <input
                        className="signUpPlaceholder"
                        type="text"
                        value={adminCode}
                        onChange={(e) => setAdminCode(e.target.value)}
                    />
                </label>
                <label className="signUpLabel">
                    Email:
                    <input
                        className="signUpPlaceholder"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="signUpLabel">
                    Password:
                    <input
                        className="signUpPlaceholder"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className="signUpButton">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
