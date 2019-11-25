import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from '../../components/Page';
import PostCard from '../../components/PostCard';
import AddPost from '../../components/AddPost';
import Header from './Header';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },

  posts: {
    marginTop: theme.spacing(3)
  }
}));

function SocialFeed(props) {
  const classes = useStyles();
  const { posts } = props;


  return (
    <Page
      className={classes.root}
      title="Social Feed"
    >
      <Container maxWidth="lg">
        <Header />
        <AddPost className={classes.addPost}/>
        <div className={classes.posts}>
          {Object.keys(posts).map(key_ => (
            <PostCard
              key={key_}
              post={posts[key_]}
            />
          ))}
        </div>
      </Container>
    </Page>
  );
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(SocialFeed);
