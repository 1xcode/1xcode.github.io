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
              <a className="faded" href={props.userlink}>
                {" "}
                {props.username}{" "}
              </a>
            </small>
          </span>
          <br />
          <br />
          <div className="pp-footer">
            {props.isOrg && (
              <div className="faded">
                <i className="fa fa-building-o"></i>{" "}
                <small>
                  <a className="faded" href={props.orgLink}>
                    {" "}
                    {props.orgName}{" "}
                  </a>
                </small>
              </div>
            )}
            {true && (
              <div className="faded">
                <i className="fa fa-map-marker"></i>{" "}
                <small className="faded">{props.Loc}</small>
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
