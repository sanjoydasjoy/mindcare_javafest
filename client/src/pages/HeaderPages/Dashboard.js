import { useContext } from "react";
import { UserContext } from '../../UserContext'; // Adjust the import path if necessary
import '../../Allcss/HeaderPages/Dashboard.css';


export default function Dashboard() {
    const { userInfo } = useContext(UserContext); // Access userInfo from context

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {userInfo ? (
                <div className="user-info">
                    <h2>Welcome, {userInfo.name}!</h2>
                    <p>Email: {userInfo.email}</p>
                </div>
            ) : (
                <p>No user information available. Please log in.</p>
            )}

            <div className="cards">
                <div className="card">
                    <h3>Your Progress</h3>
                    <p>Track your mental health progress over time.</p>
                </div>
                <div className="card">
                    <h3>Resources</h3>
                    <p>Access articles, videos, and other resources to help you.</p>
                </div>
                <div className="card">
                    <h3>Upcoming Appointments</h3>
                    <p>View your scheduled appointments with therapists.</p>
                </div>
                <div className="card">
                    <h3>Community Support</h3>
                    <p>Join groups and forums to connect with others.</p>
                </div>
            </div>
        </div>
    );
}
