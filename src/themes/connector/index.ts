import {Theme, color, fontSize, palette, fontFamily, colorAlternative} from '../../theme';

const connectorTheme: Theme = {
  name: 'Connector',
  color: {
    ...color,
    brand20: '#dbdef3',
    brand40: '#b8bde8',
    brand60: '#959cdc',
    brand80: '#727bd1',
    brand100: '#4f5bc6',
    brand120: '#3b4494',
    brand140: '#272d62',
  },
  colorAlternative,
  fontSize,
  palette,
  fontFamily,
};

export {connectorTheme};
