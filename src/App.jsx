import "./App.css";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Job from "./Components/Job/Job";
import Header from "./Components/Navbar/Header";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetails from "./Components/JobDetails/JobDetails";
import FeedbackForm from "./Components/Feedback/FeedbackForm";
// import ApplicationForm from "./Components/Application/ApplicationForm";
import { useState } from "react";
function App() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      {auth ? <Header /> : null}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route
            path="https://graduation-project-gules.vercel.app/auth"
            element={<Auth />}
          />{" "}
          {/* Authentication route */}
          <Route path="/jobs" element={<Job />} />
          <Route path="/jobsDetails" element={<JobDetails />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          {/* <Route path="/jobApp" element={<ApplicationForm />} /> */}
        </Routes>
      </Router>
      <CustomFooter />
    </>
  );
}

export default App;
