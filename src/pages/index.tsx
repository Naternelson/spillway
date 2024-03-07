'use client'; 
import { useState } from 'react';

export default function Home() {
	const [state, setState] = useState(false);
	const onClick = () => {
		setState((p) => !p);
	};
	return (
		<div>
			<h1>Welcome to Spillway</h1>
			<button className="button-special" onClick={onClick}>
				{state ? 'True' : 'False'}
			</button>
		</div>
	);
}
