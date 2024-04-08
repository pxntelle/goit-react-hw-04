import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
// import { fetchImgs } from "../../imgs-api";
import { Formik, Form, Field } from "formik";

export default function SearchBar({ onSearch }) {
  const initialValues = {
    searchQuery: "",
  };

  const handleSubmit = async (values, actions) => {
    const { searchQuery } = values;

    if (searchQuery.trim() === "") {
      toast.error("Who doesn't search, will never find.........");
      return;
    }
    onSearch(searchQuery);

    //---------------- функціонал для відображення кількості знайдених картинок та повернення нульового результату ---------

    // try {
    //   const { total } = await fetchImgs({ query: searchQuery });
    //   if (total === 0) {
    //     toast.error("Oops! No images found. Try different request.");
    //   } else {
    //     toast.success(`Hooray! We found ${total} images.`);
    //     onSearch(searchQuery);
    //   }
    // } catch (error) {
    //   console.error("Oops! Error loading images.", error);
    // }

    actions.resetForm(); // скинути значення форми
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.form}>
            <div className={css.searchBar}>
              <button className={css.btn} type="submit">
                <CiSearch size="20" color="#2741d8" />
              </button>
              <Field
                className={css.input}
                type="text"
                name="searchQuery"
                autoFocus
                autoComplete="off"
                placeholder="Search images..."
              />
            </div>
          </Form>
        )}
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
}
