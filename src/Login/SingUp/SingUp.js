import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const SingUp = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const confirmPasswordRef = useRef('');
   const [agree, setAgree] = useState(false)
   const navigate = useNavigate();
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if(user){
    navigate('/home')
  }


   const handleSingUp = e =>{
    e.preventDefault();
    const email= emailRef.current.value;
    const password= passwordRef.current.value;
    const confirmPassword= confirmPasswordRef.current.value;
    // const agree = e.target.terms.checked;
    if(agree){
      createUserWithEmailAndPassword(email, password, confirmPassword) 

    }

    
   }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className="text-primary text-center">Please Sing Up</h2>
             <Form onSubmit={handleSingUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={() => setAgree(!agree) } type="checkbox" className={agree? 'text-primary' : 'text-danger'} label="Accept Medicare Term and conditions "  />
      </Form.Group>
      
      <Button className=" w-50 mx-auto" variant="primary" disabled={!agree} type="submit">
        SingUp
      </Button>
    </Form>
    <p className="mt-2">Already have a account in Medicare?<Link to="/login">Please Log in </Link></p>
            
        </div>
    );
};

export default SingUp;