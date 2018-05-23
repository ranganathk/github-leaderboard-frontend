import React from 'react';

const TEXT_COLOR = '#FFFFFF';
const styles = {
  avatar: {
    width: '35px',
    height: '35px'
  },
  name: {
    fontSize: '22px',
    paddingLeft: '5px',
    paddingRight: '3px',
    color: TEXT_COLOR,
    maxWidth: '160px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  userCell: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '15px'
  },
  countCell: {
    verticalAlign: 'middle',
    padding: '15px'
  },
  count: {
    color: TEXT_COLOR
  },
  crown: {
    position: 'absolute',
    top: -25,
    left: 4,
    fontSize: 25,
    color: 'goldenrod'
  }
};

const medalColor = rank => {
  if (rank === 0) {
    return 'gold';
  }
  if (rank === 1) {
    return 'silver';
  }
  return '#CD7F32';
};

const LeaderBoardCell = props => (
  <tr className="even gradeC" key={props.login}>
    <td style={styles.userCell}>
      <div style={{ position: 'relative' }}>
        <img className="img-circle" src={props.avatar} style={styles.avatar} />
        {props.rank === 0 && (
          <i class="fas fa-chess-queen" style={styles.crown} />
        )}
      </div>
      <span style={styles.name}>{props.name}</span>
      {props.rank < 3 && (
        <i
          class="fas fa-trophy"
          style={{ color: medalColor(props.rank), fontSize: 26 }}
        />
      )}
    </td>
    <td style={styles.countCell}>
      <span style={styles.count}>
        {props.value || Math.floor(Math.random() * 50)} {props.type}
      </span>
    </td>
  </tr>
);

export default LeaderBoardCell;
