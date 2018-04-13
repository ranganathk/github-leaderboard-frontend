import React from 'react';
import AddTokenInfo from './AddTokenInfo';
import AddTokenForm from './AddTokenForm';

const AddToken = () => (
  <div className="row">
    <div className="col-md-6">
      <AddTokenInfo />
    </div>
    <div className="col-md-6">
      <AddTokenForm />
    </div>
  </div>
);

export default AddToken;
