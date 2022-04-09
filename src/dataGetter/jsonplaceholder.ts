import { TAlbumData } from './albums.types';
import { TCommentData } from './comments.types';
import { TPhotosData } from './photos.types';
import { TPostData } from './posts.types';
import { TTodosData } from './todos.types';
import { TUserData } from './users.types';

export default class JSONPlaceholder {
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  private readonly usersLink = 'users/';

  private readonly postsLink = 'posts/';

  private readonly todosLink = 'todos/';

  private readonly commentsLink = 'comments/';

  private readonly albumsLink = 'albums/';

  private readonly photosLink = 'photos/';

  private static jsonFetch(url: string) {
    return fetch(url).then((data) => data.json());
  }

  getUsers(): Promise<Array<TUserData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.usersLink);
  }

  getPosts(): Promise<Array<TPostData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.postsLink);
  }

  getTodos(): Promise<Array<TTodosData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.todosLink);
  }

  getComments(): Promise<Array<TCommentData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.commentsLink);
  }

  getAlbums(): Promise<Array<TAlbumData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.albumsLink);
  }

  getPhotos(): Promise<Array<TPhotosData>> {
    return JSONPlaceholder.jsonFetch(this.url + this.photosLink);
  }
}
