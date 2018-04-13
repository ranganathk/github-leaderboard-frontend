import React from 'react';

const styles = {
  avatar: {
    width: '32px',
    height: '32px'
  }
};

const LeaderBoardCell = props => (
  <tr className="even gradeC" key={props.login}>
    <td>
      <img src={props.avatar} style={styles.avatar} alt="" />
    </td>
    <td>{props.name}</td>
    <td>
      {props.value || '-'} {props.type}
    </td>
  </tr>
);

export default LeaderBoardCell;
