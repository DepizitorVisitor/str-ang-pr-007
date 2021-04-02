import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavigationComponent } from './page/navigation/navigation.component';
import { AdminComponent } from './page/admin/admin.component';
import { QuizEditorComponent } from './page/quiz-editor/quiz-editor.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { QuizListComponent } from './page/quiz-list/quiz-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AdminComponent,
    QuizEditorComponent,
    QuizComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
