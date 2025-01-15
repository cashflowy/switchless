'use client'
import React, { useState, useRef } from 'react';
import {
  Card,
  Typography,
  Textarea,
  Button,
  Box
} from '@mui/joy';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function CommentCard({ comments, submit }) {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    submit()
    setLoading(false)

  }
  const CommentItem = ({ comment, index }) => {
    return (
      <Card key={index} variant='plain' sx={{ padding: 0.5, backgroundColor: 'white' }}>
        <Typography level="title-sm" ><strong>{comment.username}</strong>
          <Typography level="body-xs" sx={{ ml: 1, display: 'inline', whiteSpace: 'nowrap', opacity: 0.6 }}>
            {new Date(comment.createdAt).toDateString()}
          </Typography>
        </Typography>
        <Typography level="title-sm" sx={{ mt: -1.5, wordWrap: 'break-word' }}>
          {comment.content}
        </Typography>
      </Card>
    )
  }
  return (
    <>
      <Card sx={{ mt: 2, pb: 1, gap: 0, backgroundColor: 'white' }} >
        <Typography level="title-lg" sx={{ m: 0 }}>Comments:</Typography>
        {comments && comments.map((comment, index) => (<CommentItem key={index} comment={comment} index={index} />))}
        <form onSubmit={handleSubmit} >
          <Textarea name="content" placeholder="Write your comment here" minRows={3} required sx={{ mt: 1, mb: 1, backgroundColor: 'white' }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" loading={loading} variant="outlined" color="primary" startDecorator={<ModeEditIcon />}>Add comment</Button>
          </Box>

        </form>
      </Card>
    </>
  )
}