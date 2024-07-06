import { useEffect, useState } from "react";
import "./App.css";
import MemoList from "./MemoList.js";
import Form from "./Form.js";
import NewMemoButton from "./NewMemoButton.js";

let nextId = 0;

function App() {
  const [memos, setMemos] = useState([]);
  const [target, setTarget] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  useEffect(() => {
    const memos = JSON.parse(localStorage.getItem("memos"));
    if (memos) {
      setMemos(memos);
    }
  }, []);

  return (
    <div className="content">
      <div>
        <MemoList
          memos={memos}
          onSelect={(memo) => {
            setTarget(memo);
            setIsOpen(!isOpen);
          }}
        />
        <NewMemoButton
          onAdd={() => {
            const newMemo = { id: nextId++, content: "新規メモ" };
            setMemos([...memos, newMemo]);
            setTarget(newMemo);
            setIsOpen(true);
          }}
        />
      </div>
      <div>
        <Form
          key={target.id}
          memo={target}
          isOpen={isOpen}
          onEdit={(target) => {
            setMemos(
              memos.map((memo) => {
                return target.id === memo.id ? target : memo;
              }),
            );
            setIsOpen(false);
          }}
          onDelete={(target) => {
            setMemos(
              memos.filter((memo) => {
                return target.id !== memo.id;
              }),
            );
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
