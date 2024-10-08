import React, { useEffect, useState } from 'react';
import QA from './QA';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Info({ data, evalRaw, invScore, prepScores, interview, prepBreakdown, presBreakdown }) {
	// professional	willingness	brotherhood	teamwork	rush_benefit	akpsi_benefit  overall
	const [averages, setAverages] = useState([]);
	console.log(interview);
	console.log(prepBreakdown);
	useEffect(() => {
		if (evalRaw.length === 0) {
			setAverages([0, 0, 0, 0, 0, 0, 0]);
			return;
		}
		let totals = [0, 0, 0, 0, 0, 0, 0];

		evalRaw.forEach((evaluation) => {
			totals[0] += JSON.parse(evaluation.professional);
			totals[1] += JSON.parse(evaluation.willingness);
			totals[2] += JSON.parse(evaluation.brotherhood);
			totals[3] += JSON.parse(evaluation.teamwork);
			totals[4] += JSON.parse(evaluation.rush_benefit);
			totals[5] += JSON.parse(evaluation.akpsi_benefit);
		});
		totals = totals.map((total) => JSON.parse((total /= evalRaw.length).toFixed(2)));
		totals[6] = (totals.reduce((a, b) => a + b, 0) / 6).toFixed(2); // bc we have 6 columns
		setAverages(totals);
	}, [evalRaw]);

	let evalheading = {
		textAlign: 'center',
		backgroundColor: '#001B2A',
		color: '#fff',
		borderRadius: 10,
		transform: 'translateX(-15px)',
		height: 40,
		width: '10%',
	};

	if (data === undefined) {
		return (
			<div
				style={{
					backgroundColor: '#001B2A',
					height: '100vh',
					color: 'white',
					textAlign: 'center',
					paddingTop: '25%',
				}}>
				{' '}
				No Applicant Selected{' '}
			</div>
		);
	}
	const computeStyle = (score) => {
		if (score >= 4) {
			return { backgroundColor: `#00ff0090` };
		}
		if (score >= 3.6) {
			return { backgroundColor: `#b0ff0080` };
		}
		if (score >= 3) {
			return { backgroundColor: `#60700040` };
		} else {
			return { backgroundColor: `#ff000090` };
		}
	};
	console.log('Raw Prep');
	console.log(prepScores);
	console.log(invScore);
	return (
		<div style={{ backgroundColor: '#fff', bottom: 0, marginBottom: '-5%', paddingBottom: '5%', marginTop: '-5%' }}>
			<div style={{ marginLeft: '5%', marginTop: '5%', paddingTop: '5%', padding: '2%' }}>
				<Tabs>
					<TabList style={{ marginLeft: '-7%' }}>
						<Tab>Invitational</Tab>
						<Tab>Interview</Tab>
						<Tab>Rush</Tab>
					</TabList>
					<TabPanel>
						<h2>Evaluation Scores</h2>
						<table
							style={{
								width: '95%',
								boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
								borderRadius: 10,
								color: 'white',
								padding: 0,
								spacing: 0,
								gap: 0,
							}}>
							<thead
								style={{
									backgroundColor: '#001B2A',
									padding: 0,
									height: 50,
									borderRadius: 10,
									transform: 'translateX(7px)',
								}}>
								<th style={evalheading}>Final</th>
								<th style={evalheading}>Preperation</th>
								<th style={evalheading}>Presentation</th>
							</thead>

							<tr style={{ textAlign: 'center', backgroundColor: '#fff', color: '#001B2A', height: 40 }}>
								<td style={computeStyle(invScore[0].final)}>{invScore[0].final}</td>
								<td style={computeStyle(invScore[0].prep)}>{invScore[0].prep}</td>
								<td style={computeStyle(invScore[0].eval)}>{invScore[0].eval}</td>
							</tr>
						</table>
						<h2>Preparation Phase</h2>
						<table
							style={{
								width: '95%',
								boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
								borderRadius: 10,
								color: 'white',
								padding: 0,
								spacing: 0,
								gap: 0,
							}}>
							<thead
								style={{
									backgroundColor: '#001B2A',
									padding: 0,
									height: 50,
									borderRadius: 10,
									transform: 'translateX(7px)',
								}}>
								<th style={evalheading}>Overall</th>
								<th style={evalheading}>Leadership</th>
								<th style={evalheading}>Safe Working Envrionment</th>
								<th style={evalheading}>Team Players</th>
							</thead>

							<tr style={{ textAlign: 'center', backgroundColor: '#fff', color: '#001B2A', height: 40 }}>
								<td style={computeStyle(prepBreakdown[0].average)}>{prepBreakdown[0].average}</td>
								<td style={computeStyle(prepBreakdown[0].leadership)}>{prepBreakdown[0].leadership}</td>
								<td style={computeStyle(prepBreakdown[0].environment)}>
									{prepBreakdown[0].environment}
								</td>
								<td style={computeStyle(prepBreakdown[0].team)}>{prepBreakdown[0].team}</td>
							</tr>
						</table>
						<h2>Presentation Phase</h2>
						<table
							style={{
								width: '95%',
								boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
								borderRadius: 10,
								color: 'white',
								padding: 0,
								spacing: 0,
								gap: 0,
							}}>
							<thead
								style={{
									backgroundColor: '#001B2A',
									padding: 0,
									height: 50,
									borderRadius: 10,
									transform: 'translateX(7px)',
								}}>
								<th style={evalheading}>Average</th>
								<th style={evalheading}>Presentation Skills</th>
								<th style={evalheading}>Collaboration</th>
								<th style={evalheading}>Group Organization</th>
								<th style={evalheading}>Quality of Q&A</th>
								<th style={evalheading}>Overall</th>
							</thead>

							<tr style={{ textAlign: 'center', backgroundColor: '#fff', color: '#001B2A', height: 40 }}>
								<td style={computeStyle(presBreakdown[0].average)}>{presBreakdown[0].average}</td>
								<td style={computeStyle(presBreakdown[0].skill)}>{presBreakdown[0].skill}</td>
								<td style={computeStyle(presBreakdown[0].collab)}>{presBreakdown[0].collab}</td>
								<td style={computeStyle(presBreakdown[0].organized)}>{presBreakdown[0].organized}</td>
								<td style={computeStyle(presBreakdown[0].qna)}>{presBreakdown[0].qna}</td>
								<td style={computeStyle(presBreakdown[0].overall)}>{presBreakdown[0].overall}</td>
							</tr>
						</table>

						<div>
							<h2>Invitational Prep Comments</h2>
						</div>
						{prepScores.map((evaluation, i) => {
							return (
								<div
									style={{
										// border: '1px solid black',
										borderRadius: 10,
										padding: '2%',
										width: '90%',
										marginTop: '2%',
										boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
									}}>
									<b>{evaluation.brother}:</b> {evaluation.comment}
								</div>
							);
						})}
					</TabPanel>
					<TabPanel>
						<div>
							<h2>Interview</h2>
							{interview.questions.map((question, i) => {
								return <QA q={question} a={interview.responses[i]} />;
							})}
						</div>
					</TabPanel>
					<TabPanel>
						<div>
							<h2>
								Rush Comments{' '}
								<div
									style={{
										fontSize: '1rem',
										display: 'inline',
										fontWeight: 'normal',
									}}>{`(${evalRaw.length})`}</div>
							</h2>
							{evalRaw.map((evaluation, i) => {
								return (
									<div
										style={{
											// border: '1px solid black',
											borderRadius: 10,
											padding: '2%',
											width: '90%',
											marginTop: '2%',
											boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
										}}>
										<b>
											{evaluation.brother} ({evaluation.event}):
										</b>{' '}
										{evaluation.notes}
									</div>
								);
							})}
						</div>
						<h2>Application</h2>
						<div style={{ marginTop: '2px', marginBottom: '2px' }}>
							<QA
								q='Please describe why you would like to become a brother of Alpha Kappa Psi (150 words or less).'
								a={data.q1}
							/>
							<QA
								q='What about Alpha Kappa Psi gets you excited and why? (150 words or less)'
								a={data.q2}
							/>
							<QA
								q='What do you think you can bring to our chapter? Why do you think you stand out from the other candidates? (150 words or less)'
								a={data.q3}
							/>
							<QA
								q='Share something you want us to know that would make you a stronger candidate and has yet to be
fully represented through your resume or application. (150 words or less)'
								a={data.q4}
							/>
						</div>
						<h2>Resume</h2>
						<div style={{ marginTop: '2px', marginBottom: '2px' }}>
							<iframe src={data.resume} width='94%' height='200px'></iframe>
						</div>
					</TabPanel>
				</Tabs>

				{/* <h2>Interview</h2>

				<div style={{ marginTop: '2px', marginBottom: '2px' }}>
					<QA q='What is your favorite color?' a='Blue' />
					<QA q='What is your favorite food?' a='Pizza' />
					<QA q='What is your favorite movie?' a='The Dark Knight' />
					<QA q='What is your favorite book?' a='To Kill a Mockingbird' />
				</div> */}
			</div>
		</div>
	);
}
