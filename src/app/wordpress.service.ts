import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getprosectingPosts():any {
    return this.http.get<any[]>('http://localhost/wp-json/wp/v2/posts?categories=3');
  }

  getpipelinePosts():any {
    return this.http.get<any[]>('http://localhost/wp-json/wp/v2/posts?categories=4');
  }
}
