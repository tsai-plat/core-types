export enum ClientTypeEnum {
  mobileChat = 'mobchat',
  mobileWxChat = 'mobwechat',
  pcAgent = 'pcagent',
  system = 'system',
  saAdmin = 'systemsa',
}

const allSupportClientTypes: string[] = (() => {
  const all: string[] = ['_'];
  for (const clit in ClientTypeEnum) {
    all.push(clit.valueOf().toString());
  }
  return all;
})();

export function validClientType(clientType: string): boolean {
  return allSupportClientTypes.includes(clientType);
}
