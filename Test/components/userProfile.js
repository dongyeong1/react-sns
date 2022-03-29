import React ,{useCallback}from 'react';
import {Avatar,Card,Button} from 'antd'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../reducers/user';


function userProfile() {
    const dispatch=useDispatch();

    const onLogoutForm=useCallback(()=>{
       
        dispatch(logoutAction())
    },[])

  return(
    <div>
    <Card
       actions={[
        <div key="twit">짹짹<br/></div>,
        <div key="following">팔로잉<br/>0</div>,

        <div key="follower">팔로워<br/>1</div>

    ]}  
 
    >
        <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="Dong"
        />

        
    </Card>
    <Button onClick={onLogoutForm}> 로그아웃</Button>
    
</div>
  ) 
}

export default userProfile;