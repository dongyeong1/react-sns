import React from 'react';
import {useRouter} from 'next/router'
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';

import wrapper from '../../store/configureStore'
import { END } from 'redux-saga';
import axios from 'axios'
import AppLayout from '../../component/AppLayout';
import PostCard from '../../component/PostCard'
import { useSelector } from 'react-redux';

function Post() {
    const router=useRouter()
    const {id}=router.query;
    const {singlePost}=useSelector((state)=>state.post)
    
    return(

  <AppLayout>
       {id}번 게시물
      <PostCard post={singlePost}></PostCard>
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
      type:LOAD_POST_REQUEST,
      data: context.params.id,
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
})

export default Post;
