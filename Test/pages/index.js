import React from 'react';
import { useSelector } from 'react-redux'

import AppLayout from '../components/AppLayout';
import PostForm from'../components/PostForm';
import PostCard from '../components/PostCard';

// const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [{
//       id: 1,
//       User: {
//         id: 1,
//         nickname: '제로초',
//       },
//       content: '첫 번째 게시글',
//       Images: [{
//         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//       }, {
//         src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//       }, {
//         src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//       }]
//     }],
//   };


function index() {

const {isLoggedIn}=useSelector((state)=>state.user);
const {mainPosts}=useSelector((state)=>state.post);
  return <div>
       <AppLayout>
        {isLoggedIn&&<PostForm></PostForm>}
        {mainPosts.map((c)=>{
            return(
                <PostCard key={c.id} post={c} ></PostCard>
            )
        })}
        </AppLayout>
  </div>;
}

export default index;
