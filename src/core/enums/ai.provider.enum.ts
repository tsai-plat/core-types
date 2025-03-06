export type AiProvider =
  | 'dify'
  | 'comfyui'
  | 'qianfan'
  | 'qwen'
  | 'spark'
  | 'openai'
  | 'kimi'
  | string;

export enum AiProviderEnum {
  DIFY_PLATFORM = 'dify',
  COMFY_UI_PLATFORM = 'comfyui',
  BAIDU_QIANFAN = 'qianfan',
  ALI_TONGYI = 'qwen',
  XUNFEI_SPARK = 'spark',
  OPENAI = 'openai',
  KIMI = 'kimi',
  DEEPSEEK = 'deepseekai',
  CUSTOMIZE_OLLAMA = 'customizeollama',
}
