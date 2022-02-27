import WidgetBehavior from './widget';
import { isEqual, query, queryById } from '../helpers';

export default class ValueBehavior extends WidgetBehavior {
  static get params() {
    return {
      provideValue: false,
      contextValue: false,
    };
  }

  init() {
    super.init();

    this.linkContext('typedValue', (value) => {
      if (value === undefined && !this.value) return;

      this.setValue(value);
    }, 'parentValue');

    if (!this.value) {
      this.setValue(null);
    }
  }

  setValue(value) {
    if (isEqual(this.value, value)) return;

    this.value = value;

    this.apply();
  }

  fromHostValue(value) {
    super.fromHostValue(value);

    this.apply();
  }

  apply() {
    let { list, value } = this;

    if (list != null) {
      const listEl = list ? queryById(this.host, list) : query(this.host, '[vds-listbox]');

      if (listEl && listEl.vdsListBox && listEl.vdsListBox.options.length) {
        const listbox = listEl.vdsListBox;

        let html = '';

        this.setAria('label', false);

        if (listbox.multiple) {
          const values = listbox.value || [];

          if (values.length) {
            html += '<vds-flex gap flow="row wrap">';

            const rawValues = [];

            values.forEach(value => {
              const option = listbox.getOptionByValue(value);

              if (option) {
                html += `<vds-badge>${option.host.innerHTML}</vds-badge>`;
                rawValues.push(option.host.innerText);
              }
            });

            html += '&nbsp;</vds-flex>';

            this.setAria('label', rawValues.join(','));
          }
        } else {
          const option = listbox.getOptionByValue(value);

          if (option) {
            html = option.host.innerHTML;

            this.setAria('label', option.host.innerText);
          }
        }

        if (html) {
          this.setMod('placeholder', false);
          this.host.innerHTML = html;
        } else {
          this.setMod('placeholder', true);
          this.host.innerHTML = this.placeholder || '&nbsp;';
        }

        return;
      } else {
        setTimeout(() => {
          if (this.list != null) {
            this.apply();
          }
        });
      }
    }

    const hasValue = value != null;

    if (value == null) {
      value = '&nbsp;';
    } else if (value instanceof Date) {
      value = `<vds-datetime value="${String(value)}" date></vds-datetime>`;
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      value = `
        <vds-flex gap>
          <vds-datetime value="${String(value[0])}" date></vds-datetime>
          <vds-el>–</vds-el>
          <vds-datetime value="${String(value[1])}" date></vds-datetime>
        </vds-flex>
      `;
    } else if (typeof value === 'boolean') {
      value = value ? '<vds-icon name="check checkmark"></vds-icon>' : '<vds-icon name="minus"></vds-icon>';
    } else if (Array.isArray(value)) {
      value = `</vds-block>${value.join('</vds-block><vds-block>')}</vds-block>`;
    } else if (value instanceof File) {
      value = value.name;
    } else if (value instanceof FileList) {
      const files = [];

      for (const file of value) {
        files.push(file.name);
      }

      value = `</vds-block>${files.join('</vds-block><vds-block>')}</vds-block>`;
    } else if (typeof value === 'object') {
      value = `<pre>${JSON.stringify(value, null, 2)}</pre>`;
    }

    this.host.innerHTML = hasValue ? value : (this.placeholder || '&nbsp;');

    this.setMod('placeholder', !hasValue);
  }
}
