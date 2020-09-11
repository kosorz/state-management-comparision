import React from 'react';
import './Control.css';
import randomObject from '../../util/randomObject';

const Control = React.forwardRef(
  ({ setRequestedUpdates, requestedUpdates }, ref) => {
    return (
      <div className="Control">
        <div className="Row">
          <div className="Input">
            <label>Miliseconds or actions count</label>
            <input
              value={requestedUpdates}
              type="number"
              className="Amount"
              onChange={(e) => setRequestedUpdates(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="Row">
          <button
            onClick={function () {
              ref.current.addingBlockingRefs.map(function (ref) {
                return ref.current.click();
              });
            }}
          >
            Start Blocking Adding
          </button>
        </div>

        <div className="Row">
          <div className="Document">
            <textarea disabled={true} value={JSON.stringify(randomObject())} />
            <button
              onClick={function () {
                ref.current.objectSettingBlockingRefs.map(function (ref) {
                  return ref.current.click();
                });
              }}
            >
              Start Blocking Updating Document
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Control;
