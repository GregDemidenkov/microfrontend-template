import React from 'react';
import { Link } from 'react-router-dom';
import {service2Routes} from '@packages/shared/src/routes/service2'

const Service2 = () => {
    return (
        <h1>
            Service2 PAGE
            <div>
                <Link to={service2Routes.second}>go second page</Link>
            </div>
        </h1>
    );
};

export default Service2;