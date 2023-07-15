import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Response } from '../response';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  content:string = "";
  answer:string[] =[]

  constructor(private chatService:ChatService){
  }

  sendMessage(){
    const messages = [
    
      {
        role: 'user',
        content: this.content
      }
    ];
  console.log("cklik")
    this.chatService.sendChatMessage(messages).subscribe((response) => {
      let data: Response = response as Response;
     this.answer = data.choices.map(choice => choice.message.content);
    },(error) => {
      console.log(error);
  });

    
  }
}
