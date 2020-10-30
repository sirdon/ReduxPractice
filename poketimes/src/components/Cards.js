import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
class Cards extends Component {
  
    render() {
        const {posts} = this.props;
        
        const postList = posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <Link to={'/'+post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
           
                <div className="container">
                <h1 className="center">yet not loaded</h1>
                </div>
            
        );
        return (
            <div>
                {postList}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Cards);


// const { createStore } = Redux;
// const initState = {
//   todos:[],
//   posts;[]
// }
// function myreducer(state = initState, action){
//   if(action.type == 'ADD_TODO'){
//     return {
//       ...state,
//       todos:[...state.todos,action.todo]
//     }
//   }
// }
// const store = createStore(myreducer);
// store.subscribe(()=>{
//   console.log('state updated');
//   console.log(store.getState());
// })
// const todoAction = [ type: 'ADD_TODO', todo: 'buy milk'];