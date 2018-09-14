import React from 'react';
import './Length.css';

const Length = ({ title, value, increment, decrement }) => {
  return (
    <section className="length">
      <header>{title} Length</header>

      <div className="length-actions">
        <span id="session-decrement" onClick={decrement}>
          <svg viewBox="0 0 24 24">
            <path d="M19,13H5V11H19V13Z" />
          </svg>
        </span>

        <span id="session-length">{value}</span>

        <span id="session-increment" onClick={increment}>
          <svg viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Length;
