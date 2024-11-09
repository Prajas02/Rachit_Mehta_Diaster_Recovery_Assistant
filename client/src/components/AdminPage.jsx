// src/components/AdminPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestList from './RequestList';

const AdminPage = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [status, setStatus] = useState('');
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalResponded, setTotalResponded] = useState(0);

  useEffect(() => {
    // Fetch all necessary data for the dashboard from a single backend endpoint
    axios.get('http://localhost:5000/predict_supplies')
      .then(response => {
        console.log(data)
        const data = response;
        setTotalSupply(data['predicted_supplies']);
        
      })
      .catch(error => console.error("Error fetching dashboard data:", error));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* First row: Supply and Demand */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Supply</h2>
          <p className="mt-2">Total Supply: {totalSupply}</p>
          
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Status</h2>
          <p className="mt-2">Status: {status}</p>
        </div>

        {/* Second row: Requests and Responded */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Requests</h2>
          <p className="mt-2">Total Requests: {totalRequests}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Responded</h2>
          <p className="mt-2">Total Responded: {totalResponded}</p>
        </div>
      </div>

      <div className="mt-8">
        <RequestList
          setTotalRequests={setTotalRequests}
          setTotalResponded={setTotalResponded}
        />
      </div>
    </div>
  );
};

export default AdminPage;