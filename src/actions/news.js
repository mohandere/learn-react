import {NEWS_FETCH_START, NEWS_FETCH_SUCCESS} from "./actionTypes";

export const requestNews = () => ({
  type: NEWS_FETCH_START
});

export const receiveNews = news => ({
  type: NEWS_FETCH_SUCCESS,
  payload: { news }
});


export function fetchNews(query= '') {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    
    dispatch(requestNews(query))
    
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json()
        // Do not use catch, because errors occured during rendering
        // should be handled by React Error Boundaries
        // https://reactjs.org/docs/error-boundaries.html
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        
        dispatch(receiveNews({
          news: json
        }))
      )
  }
}
