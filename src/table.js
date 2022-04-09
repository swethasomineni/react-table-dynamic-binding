import React from 'react';
const arr = [
  {
    name: 'swetha',
    age: '30',
    gender: 'female',
  },
  { name: 'priya', age: '45', gender: 'male' },
];
const List = () => {
  return (
    <table style={{border:"1px solid red"}}>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default List;
