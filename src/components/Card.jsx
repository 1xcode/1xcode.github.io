import React from "react";

function Card(props) {
  return (
    <div className="card-div">
      <div className="card--component">
        <div className="card-header">
          <a href={props.url}>
            <img
              height="32px"
              className="card-header-img"
              src={props.img}
              alt="repo-logo"
            />
          </a>
        </div>
        <div className="card-body" data-align="center">
          <h3 className="card-body-headline">
            <a className="title-link" href={props.url}>
              {props.title}
            </a>
          </h3>
          <p className="card-body-copy"> {props.description} </p>
        </div>
        <div className="card-footer">
          <div className="card-footer-content" data-align="right">
            <a className="card-footer-link" href={props.website}>
              <i className="card-footer-icon fa fa-fw fa-globe"></i> Website
            </a>
          </div>
          |
          <div className="card-footer-content" data-align="left">
            <a className="card-footer-link" href={props.url}>
              <i className="card-footer-icon fa fa-github"></i> Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
