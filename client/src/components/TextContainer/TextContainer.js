import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Sample Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Based on React, Node.js, Express and Socket.IO</h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      <p>(But don't judge this application too early as this application is on its early stages)</p>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;