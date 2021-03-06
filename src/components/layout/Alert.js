import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className={`aler alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    )
  );
};
export default Alert;
