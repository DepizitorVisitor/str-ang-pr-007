import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  list$: BehaviorSubject<Quiz[]> = this.quizService.list$;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAll();
  }

}
