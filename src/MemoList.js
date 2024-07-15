export default function MemoList({ memos, onSelect }) {
  return (
    <section className="memo-list">
      <ul>
        {memos.map((memo) => (
          <li
            key={memo.id}
            onClick={() => {
              onSelect(memo);
            }}
          >
            {memo.content ? memo.content.split(/\r\n|\n/)[0] : "新規メモ"}
          </li>
        ))}
      </ul>
    </section>
  );
}
