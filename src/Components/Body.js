import React, { useEffect, useState } from 'react';
import Person from './Person';
import Info from './Info';
import Papa from 'papaparse';
import app from '../App/application.csv';

export default function Body() {
	const [appData, setAppData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [selected, setSelected] = useState(null);

	const handleClick = (e) => {
		setSelected(e.target.value);
	};

	/* 
		PARSING
	*/

	let url = `https://relay-file-upload.s3.us-east-2.amazonaws.com/AKPsiFL24APPS+-+Form+Responses+1.csv`;
	useEffect(() => {
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function (results) {
				setHeaders(results.data[1]);
				setAppData(results.data.slice(1));
				console.log(results.data.slice(1));
			},
		});
	}, []);

	// useEffect(() => {
	// console.log(appData);
	// }, [appData]);
	if (appData.length === 0) {
		return <div>Loading...</div>;
	}
	return (
		<div
			style={{
				width: '100vw',
				flex: 1,
				flexDirection: 'row',
				display: 'flex',
				height: '100vh',
				zIndex: 4,
				overflow: 'hidden',
				paddingTop: '4%',
			}}>
			<div
				style={{
					width: '30%',
					height: '100%',
					gap: 0,
				}}>
				<Person data={appData[selected]} />
			</div>
			<div
				style={{
					width: '70vw',
					overflow: 'scroll',
					paddingTop: '4%',
				}}>
				<select
					onChange={handleClick}
					style={{
						backgroundColor: '#001828',
						color: 'white',
						borderColor: '#001B2A',
						padding: 20,
						paddingRight: 100,
						textDecoration: 'bold',
						textAlign: 'center',
						marginTop: 0,
						width: '100%',
					}}>
					{appData.map((data, i) => {
						return (
							<option key={i} value={i}>
								{data.name}
							</option>
						);
					})}
					{/* <option value={selected}>{appData[selected].FullName}</option> */}
				</select>
				<Info data={appData[selected]} />
			</div>
		</div>
	);
}
