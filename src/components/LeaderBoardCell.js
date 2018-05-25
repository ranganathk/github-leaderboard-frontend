import React from 'react';

const TEXT_COLOR = '#FFFFFF';
const styles = {
  avatar: {
    width: '35px',
    height: '35px',
    position: 'relative',
    zIndex: '3'
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
    top: -14,
    left: 8,
    fontSize: 20,
    color: 'goldenrod',
    zIndex: '2'
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
    <td style={{ ...styles.userCell, paddingTop: props.rank === 0 ? 20 : 15 }}>
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
        {props.value >= 0 ? props.value : '-'} {props.type}
      </span>
    </td>
  </tr>
);

export default LeaderBoardCell;
