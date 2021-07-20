import React from "react";
import Profile from "./Profile";
import userData from "./userData";

const Contributor = () => {
  const defaultImg =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
  const listProfile = userData.map((user, id) => (
    <Profile
      key={id}
      name={user.name}
      img={user.img === null ? defaultImg : user.img}
      username={user.username}
      userlink={user.userlink}
      isOrg={user.isOrg}
      orgName={user.orgName}
      orgLink={user.orgLink}
      isLoc={user.isLoc}
      Loc={user.Loc}
    />
  ));
  return (
    <div className="contributor-div">
      <div>
        <h2>Main Contributors</h2>
        <div className="con-container">{listProfile}</div>
      </div>
      <div>
        <h2>Want to contribute?</h2>
        <p>
          We know groups can accomplish more than individuals. That’s why our
          mission is to be the catalyst in communities of contributors, and
          partners creating better technology the open source way.
          <br />
          <br />
          <a className="blue-link" href="https://github.com/1xcode">
            Let's Contribute{" "}
          </a>
          <i className=" blue-link fa fa-arrow-right "></i>
        </p>
      </div>
    </div>
  );
};

export default Contributor;
