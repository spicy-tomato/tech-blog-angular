import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_ENV, AppEnv } from 'src/core/config';
import { Result } from 'src/core/data';
import { PublishPostRequest } from 'src/data/requests';
import { UploadCoverImageResponse } from 'src/data/responses';

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
  uploadCoverImage(
    formData: FormData
  ): Observable<Result<UploadCoverImageResponse>> {
    return this.http.post<Result<UploadCoverImageResponse>>(
      this.url + 'cover-image',
      formData
    );
  }

  publish(
    request: PublishPostRequest
  ): Observable<Result<string>> {
    return this.http.post<Result<string>>(this.url, request);
  }
}
