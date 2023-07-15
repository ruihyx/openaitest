export interface Response {
    choices: { message: Message }[];
  }
export interface Message {
    role: string
    content: string
  }
