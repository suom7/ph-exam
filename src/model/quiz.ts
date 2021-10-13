export class Quiz {
  public number: string;
  public question: string;
  public additional: string;
  public options: Map<string, string>;
  public answer: string;

  constructor(number: string, question: string, additional: string, options: Map<string, string>, answer: string) {
    this.number = number;
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.additional = additional;
  }
}
