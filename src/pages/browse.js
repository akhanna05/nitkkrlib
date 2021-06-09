import React, { useState,useEffect } from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const [lectures, setLectures] = useState([])
  const [practicals, setPracticals] = useState([])
  useEffect(() => {
    
    fetch('https://e-classes-c4a7a-default-rtdb.firebaseio.com/practicals.json')
  .then((res) => res.json())
  .then((data) => {
    const practicals = Object.values(data)[0].lectures;
    setPracticals(practicals)
  });
  fetch('https://e-classes-c4a7a-default-rtdb.firebaseio.com/lectures.json')
  .then((res) => res.json())
  .then((data) => {
    const lectures = Object.values(data)[0];
   setLectures(lectures)
  });
  }, [])
  
  
  const slides = selectionFilter({ lectures, practicals });

  return <BrowseContainer slides={slides} />;
}
