export type ChatbotMessageType = 'chat' | 'raw' | string;

export type XChatMessageType = {
  content: string;
  role: 'user' | 'system' | 'assistant' | 'tool' | string;
  name?: string;
  [k: string]: any;
};
