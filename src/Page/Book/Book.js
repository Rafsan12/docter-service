import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>welcome to Book</h2>
            
        </div>
    );
};

export default Book;