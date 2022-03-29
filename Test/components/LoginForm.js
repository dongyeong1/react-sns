import React,{useCallback} from 'react';
import {Form,Input,Button} from 'antd';
import Link from 'next/link'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const LoginForm=() =>{
    const dispatch=useDispatch();

    const [id,onChnageId]=useInput('')
    const [password,onChangePassword]=useInput('')

    const onSubmitForm=useCallback(()=>{
        console.log(id,password)
        dispatch(loginAction({
            id,password
        }))
    },[id,password])
  return (
<Form onFinish={onSubmitForm} >
    <div>
        <label htmlFor='user-id'>아이디 </label>
        <br/>  
         <Input name="user-id" value={id} onChange={onChnageId} required></Input>
    </div>
    <div>
        <label htmlFor='user-id'>비밀번호 </label>
        <br/>  
         <Input type="password" name="user-id" value={password} onChange={onChangePassword} required></Input>
    </div>
    <div>
        <Button type="primary" htmlType='submit'>로그인</Button>
        <Link href="/signUp"><a><Button>회원가입</Button></a></Link>
    </div>

</Form>
  )
 }

export default LoginForm;
