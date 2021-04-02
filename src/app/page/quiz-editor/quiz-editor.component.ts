// tslint:disable: deprecation
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss']
})
export class QuizEditorComponent implements OnInit {

  quiz$: BehaviorSubject<Quiz> = this.quizService.quizWithQuestions$;

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      // params => this.quizService.withQuestions(params.id)
      params => this.quizService.wQuestions(params.id).then(() => {})
    );
  }

  onSave(form: NgForm, quiz: Quiz): void {
    console.log(quiz);
    // this.quizService.update(form.value);
    // this.router.navigate(['admin', 'quiz']);
  }

}
