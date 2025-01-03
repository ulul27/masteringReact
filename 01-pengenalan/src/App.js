import React from 'react';

// sekarang di sini kita akan import 1 button yang dibuat
// ekstensi .jsx nya tidak perlu di tuliskan lagi
// import ButtonFunctional from './components/ButtonFunctional'
import ButtonFunctional1 from './components/ButtonFunctional1';
import ButtonFunctional2 from './components/ButtonFunctional2';
import ButtonFunctional3 from './components/ButtonFunctional3';

export default function App() {
  return (
    // <ButtonFunctional/>
    // <ButtonFunctional/>

    /* ketika kita menggunakan ini saja,
    akan muncul error: JSX expressions must have one parent element.

    Hal ini dikarenakan untuk seluruh JSX Component
    HANYA boleh ada satu element root utama,
    untuk mensolusikan ini, kita bungkus kedua button tersebut
    dengan sebuah div lagi
    */
  //  <div>

  //    <ButtonFunctional kata="Mobile UI Kit" img="gambar"/>
  //    <br/>
  //    <ButtonFunctional text="Javascript"/>
  //    <ButtonFunctional text="php"/>
     
  //  </div>
<>
  <ButtonFunctional1 text="ini cara 1"/>
  <ButtonFunctional2 text="ini cara 2"/>
  <ButtonFunctional3 text="ini cara 3"/>

</>

  )
} 