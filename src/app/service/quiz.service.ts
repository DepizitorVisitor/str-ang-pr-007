import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { BaseService } from './base.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseService<Quiz> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'quizzes');
  }

  get(id: number): void {
    let quiz: Quiz = new Quiz();
    this.http.get<Quiz>(`${this.endPoint}/${id}`).pipe(
      tap( q => quiz = q )
    ).subscribe(
      data => this.item$.next(data),
      err => this.error$.next(err)
    );
  }
}
