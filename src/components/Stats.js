export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items into your list</em>;
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;

  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have everything!! you are good to go</em>
      ) : (
        <em>
          {" "}
          🕋🛕You have {numItems} items on your list, and you already packed{" "}
          {numPackedItems}({percentage}%)
        </em>
      )}
    </footer>
  );
}
