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

	const [invScore, setInvScore] = useState([]);
	const [prepScores, setPrepScores] = useState([]);

	const [invScoreRaw, setInvRaw] = useState([]);
	const [prepScoreRaw, setPrepRaw] = useState([]);

	const [prepBreakdownRaw, setPrepBreakdownRaw] = useState([]);
	const [prepBreakdown, setPrepBreakdown] = useState([]);

	const [presentaionBreakdownRaw, setPresentaionBreakdownRaw] = useState([]);
	const [presentaionBreakdown, setPresentaionBreakdown] = useState([]);

	const [interviewData, setInterviewData] = useState([]);

	const [interviewDataSelected, setInterviewDataSelected] = useState({
		name: '',
		questions: [],
		responses: [],
	});

	const handleClick = (e) => {
		let index = e.target.value;
		setSelected(index);

		console.log(appData[index]);

		const name = appData[index].name.toLowerCase().trim();
		console.log(name);

		console.log(prepScoreRaw[0].name);

		let evalList = evalData.filter((evaluation) => evaluation.name.toLowerCase().trim() == name);
		let invScoreList = invScoreRaw.filter((evaluation) => evaluation.name.toLowerCase().trim() == name);
		let prepScoreList = prepScoreRaw.filter((evaluation) => evaluation.name.toLowerCase().trim() == name);
		let prepBreakdownList = prepBreakdownRaw.filter((evaluation) => evaluation.name.toLowerCase().trim() == name);
		let presBreakdownList = presentaionBreakdownRaw.filter(
			(evaluation) => evaluation.name.toLowerCase().trim() == name.split(' ')[0],
		);

		setInterviewDataSelected(interviewData.filter((interview) => interview.name.toLowerCase().trim() == name)[0]);
		console.log(interviewData.filter((interview) => interview.name.toLowerCase().trim() == name));
		setEvalsCurrent(evalList);
		setInvScore(invScoreList);
		setPrepScores(prepScoreList);
		setPrepBreakdown(prepBreakdownList);
		setPresentaionBreakdown(presBreakdownList);
	};

	/* 
		PARSING
	*/

	let url = 'https://relay-file-upload.s3-us-east-2.amazonaws.com/elxnaqi5pqgAKPsiFL24APPS-FormResponses1(6).csv'; // `https://relay-file-upload.s3-us-east-2.amazonaws.com/elxnaqi5pqgAKPsiFL24APPS-FormResponses1(6).csv`;
	let evalUrl =
		'https://relay-file-upload.s3-us-east-2.amazonaws.com/i3a7f63aklpUpsilonEvalForm!(Responses)-FormResponses1(4).csv'; // `https://relay-file-upload.s3-us-east-2.amazonaws.com/i3a7f63aklpUpsilonEvalForm!(Responses)-FormResponses1(4).csv`;
	let evalAggregate = `,`;

	let finalInvScore = `https://relay-file-upload.s3-us-east-2.amazonaws.com/u1ba9tc9habUpsilonDelibsMastersheet-FinalTotalAverages(invitationalsprepandpres)(1).csv`;
	let prepScoresCSV = `https://relay-file-upload.s3-us-east-2.amazonaws.com/xsfqcrb69tUpsilonDelibsMastersheet-InvitationalsEvals_Comments.csv`;

	let prepBreakdownCSV = `https://relay-file-upload.s3-us-east-2.amazonaws.com/6kyde4u8egqUpsilonDelibsMastersheet-Invitationalspreparationaverages.csv`;
	let presentaionBreakdownCSV = `https://relay-file-upload.s3-us-east-2.amazonaws.com/u5qex8m8wz9UpsilonDelibsMastersheet-Presentationsaverages(1).csv`;

	let interviewUrl = `https://relay-file-upload.s3-us-east-2.amazonaws.com/16kivrxw9r2InterviewTemplate-Sheet1(1).csv`;

	let blacklist = ['', ' '];
	let whitelist = [
		`Sean Davis`,
		`Jack Pereira`,
		`Aum Pourohit`,
		`Nichole Chen`,
		`Megha Iyer`,
		`Brianna Giangrasso`,
		`Rebekah Campus-Hartman`,
		`Kayla Handley`,
		`Patrick McMorrow`,
		`Will Marris`,
		`Galia Koonyevsky`,
		`Isabella Lam`,
		`Rishi Kamtam`,
		`Pallavi Shankar`,
		`Bonisha Maitra`,
		`Ethan Kim`,
		`Liam Clarke`,
		`Tennyson Hopley-Romig`,
		`Yuna Shin`,
		`Rhianna D'Silva`,
		`Amanda Gomes`,
		`Tarun Singh`,
	];
	useEffect(() => {
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function (results) {
				setHeaders(results.data[1]);
				setAppData(results.data.slice(1).filter((data) => whitelist.includes(data.name)));
			},
		});

		Papa.parse(finalInvScore, {
			download: true,
			header: true,
			complete: function (results) {
				setInvScore(results.data.slice(1).slice(0, 22));
				setInvRaw(results.data.slice(1).slice(0, 22));
			},
		});

		Papa.parse(prepScoresCSV, {
			download: true,
			header: true,
			complete: function (results) {
				setPrepScores(results.data.slice(1));
				setPrepRaw(results.data.slice(1));
				console.log('PREP BRABH');
				console.log(prepScoreRaw);
			},
		});
		Papa.parse(presentaionBreakdownCSV, {
			download: true,
			header: true,
			complete: function (results) {
				setPresentaionBreakdownRaw(results.data.slice(1));
				setPresentaionBreakdown(results.data.slice(1)[0]);
				console.log('PREP BRABH');
				console.log(prepScoreRaw);
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

		Papa.parse(prepBreakdownCSV, {
			download: true,
			header: true,
			complete: function (results) {
				setPrepBreakdownRaw(results.data.slice(1));
				console.log(results.data.slice(1));
			},
		});

		Papa.parse(interviewUrl, {
			download: true,
			header: true,
			complete: function (results) {
				let interviewDataLocal = [];
				for (let [i, value] of results.data.entries()) {
					if (value.Person == '*') {
						// Found a marker
						const q = Object.values(results.data[i]); // questions
						const res = Object.values(results.data[i + 1]); // answers
						console.log(results.data[i + 1]); // answers
						let interviewObject = {
							name: '',
							questions: [],
							responses: [],
						};
						interviewObject.name = res[0];
						let questions = q.splice(2);
						let responses = res.splice(2);

						for (let i = 0; i < responses.length; i++) {
							if (responses[i].length > 10) {
								interviewObject.questions.push(questions[i]);
								interviewObject.responses.push(responses[i]);
							}
						}
						console.log(interviewObject);
						interviewDataLocal.push(interviewObject);
						setInterviewDataSelected(interviewObject);
					}
				}
				setInterviewData(interviewDataLocal);
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
				<Info
					data={appData[selected]}
					evalRaw={evalsCurrent}
					prepBreakdown={prepBreakdown}
					invScore={invScore}
					prepScores={prepScores}
					interview={interviewDataSelected}
					presBreakdown={presentaionBreakdown}
				/>
			</div>
		</div>
	);
}
