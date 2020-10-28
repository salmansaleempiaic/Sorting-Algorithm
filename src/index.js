import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const ARTICLES = [
  {
    title: "Article 11",
    upvotes: 1,
    date: "2020-01-01",
  },
  {
    title: "Article 22",
    upvotes: 1000,
    date: "2020-01-02",
  },
  {
    title: "Article 33",
    upvotes: 2,
    date: "2019-01-03",
  },
  {
    title: "Article 44",
    upvotes: 2000,
    date: "2019-01-04",
  },
  {
    title: "Article 55",
    upvotes: 5,
    date: "2018-01-05",
  },
];
ReactDOM.render(<App articles={ARTICLES} />, document.getElementById('root'));