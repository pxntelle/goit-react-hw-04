import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ imgs, openModal }) {
  return (
    <ul className={css.imgGallery}>
      {imgs.map((img) => (
        <li key={img.id}>
          <ImageCard img={img} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
