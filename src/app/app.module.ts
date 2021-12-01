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
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
