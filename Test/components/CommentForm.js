import React,{useCallback, useEffect} from 'react';
import {Button,Form,Input} from 'antd'
import PropTypes from 'prop-types'
import {ADD_COMMENT_REQUEST} from '../reducers/post'
import {useDispatch,useSelector} from 'react-redux';

function CommentForm({post}) {
    const dispatch =useDispatch();
    const {addCommentDone}=useSelector((state)=>state.post)

    const id=useSelector((state)=>state.user.me?.id)

    const [commentText,setCommentText]=useState('');

    const onSubmitComment=useCallback(()=>{
        dispatch({
            type:ADD_COMMENT_REQUEST,
            data:{
                content:commentText,
                postId:post.id,
                userId:id,
                
            }
        })

    },[commentText,id])

    useEffect(()=>{
        if(addCommentDone){
            setCommentText('')
        }
    },[addCommentDone])
    const onChangeCommentText=useCallback((e)=>{
        setCommentText(e.target.value);
    },[])
  return <div>
      <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
      </Form.Item>

      </Form>
      
  </div>;
}
CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
  };

export default CommentForm;
