export type AIRole = 'user' | 'system' | 'assistant' | string;
export type AIMessage = {
  role: AIRole;
  content: string;
  [k: string]: any;
};

/**
 * backend prompt engineering params
 *
 * @property chatid client-end request ui store id (required)
 *  like chatbot chatid or agent feature id
 * @property chatname client name <optional>
 * @property uuid reference back-end prompt engineering unique id
 * @property msgid client chat messages one item assigned id,use for regenerate
 * @property provider the ai model provider like ali,wenxin or dify platform
 *
 */
export type AIOptions = {
  chatid: string;
  chatname?: string;
  uuid?: number;
  msgid?: string;
  provider?: string;
  [k: string]: any;
};
/**
 * @see https://js.langchain.com.cn/docs/modules/prompts/prompt_templates/
 * @property template : user question or prompt template
 *  if inputVariables has value will inject into template
 *
 */
export type AIInput = {
  template: string;
  model?: string;
  messages?: AIMessage[];
  user?: string;
  tools?: Array<any>;
  inputVariables?: Record<string, any>;
  aioptions?: AIOptions;
  [k: string]: any;
};

/**
 * @property streaming
 */
export type AIBaseRequest = {
  input: AIInput;
  streaming?: boolean;
  user?: string;
};
export type DifyFileType = 'documents' | 'image' | 'audio' | 'video' | 'custom';
export type DifyAIFile = {
  type: DifyFileType;
  transfer_method?: string;
  url?: string;
  upload_file_id?: string;
};
/**
 * @description 标准Chat bot 兼容langchain JS lib
 * @property chatid the client unqunie id
 * @property msgid the chat message id
 *
 */
export type CommChatbotRequest = AIBaseRequest & {
  chatid?: string;
  msgid?: string;
  [k: string]: any;
};

/**
 * 兼容Dify 平台
 * @property chatid the client unqunie id
 * @property response_mode 优先级高于 streaming
 */
export type AgentRequest = AIBaseRequest & {
  chatid: string;
  response_mode?: 'blocking' | 'stream' | string;
  files?: Array<DifyAIFile>;
  [k: string]: any;
};

/**
 * @description 跨模态兼容 请求
 * @property chatid the client unqunie id
 * @property prompt 正向文本提示词
 * @property negative_prompt 负向文本提示词
 * @property image 参考图片
 */
export type CrossModalRequest = AIBaseRequest & {
  chatid: string;
  prompt?: string;
  negative_prompt?: string;
  image?: string;
  [k: string]: any;
};
