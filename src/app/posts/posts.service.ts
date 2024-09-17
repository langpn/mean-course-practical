import {Injectable} from "@angular/core";
import {Post} from "./post.model";
import {HttpClient} from "@angular/common/http";
import {map, Subject} from "rxjs";
import {Router} from "@angular/router";

import {environment} from "../enviroments/enviroment";

const BACKEND_URL = environment.apiUrl + "/posts/";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[], postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getPosts(postPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postPerPage}&page=${currentPage}`;
    this.http.get<{ message: string, posts: any, maxPosts: number }>(
      BACKEND_URL + queryParams
    )
      .pipe(
        map((postData) => {
          return {
            posts: postData.posts.map((post: any) => {
              return {
                id: post._id,
                title: post.title,
                content: post.content,
                imagePath: post.imagePath,
                creator: post.creator,
              }
            }),
            maxPosts: postData.maxPosts
          }
        }))
      .subscribe(transformedPostData => {
        // console.log(transformedPostData);
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      })
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(postId: string | null): Post | any {
    return this.http.get<{
      _id: string,
      title: string,
      content: string,
      imagePath: string
    }>(BACKEND_URL + postId);
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http.post<{
      message: string,
      post: Post
    }>(BACKEND_URL, postData).subscribe(() => {
      this.router.navigate(['/']);
    });
  };

  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: '',
      };
    }
    this.http.put<{ message: string }>(BACKEND_URL + id, postData).subscribe(() => {
      this.router.navigate(["/"]);
    });
  };

  deletePost(postId: string) {
    return this.http.delete<{ message: string }>(
      BACKEND_URL + postId
    );
  };
}
