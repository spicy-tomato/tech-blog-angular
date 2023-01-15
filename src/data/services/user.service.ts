import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEnv, APP_ENV } from 'src/core/config';
import { Result } from 'src/core/data';
import { User } from 'src/data/models';
import { LoginRequest } from 'src/data/requests';
import { LoginResponse } from 'src/data/responses';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // PRIVATE PROPERTIES
  private readonly url: string;

  // CONSTRUCTOR
  constructor(private readonly http: HttpClient, @Inject(APP_ENV) env: AppEnv) {
    this.url = env.baseUrl + 'user/';
  }

  login(request: LoginRequest): Observable<Result<LoginResponse>> {
    return this.http.post<Result<LoginResponse>>(this.url + 'login', request);
  }

  me(): Observable<Result<User>> {
    return this.http.get<Result<User>>(this.url + 'me');
  }
}
