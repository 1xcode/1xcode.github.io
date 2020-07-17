import React from "react";

function Projects(props) {
  // TODO: fix Website link for repo which has gh-pages
  let prolist = props.data.map((repo, i) => (
    <tr className={i % 2 === 0 ? `` : `selected`} key={repo.id}>
      <td>
        <b>
          <a href={repo.html_url}>{repo.name}</a>
        </b>
      </td>
      <td className="hidden">
        <i>
          <a href={repo.html_url}> {repo.html_url} </a>
        </i>
      </td>
      <td>
        <code>
          <b> {repo.language !== null ? repo.language : `Unknown`} </b>
        </code>
      </td>
    </tr>
  ));
  return (
    <div className="project-div">
      <h2>All Projects</h2>
      <br />
      <div>
        <table className="project-list">
          <thead>
            <tr className="selected">
              <th>Project Name</th>
              <th className="hidden">Project Website</th>
              <th>Technology</th>
            </tr>
          </thead>
          <tbody>
            <br />
            {prolist}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
