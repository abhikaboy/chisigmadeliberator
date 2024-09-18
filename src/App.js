import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

function App() {
	return (
		<div style={{ overflow: 'hidden', backgroundColor: '#001B2A' }}>
			<Navbar />
			<Body />
		</div>
	);
}

export default App;
