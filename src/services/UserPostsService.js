import DataService from "./axios";
import mapper  from '../mapper/postMapper';
export default {
 async fetchAllPosts() {
  const post = await DataService.get(`/posts`)
  return mapper.postMapper(post)
 },
 fetchPostById(id) {
  return DataService.get(`/posts/${id}`)
 },
 fetchPostComments(id) {
  return DataService.get(`/posts/${id}/comments`)
 },
 createPost(payload) {
  return DataService.post(`/posts`, payload)
 },
 updatePost(payload) {
  return DataService.put(`/posts/${payload.id}`, payload.data)
 },
 deletePost(id) {
  return DataService.delete(`/posts/${id}`)
 },
};