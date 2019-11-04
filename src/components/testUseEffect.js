import React, { useState, useEffect } from "react";

export default function Randomuser() {
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState([]);
  const changeHandler = e => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${number}`)
      .then(response => response.json())
      .then(jsonData => {
        setUsers([...jsonData.results]);
      });
  }, [number]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        Number
        <input type="text" name="number" onBlur={changeHandler} />
        <input type="submit" value="Send Request" />
      </form>
      {users && (
        <div classNaame="container mr-5 ml-5">
        <table className="table mt-5 ">
          <thead>
            <tr>
              <th>Cell #</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.cell}>
                <td>{user.cell}</td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.first}
                    className="rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      )}
    </div>
  );
}
