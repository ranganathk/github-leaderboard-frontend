import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    margin: 20,
    padding: 5,
    display: 'flex',
    flex: 1,
    flexGrow: 0,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 150
  },
  link: {
    flexDirection: 'column'
  },
  img: {
    height: 80,
    width: 80
  },
  title: {
    fontWeight: '600',
    fontSize: '18px',
    paddingBottom: 10,
    paddingTop: 3
  },
  label: {
    fontWeight: '600'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
};

export default function User({ profile, stats }) {
  if (!Object.keys(stats).length) {
    return null;
  }
  console.log(stats);
  return (
    <div style={styles.container}>
      <a href={profile.html_url}>
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="img-circle"
          style={styles.img}
        />
      </a>
      <a href={profile.html_url}>
        <span style={styles.title}>{profile.login}</span>
      </a>
      <span>
        <span style={styles.label}> Commits: </span>
        {stats.commits}
      </span>
      <span style={styles.positive}>
        <span style={styles.label}> Additions: </span>
        {stats.additions}
      </span>
      <span style={styles.negative}>
        <span style={styles.label}> Deletions: </span>
        {stats.deletions}
      </span>
    </div>
  );
}

User.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  }).isRequired,
  stats: PropTypes.shape({
    commits: PropTypes.number,
    additions: PropTypes.number,
    deletions: PropTypes.number
  }).isRequired
};

// profile: {
//   login: "sundarcodes",
//   id: 10928793,
//   avatar_url: "https://avatars0.githubusercontent.com/u/10928793?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/sundarcodes",
//   html_url: "https://github.com/sundarcodes",
//   followers_url: "https://api.github.com/users/sundarcodes/followers",
//   following_url: "https://api.github.com/users/sundarcodes/following{/other_user}",
//   gists_url: "https://api.github.com/users/sundarcodes/gists{/gist_id}",
//   starred_url: "https://api.github.com/users/sundarcodes/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/sundarcodes/subscriptions",
//   organizations_url: "https://api.github.com/users/sundarcodes/orgs",
//   repos_url: "https://api.github.com/users/sundarcodes/repos",
//   events_url: "https://api.github.com/users/sundarcodes/events{/privacy}",
//   received_events_url: "https://api.github.com/users/sundarcodes/received_events",
//   type: "User",
//   site_admin: false
//   },
