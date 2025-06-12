// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(" ");
//   console.log("index", index);

//   // export default function Gallery() {
//   // let index = 5;

//   function handleClick() {
//     //  index = index + 1;
//     setIndex(index + 1);
//     console.log('handleClick', index+1);
//   }

//   let sculpture = sculptureList[index];
//   // console.log("sculpture",sculpture);
//   return (
//     <>
//       <button onClick={handleClick}>
//         Selanjutnya
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         oleh {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} dari {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// function Perkalian(depan) {
//   let belakang = 0
//   return  depan * belakang
// } 

// let coba = "nama"
//  coba = "depan"

//   const [index, setIndex] = useState("nama");
// setIndex("depan")

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Selanjutnya
      </button>
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
