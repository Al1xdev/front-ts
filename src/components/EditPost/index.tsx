import React from 'react';
import { useDispatch } from 'react-redux';

import PostFormStructure from '../PostFormStructure';
import cancel from '../../assets/icons/cancel.svg';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { editPost, modalOpen } from '../../store/reducers/Posts/actions';
import { IPosts } from '../../types/Posts';

const EditPost: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const isOpen = useTypeSelector((state) => state.posts.isOpened);

  const onSubmit = (data: IPosts) => {
    dispatch(editPost(data));
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
      <h2>Обновить пост!</h2>
      <PostFormStructure onSubmit={onSubmit} />
    </div>
  );
});

export default EditPost;
