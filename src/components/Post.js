import React from 'react'

class Post extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            post: props.post.data
        }
    }

    render(){
        return (
            <div style={{borderBottom: "1px solid grey", padding:"1em"}}>
                <a style={{color:"grey", textDecoration:'none'}} href={"https://www.reddit.com/"+this.state.post.permalink}>
                    <span>Posted By u/{this.state.post.author}</span>
                    <h3>{this.state.post.title}</h3>
                    <img width="100%" src={this.state.post.url} alt={this.state.post.title} />
                    <p>{this.state.post.num_comments} Comments</p>
                </a>
            </div>
        )
    }
}

export default Post