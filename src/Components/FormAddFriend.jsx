import { useState } from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
function FormAddFriend({ addNewFriend, showAddFriendFrom }) {
  const [friendForm, setFriendForm] = useState({
    name: '',
    image: 'https://i.pravatar.cc/48',
  });
  const handelchangeValue = (e) => {
    setFriendForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    console.log('test');
    if (friendForm.name == '' || friendForm.image == '') return;

    const id = uuidv4();
    addNewFriend((prev) => {
      return [
        ...prev,
        {
          id,
          name: friendForm.name,
          image: `${friendForm.image}?=${id}`,
          balance: -7,
        },
      ];
    });

    setFriendForm({
      name: '',
      image: 'https://i.pravatar.cc/48',
    });
    showAddFriendFrom();
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <label>👬 Friend Name</label>
        <input
          type="text"
          name="name"
          value={friendForm.name}
          onChange={handelchangeValue}
        />
        <label>📷 Image URL</label>
        <input
          type="url"
          name="image"
          value={friendForm.image}
          onChange={handelchangeValue}
        />
        <Button>submit</Button>
      </form>
    </>
  );
}

export default FormAddFriend;
