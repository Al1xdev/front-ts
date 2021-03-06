import React from 'react';
import { useDispatch } from 'react-redux';

import { createPostItem, modalOpen } from '../../store/reducers/Posts/actions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cancel from '../../assets/icons/cancel.svg';
import { IPosts } from '../../types/Posts';
import PostFormStructure from '../PostFormStructure';

const CreatePost: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const isOpen = useTypeSelector((state) => state.posts.isOpened);

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
      <PostFormStructure onSubmit={onSubmit} />
    </div>
  );
});

export default CreatePost;
