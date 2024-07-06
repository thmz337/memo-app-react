export default function NewMemoButton({ onAdd }) {
  return (
    <section className="new-memo-button">
      <div
        onClick={() => {
          onAdd();
        }}
      >
        +
      </div>
    </section>
  );
}
