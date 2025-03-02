import { useState } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUsere, setPaidByUsere] = useState('');
  const paidByFriend = bill ? bill - paidByUsere : '';
  const [whoIsPaying, setWhoIsPaying] = useState('friend');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUsere) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUsere);

    // if (whoIsPaying == 'user') {
    //   let x = paidByUsere - bill;
    //   updatedFriends({ ...selectedFriend, balance: x });
    // } else {
    //   let x = bill - paidByUsere;
    //   updatedFriends({ ...selectedFriend, balance: x });
    // }
  };
  return (
    <div className="containerSplit">
      <div className="imageContainer">
        <img
          className="imgStyle"
          src={selectedFriend.image}
          alt={selectedFriend.name}
        />
      </div>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>
          Split Bill With{' '}
          <span style={{ fontStyle: 'italic' }}>{selectedFriend.name}</span>
        </h2>

        <label>💰 Bill Value</label>
        <input
          type="num"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🤵 Your Explense</label>
        <input
          type="num"
          value={paidByUsere}
          onChange={(e) =>
            setPaidByUsere(
              Number(e.target.value) > bill
                ? paidByUsere
                : Number(e.target.value)
            )
          }
        />

        <label>👬 {selectedFriend.name}'s Expense</label>
        <input type="num" value={paidByFriend} disabled />

        <label htmlFor="payingBill">🤑 Who is paying The Bill</label>
        <select
          name="payingBill"
          id="payingBill"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default FormSplitBill;
