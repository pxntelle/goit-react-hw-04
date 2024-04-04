import css from "./ImageCard.module.css";

export default function ImageCard({
  img: { alt_description, urls },
  openModal,
}) {
  const handleClick = () => {
    openModal({ alt_description, imgUrl: urls.regular });
  }; //виклик функції openModal з потрібними

  return (
    <div className={css.imgCard}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={handleClick} // виклик функції handleClick при кліку
      />
    </div>
  );
}
