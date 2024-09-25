import { useContext } from "react";
import { UserContext } from '../../UserContext'; // Adjust the import path if necessary

export default function Dashboard() {
    const { userInfo } = useContext(UserContext); // Access userInfo from context

    return (
        <div>
            <h1>Dashboard</h1>
            {userInfo ? (
                <div>
                    <h2>Welcome, {userInfo.name}!</h2>
                    <p>Email: {userInfo.email}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>No user information available. Please log in.</p>
            )}
        </div>
    );
}
