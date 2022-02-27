import VdsEl from './el';

export default class VdsTooltip extends VdsEl {
  static get vdsTag() {
    return 'vds-tooltip';
  }

  static get vdsId() {
    return 'tooltip';
  }

  static get vdsBehaviors() {
    return {
      fixate: true,
      tooltip: true,
    };
  }

  static get vdsAttrs() {
    return {
      theme: '',
    };
  }

  static get vdsStyles() {
    return {
      display: 'none :tooltip[block]',
      shadow: '',
      padding: '.5x 1x',
      z: 'front',
      opacity: '1 :hidden[0]',
      transition: 'opacity',
      place: 'outside-top',
      drop: '',
      fill: '#bg',
      color: '#text',
      radius: '1r',
      border: '1bw outside',
      size: 'xs',
      interactive: 'no',
      text: 'b wrap',
      width: 'min-content initial 20rem',
      space: 'remove',
      sizing: 'content',
    };
  }
}
