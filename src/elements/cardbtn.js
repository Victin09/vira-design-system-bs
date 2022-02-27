import VdsBtn from './btn';

export default class VdsCardBtn extends VdsBtn {
  static get vdsTag() {
    return 'vds-cardbtn';
  }

  static get vdsStyles() {
    return {
      display: 'block',
      padding: '1.5x 2x',
      border: '1bw :clear[hidden] :hover[1bw] :clear:hover[#mark]',
      flow: 'column',
      text: 'wrap :special[sb wrap]',
      transition: 'theme, radius',
      shadow: '0 :clear[1.5]',
    }
  }
}
