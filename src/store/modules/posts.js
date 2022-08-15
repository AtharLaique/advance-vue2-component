import UserPostsService from "../../services/UserPostsService";
// initial state
const state = () => ({
 error: null,
 posts: null,
})

// getters
const getters = {}

// actions
const actions = {
 async fetchAllPosts({ commit }) {
  commit('setError', null);
  UserPostsService.fetchAllPosts()
   .then((posts) => {
    commit('setPosts', posts);
   })
   .catch((error)=>{
    commit('setError', error);
   })
 }
}

// mutations
const mutations = {
 setError(state, error) {
  state.error = error
 },
 setPosts(state, posts) {
  state.posts = posts
 },
}

export default {
 state,
 getters,
 actions,
 mutations
}