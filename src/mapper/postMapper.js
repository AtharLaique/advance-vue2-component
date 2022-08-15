function postMapper({ data }) {
  return {
    success: true,
    post: data.map(({id, title, userId, body}) => (
      {
        postId: id,
        title: title,
        userId: userId,
        description: body,
      }
    ))
  }
}

export default {
  postMapper
}