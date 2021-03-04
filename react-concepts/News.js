import React from "react";

import NewsItem from "../components/NewsItem";
import SelectedNews from "../components/SelectedNews";
import Loader from "../components/Loader";
import { fetchNews } from "../utils/apis";
import withSearch from "../components/hocs/withSearch";

class News extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      selectedNews: null,
      isFetching: false,
    };
    //this.handleNewsClick = this.handleNewsClick.bind(this)
  }
  
  componentDidMount() {
    this.getNews();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.getNews(this.props.query);
    }
  }
  
  async getNews(query = '') {
    this.setState({
      isFetching: true,
    });
    const news = await fetchNews(query);
    this.setState({
      news,
      isFetching: false,
    });
  }
  
  handleNewsClick = (e, article) => {
    this.setState({
      selectedNews: article,
    });
  };
  
  render() {
    const { news, selectedNews, isFetching } = this.state;
    if (!news) {
      return <Loader />;
    }
    // Extract NewsList.js
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
                  onClickHandler={this.handleNewsClick}
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
}

export default withSearch(News);