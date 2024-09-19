import React from 'react';

export default function Person({ data }) {
	if (data === undefined) {
		return <div>Loading...</div>;
	}
	let id = '1jbguGNGfT9VUgGHvjfSfgimh3iHuETqF';

	let headshotUrl = data['photo'];
	headshotUrl = headshotUrl.replace('https://drive.google.com/open?id=', '');
	id = headshotUrl.split('/view?')[0];
	let attributeCard = {
		width: '80%',
		margin: 'auto',
		backgroundColor: 'rgba(0,0,0,0.1)',
		boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
		borderRadius: 10,
		padding: '5%',
		marginTop: '2%',
	};
	console.log(id);
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: '#001B2A',
				height: '200vh',
				overflow: 'scroll',
				marginTop: 0,
				padding: '2%',
				paddingBottom: '40%',
			}}>
			<img
				src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`}
				alt='Avatar'
				style={{
					width: 250,
					height: 300,
					objectFit: 'cover',
					borderRadius: 5,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingTop: '10vh',
				}}
			/>
			<div>
				<h1
					style={{
						color: 'white',
						marginTop: 20,
						textAlign: 'center',
					}}>
					{data.name}
					<div
						style={{
							color: 'white',
							textAlign: 'center',
							fontSize: '0.8rem',
						}}>
						({data.pronouns})
					</div>
				</h1>
				<div
					style={{
						color: 'white',
						textAlign: 'center',
						padding: '5%',
						flexDirection: 'column',
						display: 'flex',
						paddingTop: '0%',
					}}>
					<div style={attributeCard}>
						<b>Year:</b> {data['year']}
					</div>

					<div style={attributeCard}>
						<b>Major:</b> {data['major']}
					</div>
					<div style={attributeCard}>
						<b>College:</b> {data['colleges ']}
					</div>
					<div
						style={{
							...attributeCard,
							display: data['minors'] === '' || data['minors' === 'N/A'] ? 'hidden' : 'block',
						}}>
						<b>Minors:</b> {data['minors']}
					</div>

					<div style={attributeCard}>
						<b>Events:</b> {data['events']}
					</div>

					{/* <div style={{ color: 'white', textDecoration: 'none' }}>
					<a href='https://www.linkedin.com/in/barackobama/'>LinkedIn</a>
				</div> */}
				</div>
			</div>
		</div>
	);
}
