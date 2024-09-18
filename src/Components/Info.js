import React, { useEffect, useState } from 'react';
import QA from './QA';
import app from '../App/application.csv';
import Papa from 'papaparse';
export default function Info({ data }) {
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

	return (
		<div style={{ backgroundColor: '#fff', bottom: 0, marginBottom: '-5%', paddingBottom: '5%', marginTop: '-5%' }}>
			<div style={{ marginLeft: '5%', marginTop: '5%', paddingTop: '5%' }}>
				<h2>Application</h2>
				<div style={{ marginTop: '2px', marginBottom: '2px' }}>
					<QA
						q='Please describe why you would like to become a brother of Alpha Kappa Psi (150 words or less).'
						a={data.q1}
					/>
					<QA q='What about Alpha Kappa Psi gets you excited and why? (150 words or less)' a={data.q2} />
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
					<iframe
						src='https://drive.google.com/file/d/15JhT0uM0-HP0uCFyLaQGfWTybu1LRZMS/view?usp=sharing'
						width='94%'
						height='200px'></iframe>
				</div>
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
