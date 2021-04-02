import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { QuizEditorComponent } from './page/quiz-editor/quiz-editor.component';
import { QuizListComponent } from './page/quiz-list/quiz-list.component';
import { QuizComponent } from './page/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/quiz',
    component: QuizListComponent,
  },
  {
    path: 'admin/quiz/:id',
    component: QuizEditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
