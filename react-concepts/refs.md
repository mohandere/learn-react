// count number of times user clicked news menu before unmount app
import { trackMenuClicks } from "../utils/ga";


constructor(props) {
  super(props);
  this.countRef = React.createRef();
}


handleMenuClick = (e) => {
  this.countRef.current += 1;
  console.log("NavBar -> componentWillUnmount -> this.countRef.current", this.countRef.current)
};


componentWillUnmount() {
  trackMenuClicks(this.countRef.current);
}

  onClick={this.handleMenuClick}
  
  onClick={this.onClickHandler}
  
  
  componentWillUnmount() {
    console.log("NewsItem --> hoverCount:", this.hoverCount.current)
  }
  
  
  onMouseLeaveHandler = e => {
    this.hoverCount.current = this.hoverCount.current + 1;
  }
  
  
    this.hoverCount = React.createRef(0)
  