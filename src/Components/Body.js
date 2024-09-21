import React, { useEffect, useState } from 'react';
import Person from './Person';
import Info from './Info';
import Papa from 'papaparse';
import app from '../App/application.csv';
import { set } from 'lodash';

export default function Body() {
	const [password, setPassword] = useState('');

	const [appData, setAppData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [selected, setSelected] = useState(null);

	const [evalData, setEvalData] = useState([]);
	const [evalsCurrent, setEvalsCurrent] = useState([]);

	const handleClick = (e) => {
		let index = e.target.value;
		setSelected(index);

		console.log(appData[index]);

		let evalList = evalData.filter(
			(evaluation) => evaluation.name.toLowerCase().trim() == appData[index].name.toLowerCase().trim(),
		);
		setEvalsCurrent(evalList);
	};

	/* 
		PARSING
	*/

	let blacklist = [
		'Aaron Thomas',
		'Aditya Patwal',
		'Aishani Raju',
		'Ashley Shin',
		'Ava Baichi',
		'Ben Wanderman',
		'Clare Murray',
		'Connor Tukey',
		'Dia Brar',
		'Eva Rankin',
		'Gianna Eberhardt',
		'Grace Cocorocchia',
		'Isabella Quintero',
		'Jack Larkin',
		'Jonathan Frenz',
		'Joseph Asoofi',
		'Juan Cadierno Redondo',
		'Kathryn Fisher',
		'Kyle Lee',
		'Lexi Kemmer',
		'Merton (Rocky) Rockney',
		'Mia Khan',
		'Nicole Swan',
		'Nikk Shah',
		'Richard Huang',
		'Riya Ramdev',
		'Ross Kobayashi',
		'Saimaa Malhotra',
		'Vaunshal Saraiya',
		'Aarzu Choudhary',
		'Aidan Ormsby',
		'Arkin Sawhney',
		'Caden Braun',
		'Charlotte Napawan',
		'Thanawan "Charlotte" Napawan',
		'Izze (Izadora) D’Farley',
		'Jay Leung',
		'London Jones',
		'Mahika Modi',
		'Maximus Mcelroy',
		'Natalie Downs',
		'Alina Jiang',
		'Alisha Srivastava',
		'Ayah Bouchouary',
		'Chris Catalan Valdez',
		'Christina Fu',
		'Diana Heung',
		'Esabella DeFilippo',
		'Frank Giugliano',
		'Jack Jiang',
		'Jack McCarthy',
		'Jaden Chin',
		'Joshua Lin',
		'Leran Ban',
		'Liam Sutton',
		'Meredith Lee',
		'Michael Zemedeneh',
		'Nicolas Somma Tang',
		'Orelia Thottam',
		'Sameera Boga',
		'Shreya Dandu',
		'Siran Khachatourian',
		'Trayna Bui',
		'Vanini Agrawal',
		'Vedanta Sharma',
		'Lily Bailey',
		'Arjun Vellimedu',
		'Kristen Liao',
	];

	let url = `https://relay-file-upload.s3-us-east-2.amazonaws.com/elxnaqi5pqgAKPsiFL24APPS-FormResponses1(6).csv`;
	let evalUrl = `https://relay-file-upload.s3-us-east-2.amazonaws.com/i3a7f63aklpUpsilonEvalForm!(Responses)-FormResponses1(4).csv`;
	let evalAggregate = ``;

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
		Papa.parse(evalUrl, {
			download: true,
			header: true,
			complete: function (results) {
				setEvalData(results.data.slice(1));
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
					width: '25%',
					overflow: 'scroll',
					gap: 0,
				}}>
				<Person data={appData[selected]} />
			</div>
			<div
				style={{
					width: '75vw',
					overflow: 'scroll',
					paddingTop: '2%',
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
						if (
							blacklist.includes(data.name)
							// || evalData.filter((evaluation) => evaluation.name === data.name).length === 0
						) {
							return null;
						}
						return (
							<option key={i} value={i}>
								{data.name}
							</option>
						);
					})}
					{/* <option value={selected}>{appData[selected].FullName}</option> */}
				</select>
				<Info data={appData[selected]} evalRaw={evalsCurrent} />
			</div>
		</div>
	);
}
