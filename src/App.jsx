import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import ViewComponent from "./components/ViewComponent";
import FinalViewComponent from "./components/FinalViewComponent";

const App = () => {
  const [queue, setQueue] = useState([]);
  const [finalViewItems, setFinalViewItems] = useState([]);
  const [waitForEmptyQueue, setWaitForEmptyQueue] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const addToQueue = (text) => {
    setQueue([...queue, text]);
  };

  const pollFromQueue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      const polledItem = updatedQueue.shift();
      setQueue(updatedQueue);

      setFinalViewItems((prevItems) => [...prevItems, polledItem]);//item polled to final view
    }
  };

  const handleEndButtonClick = () => {
    if (queue.length === 0) {
      alert("Success!");//if empty
    } else {
      setWaitForEmptyQueue(true);//wait till queue is empty
    }
  };

  const handleResetButtonClick = () => {
    setQueue([]);
    setFinalViewItems([]);
    setWaitForEmptyQueue(false); //reset all components
  };

  useEffect(() => {
    if (waitForEmptyQueue && queue.length === 0) {//checks only if waitForEmptyQueue is triggered
      alert("Success!");
      setWaitForEmptyQueue(false); 
    }
  }, [queue, waitForEmptyQueue]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div >
      <Header />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <InputComponent addToQueue={addToQueue} />
              <ViewComponent queue={queue} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 d-flex flex-column h-100">
              <div className="flex-grow-1">
                <FinalViewComponent queue={finalViewItems} pollFromQueue={pollFromQueue} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom mb-4">
        <div className="container mt-3">
          <div className="row justify-content-end">
            <div className="col-md-6 d-flex justify-content-end">
              <button onClick={handleEndButtonClick} className="btn btn-danger" style={{ width: '45%' }}>
                End
              </button>
              <button onClick={handleResetButtonClick} className="btn btn-secondary ms-2" style={{ width: '45%' }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
