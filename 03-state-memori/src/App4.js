import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Terima kasih!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Mengirim: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Pesan masukan"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Kirim</button>
      </form>
    );
  }
}
