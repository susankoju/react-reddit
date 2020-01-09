import React from 'react';

import './App.css';

import Reddit from './components/Reddit'

function withHeader(Component){
  return function(props){
    return (
      <div>
        <header style={{position: "fixed", background:"white", width: "100%", padding:"0.5em"}}>
          <div style={{width:"80%", margin: "0px auto", height: "2.25em"}}>
            <a style={{position: "relative"}} href="/"  style={{textDecoration:"none"}}>
              <img height="100%" src="./images/2hEsLbAZ-eaoVJ-zZOqEz8DWCtnDgMR88TmJ-mxWoTc.png" alt="Reddit"/> 
              <span style={{color: "rgb(254,69,0)", position: "absolute", padding: "0.5em"}}>Reddit Image Board</span>
            </a>
            <div style={{margin:"0.5em", float:"right", color: "grey"}}>
              
              
              <label style={{margin: "0px 5px 0px 25px"}}>r/</label>
              <input  style={{ width: "25em", color: "blue" ,padding: "4px", background:"white", cursor: "pointer"}}  type="text" name="subreddit"  onKeyUp={(e)=>onChangeHandler(e,props.setSubreddit)} placeholder="Search subreddit" />

              <label style={{margin: "0px 5px 0px 25px"}}>Popular subreddits: </label>
              <select style={{ width: "10em", color: "blue" ,padding: "4px", background:"white", cursor: "pointer"}} onChangeCapture={(e)=>onChangeHandler(e,props.setSubreddit)}>
                <option>wallpapers</option>
                <option>wallpaper</option>
                <option>memes</option>
                <option>pics</option>
                <option>comics</option>
              </select>
              <label style={{margin: "0px 5px 0px 25px"}}>Post Count: </label>
              <input style={{width: "5em"}} onChange={(e)=>onChangeHandler(e,props.setPostCount)} type="number" value={props.postCount}/>
            </div>
          </div>
        </header>
        <Component {...props} />
      </div>
    )
  }
}

const onChangeHandler =(e, setFxn)=>{

  if(!e.keyCode || e.keyCode === 13)
    setFxn(e.target.value)
}

const EnhancedReddit = withHeader(Reddit);

class App extends React.Component {

  constructor(){
    super()

    this.state= {
      subreddit: 'wallpapers',
      postCount: 10
    }
  }

  render(){
    
    return (
      <div>
        <EnhancedReddit subreddit={this.state.subreddit} setSubreddit={this.setSubreddit} postCount={this.state.postCount} setPostCount={this.setPostCount}/>
      </div>
    );
  }

  setSubreddit = (subreddit) => {
    this.setState({
      subreddit: subreddit
    });
  }

  setPostCount = (count) => {
    this.setState({
      postCount: count
    });
  }

}

export default App;
