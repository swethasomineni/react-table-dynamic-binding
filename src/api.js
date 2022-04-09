import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Apicall() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <table style={{ border: '1px solid red' }}>
      <thead>
        <tr>
          <th>Body</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((value) => {
          return (
            <tr>
              <td>{value.body}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Apicall;
