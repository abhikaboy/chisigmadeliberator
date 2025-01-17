import React from 'react';

export default function Navbar() {
	return (
		<div
			style={{
				width: '100%',
				top: 0,
				backgroundColor: '#001B2A',
				flex: 1,
				flexDirection: 'row',
				display: 'flex',
				verticalAlign: 'middle',
				justifyContent: 'space-between',
				height: '100',
				boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
				zIndex: 20,
				position: 'fixed',
			}}>
			<div
				style={{
					color: 'white',
					flex: 1,
					flexDirection: 'row',
					display: 'flex',
					verticalAlign: 'middle',
					top: 0,
					height: '100%',
					paddingLeft: '1%',
					width: '100%',
				}}>
				<h2>Alpha Kappa Psi</h2>
				<p style={{ fontWeight: 300, paddingTop: 10, paddingLeft: 10 }}>Chi Sigma Deliberations</p>
			</div>
			<div
				style={{
					color: 'white',
					flex: 1,
					height: '100%',
					// marginLeft: '30%',
					alignSelf: 'flex-end',
					verticalAlign: 'middle',
					textAlign: 'right',
					paddingRight: '1%',
					margin: 'auto',
				}}>
				<p style={{ fontWeight: 300, paddingTop: 10 }}>Spring 2025 Evaluation Round</p>
			</div>
		</div>
	);
}
