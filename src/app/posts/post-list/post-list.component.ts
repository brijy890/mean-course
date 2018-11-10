import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoding = false;
  private postsSub = new Subscription;

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.isLoding = true;
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListner()
      .subscribe((posts: Post[]) => {
        this.isLoding = false;
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }

}
