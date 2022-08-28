import React from 'react';
import { Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id ,name,picture,description} = service;
    const navigate = useNavigate();
    const navigateToBook = id =>{
          navigate(`/service/${id}`);

    }
    return (
 
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
<div className="card " style={{width: "18rem"}}>
  <img className="card-img-top" src={picture} alt="" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}.</p>
    <Button onClick={() => navigateToBook(id) } to ='/' className="btn btn-primary">Book Now</Button>
  </div>
</div>
        </div>
        
    
            
    
    );
};

export default Service;