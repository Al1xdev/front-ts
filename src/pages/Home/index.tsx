import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import Button from '../../components/UI/Button';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { postRequest, deletePost } from '../../store/reducers/Posts/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useTypeSelector((state) => state.posts.posts);
  const isLoaded = useTypeSelector((state) => state.posts.isLoaded);

  useEffect(() => {
    dispatch(postRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletItem = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <section className="home">
      <Header />
      <SearchBar />
      <div className="home__wrapper">
        {!isLoaded ? (
          posts?.map((post) => {
            return (
              <div key={post.id} className="home__item">
                <div className="home__title">{post.title}</div>
                <div className="home__descr">{post.body}</div>
                <Button onClick={() => deletItem(post.id)}>Удалить</Button>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
        {!isLoaded && (
          <div className="home__pagination">
            <Button>prev</Button>
            <Button>next</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
