import React,{useCallback,useEffect,useRef,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Form,Input,Button} from 'antd'
import {addPost} from '../reducers/post' 







function PostForm() {

    const {addPostDone}=useSelector((state)=>state.post)

    const[ text,setText]=useState('')


    useEffect(()=>{
        if(addPostDone){
            setText('')
        }

    },[addPostDone])

    
        const imageInput = useRef();

        const dispatch=useDispatch();
        const {imagePaths}=useSelector((state)=>state.post)

      
        const onClickImageUpload = useCallback(() => {
          imageInput.current.click();
        }, [imageInput.current]);

        const onSubmit=useCallback(()=>{
                dispatch(addPost(
                        text
                ))
        },[text])
      
  return <div>
      <Form onFinish={onSubmit}>
          <Input.TextArea placeholder="어떤일?" maxLength={140}></Input.TextArea>
          <div>
              <input type="file"  hidden ref={imageInput} />
              <Button onClick={onClickImageUpload}>이미지업로드</Button>
              <Button type="primary" style={{float:'right'}} htmlType='submit'>등록</Button>

          </div>
          <div>
        {dummy.imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
      
      
      </Form>

  </div>;
}

export default PostForm;
