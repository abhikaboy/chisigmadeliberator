import React from 'react';

export default function QA({ q, a }) {
	return (
		<div
			style={{
				marginBottom: '1%',
			}}>
			<div
				style={{
					width: '90%',
					color: 'white',
					backgroundColor: '#001B2A',
					borderRadius: 10,
					borderStyle: 'solid',
					borderWidth: 1,
					padding: 20,
				}}>
				{q}
			</div>
			<div
				style={{
					width: '90%',
					color: 'black',
					borderRadius: 10,
					borderStyle: 'solid',
					borderTopWidth: 0,
					marginTop: '-1%',
					borderTopRightRadius: 0,
					borderTopLeftRadius: 0,
					borderWidth: 1,
					padding: 20,
				}}>
				{a}
			</div>
		</div>
	);
}
