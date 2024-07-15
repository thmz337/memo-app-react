import { useState, useContext } from "react";
import { LoginConext } from "./LoginContext.js";

export default function Form({ memo, onEdit, onDelete, isOpen }) {
  const [text, setText] = useState(memo.content);
  const isLoggedIn = useContext(LoginConext);

  return (
    <section className="memo-form">
      {isOpen && (
        <>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          {isLoggedIn && (
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
          )}
        </>
      )}
    </section>
  );
}
