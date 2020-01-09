import React from 'react'

import Post from './Post'

class Reddit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            subreddit: props.subreddit,
            postCount: props.postCount
        }
    }

    componentDidUpdate(){
        if(this.props.subreddit !== this.state.subreddit){
            this.setState({
                subreddit: this.props.subreddit
            });

            fetch("https://www.reddit.com/r/"+this.props.subreddit+".json?q=oop&limit="+this.state.postCount).then(res => res.json()).then(jsonData => {
                this.setState({
                    data: jsonData.data? jsonData.data.children : [],
                })
            })
        }
        if(this.props.postCount !== this.state.postCount){
            this.setState({
                postCount: this.props.postCount
            });

            fetch("https://www.reddit.com/r/"+this.props.subreddit+".json?q=oop&limit="+this.props.postCount).then(res => res.json()).then(jsonData => {
                this.setState({
                    data: jsonData.data? jsonData.data.children : [],
                })
            })
        }
    }
    componentDidMount(){
        
        fetch("https://www.reddit.com/r/"+this.state.subreddit+".json?q=oop&limit="+this.state.postCount).then(res => res.json()).then(jsonData => {
            this.setState({
                data: jsonData.data.children,
            })
        })
    }
    
    render(){

        return (
            <div style={{background: "rgb(218,224,230)", padding:"2em"}}>
                <ul style={{listStyleType: 'none', maxWidth:"960px", margin:"2.5em auto", background:"white", padding:"2.5em"}}>
                    <h3 style={{textAlign: "center", color: "grey", margin:"1.5em auto"}}>r/{this.state.subreddit}</h3>

                    {this.state.data.map( post => {
                        return <li key={post.data.id}><Post post={post} /></li>
                    })}
                </ul>

            </div>
        ) 
    }
}


export default Reddit