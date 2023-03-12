import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackDisplay from "./pages/FeedbackDisplay";
import Home from "./pages/Home";

//main app component
function App() {
    return ( 
        <>
            <Router>
                <nav className="navbar" activeKey='/home'>
                    <Link to='/'> Home </Link>
                    <Link to='/reviews'> Reviews </Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/reviews' element={<FeedbackDisplay />} />
                   
                </Routes>
            </Router>
        </>
    )
}

export default App;