import React from "react";

function Projects(props) {
  // TODO: fix Website link for repo which has gh-pages
  let prolist = props.data.map((repo, i) => (
    <tr className={i % 2 === 0 ? `` : `selected`} key={repo.id}>
      <td>
        <a href={repo.html_url}>{repo.name}</a>
      </td>
      <td>
        <a href={repo.html_url}> {repo.html_url} </a>
      </td>
      <td> {repo.language !== null ? repo.language : `Unknown`} </td>
    </tr>
  ));
  return (
    <div className="project-div">
      <h2>All Projects</h2>
      <br />
      <table className="project-list">
        <thead>
          <tr className="selected">
            <th>Project Name</th>
            <th>Project Website</th>
            <th>Technology</th>
          </tr>
        </thead>
        <tbody>
          <br />
          {prolist}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
