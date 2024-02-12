import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {service1Routes} from '@packages/shared/src/routes/service1'
import {service2Routes} from '@packages/shared/src/routes/service2'

export const App = () => {

	return (
		<div data-testid={'App.DataTestId'}>
				<h1>PAGE</h1>
				<br />
				<br />
				<Link to={service1Routes.first}>Service 1</Link>
				<br />
				<Link to={service2Routes.first}>Service 2</Link>
				<Outlet />
		</div>
	);
};

