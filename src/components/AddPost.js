import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { connect } from 'react-redux';
import { addPost } from "../store/actions/postsActions";

const useStyles = makeStyles((theme) => ({
  root: {marginTop: theme.spacing(3)},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  }
}));

function AddPost(props) {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');
  const { user, addPost } = props;

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const onClick = () => {
    addPost({
      author: {
        name: user.firstName
      },
      created_at: Date.now(),
      message: value,
      likes: 0,
      liked: false,
      comments: {}
    })
  };

  return (
    <Card
      className={classes.root}
    >
      <CardContent className={classes.content}>
        <Paper
          className={classes.paper}
          elevation={1}
        >
          <Input
            className={classes.input}
            disableUnderline
            onChange={handleChange}
            placeholder={`What's on your mind, ${user.firstName}`}
          />
        </Paper>
        <Tooltip title="Send">
          <IconButton onClick={onClick} color={value.length > 0 ? 'primary' : 'default'}>
            <SendIcon />
          </IconButton>
        </Tooltip>
        <Divider className={classes.divider} />
        <Tooltip title="Attach image">
          <IconButton
            edge="end"
            onClick={handleAttach}
          >
            <AddPhotoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Attach file">
          <IconButton
            edge="end"
            onClick={handleAttach}
          >
            <AttachFileIcon />
          </IconButton>
        </Tooltip>
        <input
          className={classes.fileInput}
          ref={fileInputRef}
          type="file"
        />
      </CardContent>
    </Card>
  );
}

AddPost.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
