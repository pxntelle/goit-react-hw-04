import { useState, useEffect } from "react";
import { fetchImgs } from "../imgs-api";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";

export default function App() {
  const [query, setQuery] = useState(""); //пошук юзера
  const [imgs, setImgs] = useState([]); //зберігання масиву картинок з апі
  const [isLoading, setIsLoading] = useState(false); //завантаження даних за замовчуванням
  const [error, setError] = useState(false); //помилка при фетчінгу
  const [isEmpty, setIsEmpty] = useState(false); //чи завантажений масив порожній
  const [isVisible, setIsVisible] = useState(false); //видимість наступних картинок
  const [page, setPage] = useState(1); //поточна сторрінка з усіх завантажених
  const [selectedImg, setSelectedImg] = useState({}); //зберігає деталі обраної картинки
  const [openModal, setOpenModal] = useState(false); //відображення модалки за замовчуванням

  useEffect(() => {
    const getImgs = async () => {
      if (query === "") return; //запит не відправляється при порожньому пошукові
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchImgs({ query, page });

        if (!results.length) {
          setIsEmpty(true);
          return;
        } //не робить запитів
        setImgs((prevImgs) => [...prevImgs, ...results]);
        setIsVisible(page < total_pages); //видимість кнопки "завантажити більше"
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImgs();
  }, [query, page]);

  const handleSearch = (value) => {
    if (value === query) return;
    setImgs([]);
    setPage(1);
    setError(false);
    setQuery(value);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (values) => {
    setSelectedImg(values);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImg({});
    setOpenModal(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={"Oops! 👀 Error! Reload page!"} />}
      {imgs.length !== 0 && (
        <ImageGallery imgs={imgs} openModal={handleOpenModal} />
      )}
      {isEmpty && query && (
        <ErrorMessage
          message={
            " Looks like we couldn't find anything for you 👀 Try something else!"
          }
        />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading" : "Load more"}
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      <ImageModal
        openModal={openModal}
        modal={selectedImg}
        closeModal={handleCloseModal}
      />
    </div>
  );
}
