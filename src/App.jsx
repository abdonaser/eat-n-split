import { initialFriends } from './assets/Data';
import './App.css';
import FriendsList from './Components/FriendsList';
import FormAddFriend from './Components/FormAddFriend';
import { useRef, useState } from 'react';
import Button from './Components/Button';
import FormSplitBill from './Components/FormSplitBill';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const handleShowAddFriendForm = () => {
    setShowAddFriendForm((prev) => !prev);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((prev) => (prev?.name == friend.name ? null : friend));
    setShowAddFriendForm(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) => {
      return friends.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      });
    });

    setSelectedFriend(null);
    // const newDataArr = friends.map((old) => {
    //   if (old.name == newData.name) {
    //     return {
    //       ...newData,
    //     };
    //   } else {
    //     return { ...old };
    //   }
    // });
    // setUpdatedData(newDataArr);
  };
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelectedFriend}
          />
          {showAddFriendForm && (
            <FormAddFriend
              addNewFriend={friends}
              showAddFriendFrom={handleShowAddFriendForm}
            />
          )}
          <Button onClick={handleShowAddFriendForm}>
            {showAddFriendForm ? 'Close' : 'Add Friend'}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            // updatedFriends={updatedFriends}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
