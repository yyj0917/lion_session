import React from 'react';
// import Toggle  from './Toggle';
import { useDeviceOrientation } from './useDeviceOrientation';

const OrientationInfo = () => {
  const { orientation, requestAccess, revokeAccess, error } = useDeviceOrientation();

  const onClick = () => {
    requestAccess();
  }
//   const onToggle = (toggleState) => {
//     const result = toggleState ? requestAccess() : revokeAccess();
//   };

  const orientationInfo = orientation && (
    <ul>
      <li>ɑ: <code>{orientation.alpha}</code></li>
      <li>β: <code>{orientation.beta}</code></li>
      <li>γ: <code>{orientation.gamma}</code></li>
    </ul>
  );

  const errorElement = error ? (
    <div className="error">{error.message}</div>
  ) : null;

  return (
    <>
      <button onClick={onClick}></button>
      {/* <Toggle onToggle={onToggle} /> */}
      {orientationInfo}
      {errorElement}
    </>
  );
};

export default OrientationInfo;
