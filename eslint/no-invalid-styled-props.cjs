const HTML_ELEMENTS = new Set([
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
  'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins',
  'kbd',
  'label', 'legend', 'li', 'link',
  'main', 'map', 'mark', 'meta', 'meter',
  'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output',
  'p', 'param', 'picture', 'pre', 'progress',
  'q',
  'rp', 'rt', 'ruby',
  's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg',
  'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
  'u', 'ul',
  'var', 'video',
  'wbr'
]);

const REACT_RESERVED_PROPS = new Set([
  'key',
  'ref',
  'children',
  'dangerouslySetInnerHTML',
  'suppressContentEditableWarning',
  'suppressHydrationWarning'
]);

const VALID_DOM_PROPS = new Set([
  'className',
  'style',
  'id',
  'onClick',
  'onChange',
  'onBlur',
  'onFocus',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseDown',
  'onMouseUp',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onSubmit',
  'disabled',
  'readOnly',
  'placeholder',
  'value',
  'defaultValue',
  'checked',
  'defaultChecked',
  'type',
  'name',
  'href',
  'src',
  'alt',
  'title',
  'width',
  'height',
  'role',
  'tabIndex',
  'autoFocus',
  'autoComplete',
  'required',
  'pattern',
  'min',
  'max',
  'step',
  'multiple',
  'accept',
  'htmlFor',
  'target',
  'rel',
]);

function isStyledComponentCall(node) {
  if (!node) {
    return false;
  }

  if (node.type === 'TaggedTemplateExpression') {
    const tag = node.tag;

    if (tag.type === 'MemberExpression') {
      const object = tag.object;
      const property = tag.property;

      if (object.type === 'Identifier' && object.name === 'styled' &&
          property.type === 'Identifier' && HTML_ELEMENTS.has(property.name)) {
        return true;
      }
    }

    if (tag.type === 'CallExpression') {
      const callee = tag.callee;
      if (callee && callee.type === 'Identifier' && callee.name === 'styled') {
        return true;
      }
    }
  }

  if (node.type === 'CallExpression') {
    const callee = node.callee;

    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;

      if (object.type === 'Identifier' && object.name === 'styled' &&
          property.type === 'Identifier' && HTML_ELEMENTS.has(property.name)) {
        return true;
      }
    }

    if (callee.type === 'CallExpression') {
      const innerCallee = callee.callee;
      if (innerCallee && innerCallee.type === 'Identifier' && innerCallee.name === 'styled') {
        return true;
      }
    }
  }

  return false;
}

function getPropNamesFromTypeAnnotation(typeAnnotation) {
  const propNames = [];

  if (!typeAnnotation) {
    return propNames;
  }

  if (typeAnnotation.type === 'TSTypeAnnotation') {
    typeAnnotation = typeAnnotation.typeAnnotation;
  }

  if (typeAnnotation.type === 'TSIntersectionType') {
    typeAnnotation.types.forEach(type => {
      propNames.push(...getPropNamesFromTypeAnnotation(type));
    });
  } else if (typeAnnotation.type === 'TSTypeLiteral') {
    typeAnnotation.members.forEach(member => {
      if (member.type === 'TSPropertySignature' && member.key) {
        if (member.key.type === 'Identifier') {
          propNames.push(member.key.name);
        }
      }
    });
  }

  return propNames;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce using transient props (prefixed with $) for styled-components to avoid passing non-standard props to DOM elements',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      useTransientProp: 'Prop "{{propName}}" will be passed to DOM element. Use transient prop "${{propName}}" instead to prevent React 18 warnings.',
    },
    schema: [],
  },

  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.init && isStyledComponentCall(node.init)) {
          const typeParams = node.init.typeParameters || node.init.typeArguments;

          if (!typeParams || !typeParams.params || typeParams.params.length === 0) {
            return;
          }

          const propsType = typeParams.params[0];
          const propNames = getPropNamesFromTypeAnnotation(propsType);

          propNames.forEach(propName => {
            if (propName.startsWith('$')) {
              return;
            }

            if (REACT_RESERVED_PROPS.has(propName)) {
              return;
            }

            if (VALID_DOM_PROPS.has(propName)) {
              return;
            }

            if (propName.startsWith('data-') || propName.startsWith('aria-')) {
              return;
            }

            const propsTypeNode = typeParams.params[0];
            context.report({
              node: propsTypeNode,
              messageId: 'useTransientProp',
              data: {
                propName,
              },
            });
          });
        }
      },
    };
  },
};
