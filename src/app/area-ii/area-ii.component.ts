import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../model/quiz';
import areaII from '../area-ii.json';

@Component({
  selector: 'app-area-ii',
  templateUrl: './area-ii.component.html',
  styleUrls: ['./area-ii.component.scss']
})
export class AreaIiComponent implements OnInit {

  title = 'ph-exam';
  public filterTerm: string;
  public quizzes: Quiz[] = areaII;

  constructor() {
    this.filterTerm = '';
  }
  ngOnInit(): void {
  }

  trackByQuestion(index: number, quiz: Quiz): string {
    return quiz.question;
  }
}
