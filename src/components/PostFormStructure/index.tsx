import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { IPosts } from '../../types/Posts';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Button from '../UI/Button';
import { modalOpen } from '../../store/reducers/Posts/actions';

interface IPostFormStructure {
  onSubmit: (data: IPosts) => void;
}

const initialValues: IPosts = {
  id: 0,
  title: '',
  body: '',
};

const PostFormStructure: React.FC<IPostFormStructure> = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const isOpen = useTypeSelector((state) => state.posts.isOpened);
  const defaultValues = useTypeSelector((state) => state.posts.post);

  const closeModal = () => {
    dispatch(modalOpen(!isOpen));
  };

  return (
    <>
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
              <Button type="submit">сохранить</Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default PostFormStructure;
