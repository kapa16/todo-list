import React from 'react';

const StatusFilter = () => {
  return (
    <div>
      <button className='btn btn-group btn-primary'>All</button>
      <button className='btn btn-group'>Active</button>
      <button className='btn btn-group'>Done</button>
    </div>
  )
};

export default StatusFilter;