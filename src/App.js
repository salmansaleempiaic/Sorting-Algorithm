import React from 'react';
import Articles from './Articles';
const App = ({ articles }) => {
  const [sortedby, setSortedBy] = React.useState(0);
  let refinedArticles = () => {
    if (sortedby === 0) {
      let r = articles.sort((a, b) => (b.upvotes > a.upvotes) ? 1 : ((a.upvotes > b.upvotes) ? -1 : 0));
      return r;
    } else {
      let r = articles.sort((a, b) => (new Date(b.date) > new Date(a.date)) ? 1 : ((new Date(a.date) > new Date(b.date)) ? -1 : 0));
      return r;
    }
  }
  articles = refinedArticles();
  return (
    <div>
      <div>
        <label>Sort By</label>
        <button onClick={() => setSortedBy(0)}>Most Upvoted</button>
        <button onClick={() => setSortedBy(1)}>Most Recent</button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}
export default App;
