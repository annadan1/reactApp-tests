import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, deleteUser } from "../../store/reducers/usersRedusers.js";

import "./Users.css";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setTimeout(() => {
      dispatch(addUsers(data));
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const handleClick = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      {isLoading && <h1 id="users-loading">Загружаем пользователей...</h1>}
      {!isLoading && (
        <div id="users-list" className="users-list">
          {users.map((user) => (
            <div id="user-item">
              <Link
                to={`/users/${user.id}`}
                key={user.id}
                data-testid="user-item"
              >
                {user.name}
              </Link>
              <button
                type="button"
                className="deleteButton"
                id={"delete-user"}
                onClick={() => handleClick(user.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
