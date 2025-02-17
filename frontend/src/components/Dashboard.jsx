"use client"

import { useState } from "react"
import { FaPlus, FaUserPlus, FaCode, FaFile } from "react-icons/fa"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import "../styles/dashboard.css"

const recentProjects = [
  { name: "Project Alpha", updated: "2 days ago" },
  { name: "Web App Beta", updated: "1 week ago" },
  { name: "Mobile App Gamma", updated: "3 weeks ago" },
  { name: "API Project Delta", updated: "1 month ago" },
]

const codingStats = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 5 },
  { day: "Wed", hours: 4 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 2 },
  { day: "Sun", hours: 1 },
]

const Dashboard = () =>{
  const [language, setLanguage] = useState("javascript")

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-actions">
        <div className="dashboard-card">
          <div className="card-content">
            <FaCode className="card-icon" />
            <h2>Create New Project</h2>
            <p>Start a new coding project</p>
          </div>
          <button className="dashboard-button">
            <FaPlus className="button-icon" /> New Project
          </button>
        </div>

        <div className="dashboard-card">
          <div className="card-content">
            <FaFile className="card-icon" />
            <h2>Create New File</h2>
            <p>Choose your programming language</p>
          </div>
          <div className="card-actions">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
            <button className="dashboard-button">Create</button>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-content">
            <FaUserPlus className="card-icon" />
            <h2>Invite Collaborators</h2>
            <p>Work together in real time</p>
          </div>
          <button className="dashboard-button invite-button">
            <FaUserPlus className="button-icon" /> Invite
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card recent-projects">
          <h2>Recent Projects</h2>
          <ul className="project-list">
            {recentProjects.map((project, index) => (
              <li key={index} className="project-item">
                <span>{project.name}</span>
                <span className="updated-text">{project.updated}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card coding-activity">
          <h2>Coding Activity</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={codingStats}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#007ACC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

