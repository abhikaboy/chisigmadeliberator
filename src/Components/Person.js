import React from 'react';

export default function Person({ data }) {
	if (data === undefined) {
		return <div>Loading...</div>;
	}
	let id = '1jbguGNGfT9VUgGHvjfSfgimh3iHuETqF';

	let headshotUrl = data['photo'];
	headshotUrl = headshotUrl.replace('https://drive.google.com/file/d/', '');
	id = headshotUrl.split('/view?')[0];
	console.log(id);
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: '#001B2A',
				height: '100vh',
				overflow: 'hidden',
				marginTop: 0,
			}}>
			<img
				// 1qZhcmxjzNsmvGYGrJruPN52RnSdih1Uh
				src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`}
				alt='Avatar'
				style={{
					width: 275,
					height: 400,
					objectFit: 'cover',
					borderRadius: 10,
					justifyContent: 'center',
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingTop: '10vh',
				}}
			/>
			<h1
				style={{
					color: 'white',
					marginTop: 20,
					textAlign: 'center',
				}}>
				{data.name}
			</h1>
			<div style={{ color: 'white', textAlign: 'center' }}>
				<div>
					<b>Major:</b> {data['major ']}
				</div>
				<div>
					<b>Minors:</b> {data['minor ']}
				</div>
				<div>
					<b>Year:</b> {data['year']}
				</div>

				{/* <div style={{ color: 'white', textDecoration: 'none' }}>
					<a href='https://www.linkedin.com/in/barackobama/'>LinkedIn</a>
				</div> */}
			</div>
		</div>
	);
}
