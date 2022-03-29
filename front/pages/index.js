import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../component/AppLayout'
import PostForm from '../component/PostForm'
import PostCard from '../component/PostCard'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from '../reducers/user';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

import wrapper from '../store/configureStore'
import { END } from 'redux-saga';
import axios from 'axios'

function index() {
    const {me} =useSelector((state)=>state.user);
    const {mainPosts,hasMorePosts,loadPostsLoading}=useSelector((state)=>state.post)
    const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch({
    //         type:LOAD_POSTS_REQUEST
    //     })
    // },[])

    // useEffect(() => {
    //     dispatch({
    //       type: LOAD_USER_REQUEST,
    //     });
       
    //   }, []);
    

    useEffect(()=>{
        function onScroll(){
            if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300){
                if(hasMorePosts && !loadPostsLoading){
                    dispatch({
                        type:LOAD_POSTS_REQUEST
                    })
                   }
            }
        }
        window.addEventListener('scroll',onScroll)
        return()=>{
        window.removeEventListener('scroll',onScroll)    
        }
        },[hasMorePosts,loadPostsLoading])
  
    return (
        <AppLayout>
            {me  &&<PostForm />}
           {mainPosts.map((post)=> <PostCard post={post} key={post.id}/> )}
        </AppLayout>
        
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
context.store.dispatch({
    type:LOAD_MY_INFO_REQUEST
  });
  context.store.dispatch({
      type:LOAD_POSTS_REQUEST
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
})
export default index
