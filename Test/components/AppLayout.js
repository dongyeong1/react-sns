import React from 'react';
import Link from 'next/link'
import {Col,Row,Input,Menu} from 'antd'
import PropTypes from 'prop-types';
import UserProfile from './userProfile'
import LoginForm from './LoginForm';
import {useSelector} from 'react-redux'



function AppLayout({children}) {
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)
  return <div>
      <Menu mode="horizontal">
          <Menu.Item>
          <Link href="/"><a>메인페이지</a></Link>

              
          </Menu.Item>
          <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>

              
              </Menu.Item>
              <Menu.Item>
              <Link href="/signUp"><a>회원가입</a></Link>

              </Menu.Item>

      </Menu>

      <Row gutter={8}>
          <Col xs={24} md={6}>
          {isLoggedIn? <UserProfile></UserProfile>:<LoginForm></LoginForm>}
          </Col>

        <Col xs={24} md={12}>
            {children}
        </Col>
      </Row>







  </div>;



}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default AppLayout;
