import React from 'react';
import { Link } from 'react-router-dom';
import {service1Routes} from '@packages/shared/src/routes/service1'

const Service1 = () => {
    return (
        <h1>
            Service1 PAGE
            <div>
                <Link to={service1Routes.second}>go second page</Link>
            </div>
        </h1>
    );
};

export default Service1;