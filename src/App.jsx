import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "./actions";
// import { Routes, Route } from "react-router-dom";
// import * as Pages from "./pages";
// import { Header } from "./layout";
import "./App.css";

const App = () => {
  // const cohortName = useSelector(state=> state.name)
  // const classRoomLocation = useSelector(state=> state.location)

  const { name: cohortName, location: classRoomLocation } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateLocation('Zoom again'));
  };

  return (
    <>
      We are the <strong>{cohortName}</strong> cohort Wa learning from{" "}
      <strong>{classRoomLocation}</strong>
      <button aria-label="change location" onClick={handleClick}>
        Change Location
      </button>
    </>
  );
};

export default App;
