import React from 'react';
import AddTokenInfo from './AddTokenInfo';
import AddTokenForm from './AddTokenForm';

const AddToken = () => (
  <div className="row token-page">
    <div className="col-md-6">
      <AddTokenInfo />
    </div>
    <div className="col-md-6">
      <AddTokenForm />
    </div>
  </div>
);

export default AddToken;
