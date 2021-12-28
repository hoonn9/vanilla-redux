import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../store";

function ToDo({ id, text, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(dispatch, ownProps);
  return {
    onBtnClick: () => dispatch(actions.deleteToDo(parseInt(ownProps.id, 10))),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
