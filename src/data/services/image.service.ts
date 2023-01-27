import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEnv, APP_ENV } from 'src/core/config';
import { Result } from 'src/core/data';
import { UploadCoverImageResponse } from 'src/data/responses';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  // PRIVATE PROPERTIES
  private readonly url: string;

  // CONSTRUCTOR
  constructor(private readonly http: HttpClient, @Inject(APP_ENV) env: AppEnv) {
    this.url = env.baseUrl + 'image/';
  }

  // PUBLIC METHODS
  uploadCoverImage(data: File): Observable<Result<UploadCoverImageResponse>> {
    return this.http.post<Result<UploadCoverImageResponse>>(
      this.url + 'upload/cover',
      ImageService.createBody(data)
    );
  }

  uploadPostImage(data: File): Observable<Result<UploadCoverImageResponse>> {
    return this.http.post<Result<UploadCoverImageResponse>>(
      this.url + 'upload/post',
      ImageService.createBody(data)
    );
  }

  // PRIVATE METHODS
  private static createBody(data: File): FormData {
    const formData = new FormData();
    formData.append('image', data, data.name);
    return formData;
  }
}
