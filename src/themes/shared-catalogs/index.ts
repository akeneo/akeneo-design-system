import {Theme, color, fontSize, palette, fontFamily, colorAlternative} from '../../theme';

const sharedCatalogsTheme: Theme = {
  name: 'Shared Catalogs',
  color: {
    ...color,
    brand20: '#fdf0d8',
    brand40: '#fce1b2',
    brand60: '#fbd28b',
    brand80: '#fac365',
    brand100: '#f9b53f',
    brand120: '#c79032',
    brand140: '#956c25',
  },
  colorAlternative,
  fontSize,
  palette,
  fontFamily,
};

export {sharedCatalogsTheme};
