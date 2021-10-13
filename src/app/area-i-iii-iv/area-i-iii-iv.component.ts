import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../model/quiz';
import mergedArea134 from '../area-i-iii-iv.json';

@Component({
  selector: 'app-area-i-iii-iv',
  templateUrl: './area-i-iii-iv.component.html',
  styleUrls: ['./area-i-iii-iv.component.scss']
})
export class AreaIIiiIvComponent implements OnInit {

  title = 'ph-exam';
  public filterTerm: string;
  public quizzes: Quiz[] = mergedArea134;

  constructor() {
    this.filterTerm = '';
  }
  ngOnInit(): void {
  }

  trackByQuestion(index: number, quiz: Quiz): string {
    return quiz.question;
  }
}
