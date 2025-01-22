const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {

  const name = 'Hedy Lamarr';

  return (
    <>
      {/* <h1>{name}'s To Do List </h1> */}
      <h1>To Do List for {formatDate(today)}</h1>

      <h1>Daftar Tugas {name}</h1>

    </>
  );
  ;
}