import { html, fixture, expect } from '../utils';
import '../../dist/index';

describe('vds-base', () => {
  it('has default "vds" attribute', async () => {
    const el = await fixture(html`
      <vds-base>Base element</vds-base>
    `);

    expect(el.hasAttribute('vds'));
  });
});
