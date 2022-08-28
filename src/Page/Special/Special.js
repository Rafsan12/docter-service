import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';





 
import  "./Special.css"

const Special = () => {
    return (
          
        <div className='mt-4  container'>
            <h2 className="text-center text-primary">Why You chose us</h2>


            <CardGroup className='  text-center mt-4 gap-4 justify-content-center align-items-center '>
      <Card>
  
        <Card.Body >
          <Card.Text>
            You provide best service in the town 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            You can see three times in the month with one-time doctor fee.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
           we are Also provide Online doctor service. 
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
    );
};

export default Special;