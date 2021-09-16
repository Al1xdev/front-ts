import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  clearFields,
  createPostItem,
  modalOpen,
} from '../../store/reducers/Posts/actions';
import Button from '../UI/Button';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cancel from '../../assets/icons/cancel.svg';
import { IPosts } from '../../types/Posts';

const initialValues: IPosts = {
  id: 0,
  title: '',
  body: '',
};

const CreatePost: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const isOpen = useTypeSelector((state) => state.posts.isOpened);
  const defaultValues = useTypeSelector((state) => state.posts.post);

  useEffect(() => {
    return () => {
      dispatch(clearFields());
    };
  }, [isOpen, dispatch]);

  const onSubmit = (data: IPosts) => {
    dispatch(createPostItem(data));
  };

  const closeModal = () => {
    dispatch(modalOpen(!isOpen));
  };

  return (
    <div className="post">
      <div className="post__btn-wrapper">
        <button onClick={closeModal} className="post__btn">
          <img src={cancel} alt="close" className="post__close-icon" />
        </button>
      </div>
      <h2>Создать пост!</h2>
      <Formik
        initialValues={defaultValues || initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit, values, handleChange }) => (
          <form className="post__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="введите название"
              className="input"
            />
            <input
              type="text"
              name="body"
              value={values.body}
              onChange={handleChange}
              placeholder="введите описание"
              className="input"
            />
            <div className="post__actions">
              <Button onClick={closeModal} color="#9E9E9E" type="button">
                отмена
              </Button>
              <Button type="submit">создать</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
});

export default CreatePost;
