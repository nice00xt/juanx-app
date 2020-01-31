import React, { useState, Fragment } from "react";
import PropTypes from 'prop-types';
import PlusIcon from "./images/plusicon.png";
import MinusIcon from "./images/minusicon.png";

const Counter = ({
  message,
  dateText,
  min,
  max,
  onChangeCount,
  initialValue
}) => {
  const [count, setCount] = useState(initialValue);
  const onSetCount = (limit, func) => {
    const newCount = limit ? count : func;
    setCount(newCount);
    onChangeCount(newCount); // callback
  };

  const renderButton = (source, cant, func) => {
    const limit = count === cant;
    return (
      <button
        style={{
          margin: 10,
          background: 'transparent',
          border: 'none' }}
        disabled={limit}
        onClick={() => onSetCount(limit, func)}
      >
        <img
          style={{ opacity: limit ? 0.1 : 1 }}
          src={source} alt='icon'
        />
      </button>
    );
  };

  return (
    <Fragment>
      <p>{message}</p>
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          {renderButton(MinusIcon, min, count - 1)}
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>{count}</p>
          {renderButton(PlusIcon, max, count + 1)}
        </div>
        <p>{dateText}</p>
      </div>
    </Fragment>
  );
};

Counter.propTypes = {
  message: PropTypes.string,
  onChangeCount: PropTypes.func,
  initialValue: PropTypes.number,
  // etc..
}

export default Counter;