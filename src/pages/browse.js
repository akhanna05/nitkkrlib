import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { lectures } = useContent("lectures");
  // const { practicals } = useContent("practicals");
console.log(lectures)
  const slides = selectionFilter({ lectures, practicals: lectures });

  return <BrowseContainer slides={slides} />;
}
