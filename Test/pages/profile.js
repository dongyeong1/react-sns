import React from 'react';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

function profile() {
    const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
    const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  return <div>
      
      <AppLayout>
      
        <FollowList
        header="팔로잉목록"
        data={followingList}
        
        ></FollowList>
          <FollowList
        header="팔로워목록"
        data={followerList}
        
        ></FollowList>
      </AppLayout>
  </div>;
}

export default profile;
