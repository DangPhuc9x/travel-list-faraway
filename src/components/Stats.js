export default function Stats({ item }) {
  if (!item.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = item.length;
  const numPackedItems = item.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          You have {numItems} items on your list. You already packed{" "}
          {numPackedItems} items ({percentage}%)
        </em>
      )}
    </footer>
  );
}
