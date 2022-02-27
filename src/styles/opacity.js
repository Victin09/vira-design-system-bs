import { parseAttr } from '../helpers';

export default function opacityAttr(val) {
  const { values } = parseAttr(val);

  return [{
    opacity: values[0] || '1',
  }, {
    $suffix: '>*',
    '--context-opacity': values[0] || '1',
  }];
}
