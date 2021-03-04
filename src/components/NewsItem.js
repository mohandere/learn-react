import React from "react";
import $ from "jquery";
import 'easyzoom'
import ThemeContext from '../libs/theme-context'
import {Themes} from '../styles/themes'

class NewsItem extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.elementToZoom = React.createRef(null)
  }
  
  componentDidMount() {
    $(this.elementToZoom.current).easyZoom();
  }
  
  render() {
    const {article, onClickHandler} = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <li className="cursor-pointer flex mb-4 flex-row items-start justify-start" style={Themes[theme]}
              key={article.url} onClick={(e) => onClickHandler(e, article)}>
            <div className="easyzoom pr-2" ref={this.elementToZoom}>
              <a href={article.urlToImage}>
                <img src={article.urlToImage} alt={article.title} style={{
                  maxWidth: 100
                }}/>
              </a>
            </div>
            <h4 className="text-left">{article.title}</h4>
          </li>
        )}
      </ThemeContext.Consumer>
    )
  }
  
}

export default NewsItem