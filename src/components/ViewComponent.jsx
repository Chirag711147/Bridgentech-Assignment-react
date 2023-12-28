import React from 'react';

const ViewComponent = ({ queue }) => {
  return (
    <div className="p-3 rounded"style={{ backgroundColor: '#8ACDD7' }} >
      <h2>View</h2>
      <ul className="list-group">
        {queue.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComponent;
