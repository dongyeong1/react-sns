const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');


const db = require('./models');

const passportConfig = require('./passport');

dotenv.config();

const app = express();

passportConfig();

app.use(morgan('dev'));




db.sequelize.sync()
.then(()=>{
    console.log('db연결성공')
})
.catch(console.error)

passportConfig();
    app.use(cors({
        origin: 'http://localhost:1234',
        credentials: true,
    }));

  app.use('/', express.static(path.join(__dirname, 'uploads')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }));
  app.use(passport.initialize());
  app.use(passport.session());


app.use('/posts', postsRouter);

app.use('/post',postRouter)
app.use('/user',userRouter)

app.listen(3065,()=>{
    console.log('서버실행 ')
})