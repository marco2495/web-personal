import { BrowserRouter as Router} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/navbar";
import Home from './components/home'

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>
            </Router>
            <Home></Home>
        </>
    );
}
export default App;