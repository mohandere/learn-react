
searchNews = (e) => {
  this.setState({
    query: e.target.value,
  });
};


componentDidUpdate(prevProps, prevState) {
  if (this.state.query && prevState.query !== this.state.query) {
    this.getNews(this.state.query);
  }
}

<form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
  <input
    name="search news"
    value={query}
    onChange={this.searchNews}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Search news"
  />
</form>