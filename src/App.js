import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ReservationForm from './pages/ReservationForm';
import AboutUs from './pages/About';
import ContactUsPage from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/reservation" element={<ReservationForm />}></Route>
				<Route path="/about" element={<AboutUs />}></Route>
				<Route path="/contact-us" element={<ContactUsPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
