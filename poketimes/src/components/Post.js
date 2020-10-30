import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deletePost} from '../actions/deletePost';
class Post extends Component {
   handleClick =()=>{
       console.log(this.props," click")
       this.props.deletePost(this.props.post.id);
       this.props.history.push('/cards');
   }
    render() {
        console.log("rendering ",this.props);
        const post = this.props.post ? (
            <div className="post">
                <div className="content-title">
                    <h4 className="center">{this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <div className="center">
                        <button className="btn gray" onClick={this.handleClick}>
                        Delete Post</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="center"> Loading page...</div>
        );
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    console.log(" ownprops: ",ownProps)
    let id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id===id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost:(id) =>{ dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
