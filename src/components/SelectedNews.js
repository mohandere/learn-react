import React from "react";

const SelectedNews = ({ selectedNews }) => {

  if (!selectedNews) {
    return <p>Please select news!</p>;
  }
  return (
    <article>
      <h2 className="">{selectedNews.title}</h2>
      <section>{selectedNews.description}</section>
    </article>
  );
};
export default SelectedNews;
