import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

import CommentForm from './CommentForm';

import PostImages from './PostImages';


const dummyComments = [{
    User: {
      nickname: 'nero',
    },
    content: '우와 개정판이 나왔군요~',
  }, {
    User: {
      nickname: 'hero',
    },
    content: '얼른 사고싶어요~',
  }];
const PostCard=({post})=>{

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [liked, setLiked] = useState(false);

    const onToggleLike=useCallback(()=>{
        setLiked((prev) => !prev);

    },[])

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
      }, []);
    return(
        <div>
        <Card 
        cover={post.Images[0] && <PostImages images={post.images}></PostImages>}
        actions={[
            <RetweetOutlined key="retweet" />,
            liked
              ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
              : <HeartOutlined key="heart" onClick={onToggleLike} />,
            <MessageOutlined key="message" onClick={onToggleComment} />,
            <Popover
              key="ellipsis"
              content={(
                <Button.Group>
                  <Button>신고</Button>
                  <Button>수정</Button>
                  <Button danger>삭제</Button>
                </Button.Group>
              )}
            >
              <EllipsisOutlined />
            </Popover>,
          ]}
       
        >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />

        </Card>
       {commentFormOpened && (
        <div>
            <CommentForm post={post} />
            <List
               header={`${post.Comments.length}개의 댓글 `}
               itemLayout='horizontal'
               dataSource={post.Comments}
               //item은 post.Comments안에있는 요소하나하나
               renderItem={(item)=>(
                   <li>
                       <Comment 
                       author={item.User.nickname}
                       avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                       content={item.content}
                        />

                       
                   </li>
               )}
            />
        </div>
    )}
    </div>
        

        
    )

}


export default PostCard;
