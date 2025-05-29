import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // export default function Gallery() {
  // let index = 5;

  function handleClick() {
    //  index = index + 1;
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  console.log("sculpture",sculpture);
  return (
    <>
      <button onClick={handleClick}>
        Selanjutnya
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        oleh {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} dari {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
