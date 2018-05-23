import React from 'react';

const AddTokenInfo = () => (
  <div className="row">
    <h2>Why we may require your access token?</h2>
    <p>
      Organizations are supported by our github leaderboard. However your
      organization may be set to prevent 3rd party access, like our github
      leaderboard from accessing it.
    </p>
    <h2>How to generate an access token?</h2>
    <ul className="list-group">
      <li className="transparent list-group-item">
        Go to your github user settings.
      </li>
      <li className="transparent list-group-item">
        Click on Developer settings in the bottom left.
      </li>
      <li className="transparent list-group-item">
        Click on 'personal access tokens' link
      </li>
      <li className="transparent list-group-item">
        Provide a description and generate a token with the necessary access
        permissions.
      </li>
      <li className="transparent list-group-item">
        Copy the 40 character alpha-numeric string and paste it here.
      </li>
    </ul>
  </div>
);

export default AddTokenInfo;
