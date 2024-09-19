import React from 'react';

export default function QA({ q, a }) {
	return (
		<div
			style={{
				marginBottom: '1%',
				display: 'flex',
				width: '95%',
				borderRadius: 10,
				flexDirection: 'column',
				boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
			}}>
			<div
				style={{
					backgroundColor: '#001B2A',
					color: 'white',
					padding: '3%',
					borderRadius: 10,
				}}>
				{q}
			</div>
			<div
				style={{
					padding: '3%',
					borderRadius: 10,
				}}>
				{a}
			</div>
		</div>
	);
}
