import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, children, disabled }) {
  return (
    <div className={css.loadMoreBtn}>
      <button className={css.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
