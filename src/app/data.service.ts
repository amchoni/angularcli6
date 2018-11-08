import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/users/models/user';
import { Observable } from 'rxjs';

// Purpose of service is if we have any code that we want to reuse with component then we can create service
@Injectable({
  providedIn: 'root'
})

// Logic
export class DataService {
  // we will create an instance of this HttpClient through dependency injection DI
  constructor(private http: HttpClient) { }

  // The custom method that we will call from component
  // if we want to use this method in component we must add this to app.module
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
}
