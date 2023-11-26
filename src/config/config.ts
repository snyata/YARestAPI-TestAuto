// ALM and Gitlab configuration

const GITLAB_URL = 'https://gitlab.com';
const ALM_URL = 'https://alm.com';

export const configureGitlab = () => {
    const configGL = new Configuration({
      
      apiKey: process.env.GITLAB_TOKEN,
      baseUrl: GITLAB_URL,
    });
    return configGL;
  };

  export const configureALM = () => {
    const configALM = new Configuration({
      apiKey: process.env.ALMToken, //TODO: Find ALM Token or other Auth method
      baseUrl: ALM_URL,
    });
    return configALM;
  };