import { useState } from "react";

export default function Form({ memo, onEdit, onDelete, isOpen }) {
  const [text, setText] = useState(memo.content);

  return (
    <section className="memo-form">
      {isOpen && (
        <div>
          <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <button
              className="edit-button"
              onClick={() => onEdit({ id: memo.id, content: text })}
            >
              編集
            </button>
            <button className="delete-button" onClick={() => onDelete(memo)}>
              削除
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
