import Post from '@/@types/Post';
import HttpClient from '@/utils/HttpClient';

class PostService {
  async listPosts(path = '/careers/') {
    return HttpClient.get(path);
  }

  async createPost(post: Post) {
    return HttpClient.post('/careers/', post);
  }

  async removePost(postId: number) {
    return HttpClient.delete('/careers', postId);
  }

  async updatePost(postId: number, post: Post) {
    return HttpClient.patch('/careers', postId, post);
  }
}

export default new PostService();
