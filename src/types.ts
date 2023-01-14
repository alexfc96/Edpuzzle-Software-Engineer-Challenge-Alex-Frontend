export interface Video {
    _id: string;
    author: string;
    questions: Question[]
    title: string;
    videoId: string;
}

export interface Question {
    questionId: string;
    time: number;
    text: string;
}