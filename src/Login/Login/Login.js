import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
    auth
  );
  const location = useLocation();

    let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  const navigateRestPassword =async () =>{
    const email= emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');

  }
       
   const handleLogIn =e =>{
    e.preventDefault();

    const email= emailRef.current.value;
    const password= passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
   }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className="text-primary text-center">Please Log In</h2>
             <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className="mt-2">New to Medicare?<Link to="/singUp">Please SingUp </Link></p>
    <p className="mt-2">Forget Password?<Link onClick={navigateRestPassword} to="/singUp">Reset Password </Link></p>
            
        </div>
    );
};

export default Login;