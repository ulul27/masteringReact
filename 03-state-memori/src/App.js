import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  function handleNextClick() {
    // TANTANGAN 1
    console.log(index, sculptureList.length-1);
    if(index < sculptureList.length-1) {
      setIndex(index + 1); 
      console.log('handleNextClick', index + 1); 
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // console.log(setIndex)
  return (
    <>
      <button onClick={handleNextClick}>
        Selanjutnya
      </button> :

      <h2>
        <i>{sculpture.name} </i> 
        oleh {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} dari {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Sembunyikan' : 'Tampilkan'} Detail
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
