import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortfolioService } from './shared/portfolio.service';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { CardComponent } from './blackjack/card/card.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { CorrectOrIncorrectAnswerDirective } from './quiz/directives/correctOrIncorrectAnswer.directive';
import { ShowHelpTextDirective } from './quiz/directives/showHelpText';
import { AnswerComponent } from './quiz/answer/answer.component';
import { FormsModule } from '@angular/forms';
import { RouletteComponent } from './roulette/roulette.component';
import { ColorDirective } from './roulette/directives/color.directive';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blackjack', component: BlackjackComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'roulette', component: RouletteComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    BlackjackComponent,
    CardComponent,
    QuizComponent,
    QuestionsComponent,
    CorrectOrIncorrectAnswerDirective,
    ShowHelpTextDirective,
    AnswerComponent,
    RouletteComponent,
    ColorDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
