import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  Avatar,
  Link,
  Typography,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Reactions from './Reactions';
import CommentBubble from './CommentBubble';
import CommentForm from './CommentForm';

const useStyles = makeStyles((theme) => ({
  root: {marginBottom: theme.spacing(3)},
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6
  },
  content: {
    paddingTop: 0
  },
  message: {
    marginBottom: theme.spacing(2)
  },
  mediaArea: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 400,
    backgroundPosition: 'initial'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        avatar={(
          <Avatar
            alt="Person"
            className={classes.avatar}
          >
            {post.author.name.split("")[0]}
          </Avatar>
        )}
        disableTypography
        subheader={(
          <div className={classes.subheader}>
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Typography variant="body2">
              {moment(post.created_at).fromNow()}
            </Typography>
          </div>
        )}
        title={(
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/profile/1/timeline"
            variant="h6"
          >
            {post.author.name}
          </Link>
        )}
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {post.message}
        </Typography>
        <Reactions
          className={classes.reactions}
          post={post}
        />
        <Divider className={classes.divider} />
        {post.comments && (
          <div className={classes.comments}>
            {Object.keys(post.comments).map(key_ => (
              <CommentBubble
                comment={post.comments[key_]}
                key={key_}
              />
            ))}
          </div>
        )}
        <Divider className={classes.divider} />
        <CommentForm postId={post.id} />
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default PostCard;
