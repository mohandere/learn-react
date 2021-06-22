
function Newsv2() {
  const [news, setNews] = React.useState(null)
  const [selectedNews, setSelectedNews] = React.useState(null)
  const [isFetching, setIsFetching] = React.useState(false)


  React.useEffect(() => {
   async function fetchTopHeadlines(query) {
     let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
     if(query) {
       url += `&q=${query}`
     }
     const news = await axios(url);
     setNews(news);
   }
   fetchTopHeadlines()
  }, [])

  return (
   <>
   {isFetching ? (
     <div>Loading...</div>
   ) : (
     <section>
     <ul>
       {news.data.articles.map(article => (
         <ListItem article={article} onClickHandler={this.handleNewsClick}/>
       ))}
     </ul>
     <hr/>
     <SelectedNews selectedNews={selectedNews} />
     </section>
   )}
 </>
  )
}



function useNewsApi() {
  const [news, setNews] = React.useState(null)
  const [isFetching, setIsFetching] = React.useState(false)
  const [query, setQuery] = React.useState('')
  React.useEffect(() => {
    async function fetchNews(query) {
      let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
      if(query) {
        url += `&q=${query}`
      }
      const news = await axios(url);
      setNews(news);
    }
    fetchNews()
   }, [query]) // Do run this effect only when `query` changed
  return {
    news,
    isFetching,
    setQuery
  }
}