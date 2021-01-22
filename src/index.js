import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="My first blog post!" avatar={faker.image.image()}/>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" commentText="Very nice blog post." avatar={faker.image.image()}/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentText="The final blog post." avatar={faker.image.image()}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));

{/* <img alt="avatar" src='https://source.unsplash.com/random' /> */}