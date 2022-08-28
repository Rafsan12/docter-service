import React, { useEffect, useState } from 'react';
import Service from "../Service/Service"

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(() => {
        fetch("/service.json")
        .then(res => res.json())
        .then(data => setServices(data))
},[])
    return (
        <div className='text-center mt-4 text-primary'>
            <h2>We Are Provide </h2>

            <div className=" container mt-4 row">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service> )
                }
            </div>
        </div>
    );
};

export default Services;