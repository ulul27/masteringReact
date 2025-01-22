export default function Avatar() {
  let avatar = ""
  
  const deskripsi = "Gregorio Y. Zara"
  const profile = "abu"

  if (profile === 'abu') {
    avatar = "https://i.imgur.com/7vQD0fPs.jpg"
  } else if (profile === "ulul") {
    avatar = "https://i.imgur.com/QIrZWGIs.jpg"
  }

  return (
    <img
      className="avatar"
      src={avatar}
      alt={deskripsi}
    />
  );
}