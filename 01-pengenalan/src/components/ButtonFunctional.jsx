// Harus selalu import react
import React from 'react' ;

// disini kita akan membuat sebuah button dengan
// react functional component
const ButtonFunctional = ({text}) => {
  // secara default ini sebuah ada render ()
  // jadi tidak perlu dituliskan lagi
  // return <button>{props.text}</button>

  // cara 2
  // const {text} = props
  // const {kata, img} = props
  // return <button>{kata} - {img}</button>

  return <button>{text}</button>
}

export default ButtonFunctional