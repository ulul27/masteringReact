import { useState } from 'react';

export default function Form() {
  // TANTANGAN 2
  
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("");
  function handleFirstNameChange(event) {
  // TANTANGAN 2
    setFirstName(event.target.value)
    // firstName = event.target.value
  }
  

  function handleLastNameChange(event) {
  // TANTANGAN 2
    setLastName(event.target.value)
  }
  
  function handleReset() {
  // TANTANGAN 2
    setFirstName('');
    // firstName = ''
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="Nama Depan"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Nama Belakang"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hai, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Setel Ulang</button>
    </form>
  );
}
