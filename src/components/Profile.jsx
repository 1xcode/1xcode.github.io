import React from "react";

function Profile(props) {
  return (
    <div className="profile-card">
      <div className="profile-container">
        <div className="pp">
          <img height="50px" width="50px" src={props.img} alt="profile" />
        </div>
        <div className="pp-about">
          <span>
            <b> {props.name} </b>
          </span>
          <span> </span>
          <span>
            <small>
              <a href={props.userlink}> {props.username} </a>
            </small>
          </span>
          <br />
          <br />
          <div className="pp-footer">
            {props.isOrg && (
              <div>
                <i className="fa fa-building-o"></i>{" "}
                <a href={props.orgLink}> {props.orgName} </a>
              </div>
            )}
            {true && (
              <div>
                <i className="fa fa-map-marker"></i>{" "}
                <a href="https://github.com"> {props.Loc} </a>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
