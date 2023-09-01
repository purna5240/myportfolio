import React from 'react';
import './achievements.css'; // Import your CSS file for styling

export default function Achievements() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-heading">My Achievements</h1>
      <ul className="achievements-list">
        <li className="achievement-item">
          <h2>Google cloud digital leader</h2>
          <p>Google</p>
          <p className="achievement-date">Dec 2022</p>
          <a href="https://www.credential.net/16fa3496-bba8-46e7-bfc6-5f71398b8944  " className="achievement-link" download>
            View Certficate
          </a>
        </li>
        <li className="achievement-item">
          <h2>Internship in Infosys Spring Board</h2>
          <p>Infosys</p>
          <p className="achievement-date">Desc 2022</p>
          <a href="link_to_certificate2.pdf" className="achievement-link" download>
            View Certficate
          </a>
        </li>
        <li className="achievement-item">
          <h2>SQL(hackerrank Certification)</h2>
          <p>Hackerrank</p>
          <p className="achievement-date">May 2022</p>
          <a href="https://www.hackerrank.com/certificates/3be65ffceef7" className="achievement-link" download>
            View Certficate
          </a>
        </li>
        {/* Add more achievements as needed */}
      </ul>
    </div>
  );
}
