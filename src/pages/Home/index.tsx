import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Fade } from 'react-awesome-reveal';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import Button from '../../components/UI/Button';
import CreatePost from '../../components/CreatePost';
import EditPost from '../../components/EditPost';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {
  postRequest,
  deletePost,
  isEditing,
} from '../../store/reducers/Posts/actions';
import { IPosts } from '../../types/Posts';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useTypeSelector((state) => state.posts.posts);
  const isLoaded = useTypeSelector((state) => state.posts.isLoaded);
  const isEdited = useTypeSelector((state) => state.posts.isEdit);

  useEffect(() => {
    dispatch(postRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletItem = (id: number) => {
    dispatch(deletePost(id));
  };

  const editItem = (post: IPosts) => {
    dispatch(isEditing(post));
  };

  return (
    <section className="home">
      <Header />
      <SearchBar />
      <div className="home__wrapper">
        {!isLoaded ? (
          posts?.map((post) => {
            return (
              <Fade key={post.id} className="home__el">
                <div className="home__item">
                  <p className="home__title">{post.title}</p>
                  <p className="home__descr">{post.body}</p>
                  <div className="home__actions">
                    <Button onClick={() => deletItem(post.id)}>Удалить</Button>
                    <Button onClick={() => editItem(post)}>
                      Редактировать
                    </Button>
                  </div>
                </div>
              </Fade>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <Modal>{isEdited ? <EditPost /> : <CreatePost />}</Modal>
    </section>
  );
};

export default Home;
