import Button from './Button';

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.name === friend.name;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are Even</p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {Friend.name} Owes You 💲{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} 💲{Math.abs(friend.balance)}
        </p>
      )}
      <Button
        onClick={() => {
          onSelection(friend);
        }}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

export default Friend;
