import { Button } from '@material-tailwind/react';
import React from 'react';

const AddUser = () => {
  const handlUserForm = async e => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    const userInfo = {
      username: username,
      email: email,
      password: password,
      role: role,
    };

    const submitUserInfo = async userInfo => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });

        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        console.log(data, '');
        // Handle success
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here
      }
    };

    submitUserInfo(userInfo);
  };
  return (
    <div className=" max-w-5xl mx-10">
      <div className="flex jsutify-between">
        <Button>User</Button>
        <Button>AddUser</Button>
      </div>
      <div>
        <form className="" onSubmit={handlUserForm}>
          <div>
            <label>Name</label>
            <input placeholder="name" name="name" />
          </div>
          <div>
            <label>email</label>
            <input placeholder="email" name="email" />
          </div>
          <div>
            <label>password</label>
            <input placeholder="password" name="password" />
          </div>
          <div>
            <label>User Role</label>
            <select defaultValue="admin" name="role">
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="general">General</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
