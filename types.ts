export interface Video {
  _id: string;
  author: string;
  questions: Question[];
  title: string;
  videoId: string;
  views: [View];
}

export interface Question {
  questionId: string;
  time: number;
  text: string;
  shown?: boolean;
}

export interface View {
  _id: string;
  timestamp: Date;
}
