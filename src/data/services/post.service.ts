import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_ENV, AppEnv } from 'src/core/config';
import { Result } from 'src/core/data';
import { PublishPostRequest } from 'src/data/requests';
import { GetPostResponse, GetPostsResponse } from 'src/data/responses';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // PRIVATE PROPERTIES
  private readonly url: string;

  // CONSTRUCTOR
  constructor(private readonly http: HttpClient, @Inject(APP_ENV) env: AppEnv) {
    this.url = env.baseUrl + 'post/';
  }

  // PUBLIC METHODS
  get(params?: {
    userName?: string;
    size?: number;
  }): Observable<Result<GetPostsResponse>> {
    return this.http.get<Result<GetPostsResponse>>(this.url, { params });
  }

  getById(postId: string): Observable<Result<GetPostResponse>> {
    return this.http.get<Result<GetPostResponse>>(this.url + postId);
  }

  publish(request: PublishPostRequest): Observable<Result<string>> {
    return this.http.post<Result<string>>(this.url, request);
  }
}
