// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [name, setName] = useState('');

export default function handleClick() {
    const name = prompt('Siapa nama Anda?');
    alert(`Halo, ${name}!`);
  

  return (
    <button onClick={handleClick}>
      Sapa
    </button>
  );
}
