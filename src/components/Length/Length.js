import React from 'react';
import PropTypes from 'prop-types';
import './Length.css';

const Length = ({ title, value, id, increment, decrement }) => {
  return (
    <section className="length">
      <header id={`${id}-label`}>{`${title} Length`}</header>

      <div className="length-actions">
        <button id={`${id}-decrement`} onClick={decrement}>
          <svg viewBox="0 0 24 24">
            <path d="M19,13H5V11H19V13Z" />
          </svg>
        </button>

        <span id={`${id}-length`}>{value}</span>

        <button id={`${id}-increment`} onClick={increment}>
          <svg viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

Length.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  id: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default Length;
