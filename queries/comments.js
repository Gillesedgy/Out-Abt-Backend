const db = require("../db/dbConfig")

// Index list of comments
async function getAllComments() {
  try {
    const allComments = await db.any("SELECT * FROM comments")
    return allComments
  } catch (error) {
    return error
  }
}

// Show individual comment
async function getCommentById(id) {
  try {
    const oneComment = await db.one("SELECT * FROM comments WHERE id=$1", id)
    return oneComment
  } catch (error) {
    return error
  }
}
//Show comment by user ?

// Create
async function createComments(comment) {
  try {
    const newComment = await db.one(
      "INSERT INTO comments (user_id, discussion_id, comment_body) VALUES ($1, $2, $3) RETURNING *",
      [comment.user_id, comment.discussion_id, comment.comment_body]
    )
    return newComment
  } catch (error) {
    return error
  }
}
// Update
async function updateComment(id, comment) {
  try {
    const updatedComment = await db.one(
      "UPDATE comments SET user_id=$1, discussion_id=$2, comment_body=$3 WHERE id=$4 RETURNING *",
      [comment.user_id, comment.discussion_id, comment.comment_body, id]
    )
    return updatedComment
  } catch (error) {
    return error
  }
}

//Delete
async function deleteComment(id) {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE id=$1 RETURNING*",
      id
    )
    return deletedComment
  } catch (error) {
    return error
  }
}
module.exports = {
  getAllComments,
  getCommentById,
  deleteComment,
  updateComment,
  createComments,
}