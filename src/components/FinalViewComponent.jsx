import React, { useEffect, useState } from 'react';

const FinalViewComponent = ({ queue, pollFromQueue }) => {
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      pollFromQueue();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [pollFromQueue]);

  useEffect(() => {
    //when queue changes display the items
    setDisplayedItems([...queue]);
  }, [queue]);

  return (
    <div className="p-3 rounded" style={{ backgroundColor: '#F9F9E0' }}>
      <h2>Final View</h2>
      <div className="list-group">
        {queue.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};
export default FinalViewComponent;
