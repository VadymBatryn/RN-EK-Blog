import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import {Categories} from '../../models/categories';
import {postData} from '../../models/postData';

export const fetchPosts = createAsyncThunk('posts/loadPosts', async () => {
  let url = 'http://ek.stageserver.org/wp-json/wp/v2/posts/';
  let response = await axios.get(url);
  return response.data as postData[];
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as postData[],
    filteredPosts: [] as postData[],
  },
  reducers: {
    filterPosts: (state, action) => {
      if (action.payload !== 'All') {
        state.filteredPosts = state.posts.filter(
          post => Categories.get(post.categories[0]) === action.payload,
        );
      } else {
        state.filteredPosts = state.posts;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.posts = action.payload;
        state.filteredPosts = action.payload;
      }
    });
  },
});

export default postsSlice.reducer;
export const {filterPosts} = postsSlice.actions;
