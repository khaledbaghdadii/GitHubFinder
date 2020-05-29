import React from "react";
import PropTypes from "prop-types";

export const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3></h3>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
