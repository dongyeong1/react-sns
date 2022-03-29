import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';



function signUp() {

    const [Password,onChangePassword]=useInput('')
    const [id,onChangeId]=useInput('')
    const [nick,onChangeNick]=useInput('')
    const [checkpassword,setCheckPassword]=useState('')
    const [term,setTerm]=useState(false)
    const [termError,setTermError]=useState(false)
    const [CheckPasswordError,setCheckPasswordError]=useState(false)

    const onChangeTerm=useCallback((e)=>{
        setTermError(false)
        setTerm(e.target.checked)
    },[])

    const onSubmit=useCallback((e)=>{
        if(Password!==checkpassword){
            return setCheckPasswordError(true)
        }
        if(!term){
            return setTermError(true)
        }

    },[Password, checkpassword, term])

   const onChangecheckpassword=useCallback((e)=>{
    setCheckPasswordError(e.target.value!==Password)
    setCheckPassword(e.target.value)
   },[Password])


  return <div>
      <AppLayout>
      <Form onFinish={onSubmit} style={{padding:10}}>
         
          <div>
            <label htmlFor="user-id">아이디</label>
            <br></br>
            <Input name='user-id' value={id} required onChange={onChangeId}></Input>
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br></br>
            <Input name='user-nick' value={nick} required onChange={onChangeNick}></Input>
          </div>
          <div>
            <label htmlFor="user-id">비밀번호</label>
            <br></br>
            <Input name='user-password' value={Password} required onChange={onChangePassword}></Input>
          </div>
          <div>
            <label htmlFor="user-checkpassword">비밀번호확인</label>
            <br></br>
            <Input name='user-checkpassword' value={checkpassword} required onChange={onChangecheckpassword}></Input>
          </div>
          {CheckPasswordError && <div style={{ color: 'red' }}>비밀번호가 맞지않습니다.</div>}

          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
            {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
      </Form>

      </AppLayout>

  </div>;
}

export default signUp;
