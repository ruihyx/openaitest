import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './response';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private http: HttpClient) { }


  sendChatMessage(messages: Message[]) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // replace with your actual OpenAI key
    };
    const body = {
      model: "gpt-3.5-turbo",
      messages,
    };
    return this.http.post(url, body, { headers });
  }
}
