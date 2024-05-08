import RoomIcon from "@mui/icons-material/Room";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";
import CloseIcon from "@mui/icons-material/Close";

const Register = ({ setShowRegister }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="logo">
        <RoomIcon />
        devDaman
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="registerBtn">Register</button>
        {success && (
          <span className="success">Successfull, you can login now</span>
        )}
        {error && <span className="failure">Something went wrong</span>}
      </form>
      <CloseIcon
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
};

export default Register;
