import React, {useEffect, useState} from "react";

import NewsItem from "../components/NewsItem";
import SelectedNews from "../components/SelectedNews";
import Loader from "../components/Loader";
import { fetchNews } from "../utils/apis";
import withSearch from "../components/hocs/withSearch";

function News({ query }) {
  const [news, setNews] = useState(null)
  const [selectedNews, setSelectedNews] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  
  useEffect(() => {
    async function getNews() {
      setIsFetching(true)
      const news = await fetchNews(query);
      setNews(news);
      setIsFetching(false)
    }
    getNews()
  }, [query])
  
  const handleNewsClick = (e, article) => {
    setSelectedNews(article)
  };
  
  if (!news) {
    return <Loader />;
  }
  return (
    <div className="flex mb-4">
      <main
        className="w-full max-h-screen overflow-auto"
      >
        {isFetching ? (
          <Loader />
        ) : (
          <ul>
            {news.data.articles.map((article) => (
              <NewsItem
                article={article}
                onClickHandler={handleNewsClick}
              />
            ))}
          </ul>
        )}
      </main>
      
      <aside className="w-1/3 pl-3">
        <SelectedNews selectedNews={selectedNews} />
      </aside>
    </div>
 );
}

export default withSearch(News);
