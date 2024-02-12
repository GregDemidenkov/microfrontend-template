import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {

	return (
		<div data-testid={'App.DataTestId'}>
				<h1>SERVICE2 MODULE</h1>
				<Outlet />
		</div>
	);
};

