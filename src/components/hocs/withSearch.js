import React from "react";

const withSearch = (WrappedComponent) => {
  class Search extends React.Component {
    state = {
      query: ''
    }

  searchNews = e => {
    this.setState({
      query: e.target.value
    })
  }


    render() {
      const { query } = this.state
      return (
        <section>
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <input
              name="search-news"
              value={query}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search news"
              onChange={this.searchNews}
            />
          </form>
          <WrappedComponent {...this.state} />
        </section>
      );
    }
  }
  return Search;
};
export default withSearch;
