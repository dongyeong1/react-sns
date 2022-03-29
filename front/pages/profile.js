import React, { useEffect } from 'react'
import AppLayout from '../component/AppLayout'
import NicknameEditForm from '../component/NicknameEditForm'
import FollowList from '../component/FollowList'
import { useSelector } from 'react-redux'
import Router from 'next/router '
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import axios from 'axios'

import wrapper from '../store/configureStore'
import { END } from 'redux-saga';

function profile() {

  const {me}=useSelector((state)=>state.user)


  useEffect(()=>{
    if(!(me&&me.id)){
      Router.push('/')
    }
  })
  if(!me){
    return null
  }

    
    return (
      <>
      <AppLayout>
          <NicknameEditForm></NicknameEditForm>
          <FollowList header="팔로잉목록" data={me.Followings}></FollowList>
          <FollowList header="팔로위목록" data={me.Followers}></FollowList>
      </AppLayout>
      </>
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

context.store.dispatch(END)
await context.store.sagaTask.toPromise()
})

export default profile
