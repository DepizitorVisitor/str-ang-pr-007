import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { BaseService } from './base.service';
import { switchMap, tap } from 'rxjs/operators';
import { QuestionService } from './question.service';
import { BehaviorSubject, of } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseService<Quiz> {

  quizWithQuestions$: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>(new Quiz());

  constructor(
    public http: HttpClient,
    private questionService: QuestionService,
  ) {
    super(http, 'quizzes');
  }

  async wQuestions(id: number): Promise<any> {
    const quiz: Quiz = await this.http.get<Quiz>(`${this.endPoint}/${id}`).toPromise();
    const questions: Question[] = await this.http.get<Question[]>(`${this.questionService.endPoint}`).toPromise();
    const qList = questions.filter( q => quiz.questions.includes( q.id ) );
    quiz.questions = qList;
    this.quizWithQuestions$.next(quiz);
  }

  withQuestions(id: number): void {
    // Get selected quiz.
    this.item$.pipe(
      tap( q => {
        if (q) {
          // Get question list.
          this.questionService.getAll();
        }
      })
    ).subscribe(
      () => {}
    );

    // Subscribe question list.
    this.questionService.list$.subscribe(
      questions => {
        if (questions.length > 0) {
          // Get questions based on the question array.
          const qList = questions.filter( q => this.item$.value.questions.includes(q.id) );
          const lastQuiz = this.item$.value;
          lastQuiz.questions = qList;
          this.quizWithQuestions$.next(lastQuiz);
        }
      }
    );

    this.get(id);
  }
}
