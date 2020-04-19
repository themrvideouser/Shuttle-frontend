import React, {useCallback} from "react";
import {connect} from 'react-redux';
import Paginator from "components/Paginator/Paginator";
import FeedExplainingLabel from "components/ExplainingLabels/FeedLabel/FeedLabel";
import Loader from "components/Paginator/Loader";
import FeedList from "./FeedList";
import styles from './feed.module.css';

const Feed = ({posts, dispatch}) => {

  const fetcher = useCallback((page) => dispatch.posts.fetchFeed(page), [dispatch.posts]);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Paginator fetcher={fetcher}>
          <FeedList posts={posts}/>
        </Paginator>
        {
          posts?.length === 0 &&
          <FeedExplainingLabel/>
        }
        {!posts && <Loader/>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.feed
});

export default connect(mapStateToProps)(Feed);
