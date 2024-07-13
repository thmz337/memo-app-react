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

  function handleOnSelect(memo) {
    setTarget(memo);
    setIsOpen(!isOpen);
  }

  function handleOnAdd() {
    const newMemo = { id: nextId++, content: "新規メモ" };
    setMemos([...memos, newMemo]);
    setTarget(newMemo);
    setIsOpen(true);
  }

  function handleOnEdit(target) {
    setMemos(
      memos.map((memo) => {
        return target.id === memo.id ? target : memo;
      })
    );
    setIsOpen(false);
  }

  function handleOnDelete(target) {
    setMemos(
      memos.filter((memo) => {
        return target.id !== memo.id;
      })
    );
    setIsOpen(false);
  }

  return (
    <div className="content">
      <div>
        <MemoList
          memos={memos}
          onSelect={(memo) => {
            handleOnSelect(memo);
          }}
        />
        <NewMemoButton onAdd={handleOnAdd} />
      </div>
      <div>
        <Form
          key={target.id}
          memo={target}
          isOpen={isOpen}
          onEdit={(target) => {
            handleOnEdit(target);
          }}
          onDelete={(target) => {
            handleOnDelete(target);
          }}
        />
      </div>
    </div>
  );
}

export default App;
