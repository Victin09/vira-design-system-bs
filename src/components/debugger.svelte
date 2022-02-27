{#if target}
  <vds-block>
    Debugger for
    <vds-link scrollto={target.vdsUniqId}>
      {target.tagName.toLowerCase()}#{target.vdsUniqId}
    </vds-link>
  </vds-block>
  <vds-block>
    <vds-el text="b">el{target.vdsDebugId}</vds-el> in console
  </vds-block>
  <vds-tablist value="eventlog" border="inside bottom" control="tabs-header[padding]">
    <vds-tab control="eventlog" value="eventlog" trigger>
      event log
    </vds-tab>
    <vds-tab control="attributes" value="attributes" trigger>
      attributes
    </vds-tab>
    {#each behaviors as behavior}
      <vds-tab control={behavior.$$name} value={behavior.$$name} trigger>
        {behavior.$$name}
      </vds-tab>
    {/each}
  </vds-tablist>

  <vds-block height="initial 15 15" scrollbar overflow="auto">
    <vds-block id="eventlog">
      {#each eventLog as log}
        <vds-flex gap>
          <vds-block>{log.timestamp}</vds-block>
          <vds-block width="7">{log.name}</vds-block>
          <vds-block>
            {log.detail !== undefined ? JSON.stringify(log.detail, null, 2) : ''}
          </vds-block>
        </vds-flex>
      {/each}
    </vds-block>
    <vds-grid id="attributes" columns="auto 1fr" gap="0 1x">
      {#each attrs as attr}
        <vds-block text="b">[{attr.name}]</vds-block>
        <vds-block>{attr.value}</vds-block>
      {/each}
    </vds-grid>
    {#each behaviors as behavior}
      <vds-block id={behavior.$$name} text="pre">
        <vds-block place="sticky top" fill="bg">
          <vds-el text="b">{behavior.$$name}{target.vdsDebugId}</vds-el> in console
        </vds-block>
        {logBehaviorState(behavior)}
      </vds-block>
    {/each}
  </vds-block>
{/if}

<script>
// export let host;
/**
 * @type {VdsElement}
 */
export let target = null;

/**
 * @type {VdsElement}
 */
let currentTarget = null;
let eventLog = [];
let loggers = {};

export function log(name, detail = undefined) {
  eventLog = [{
    name,
    detail,
    timestamp: Date.now(),
  }, ...eventLog];
}

const eventList = ['input', 'tap', 'log'];
const ignoreProps = ['props', 'propsList', 'host', '$$name', 'component', 'ref'];

function logBehaviorState(behavior) {
  return JSON.stringify(Object
    .entries(behavior)
    .reduce((state, [prop, value]) => {
      if (!ignoreProps.includes(prop)
        && typeof value !== 'function'
        && !prop.startsWith('_')) {
        try {
          JSON.stringify(value);

          state[prop] = value;
        } catch(e) {
          state[prop] = '{OBJECT}';
        }
      }

      return state;
    }, {}), null, 2);
}

function createEventLogger(name) {
  return (evt) => {
    eventLog = [{
      name,
      timestamp: Date.now(),
      detail: evt.detail,
    }, ...eventLog];
  };
}

$: (() => {
  if (currentTarget === target) return;

  if (currentTarget) {
    eventList.forEach(name => {
      currentTarget.removeEventListener(name, loggers[name]);
    });
  }

  if (target) {
    eventList.forEach(name => {
      loggers[name] = createEventLogger(name);
      target.addEventListener(name, loggers[name]);
    });

    currentTarget = target;
  }
})();

setInterval(() => {
  behaviors = behaviors;
  attrs = attrs;
}, 500);

$: behaviors = target
  ? Object.values(target.vdsBehaviors).filter(beh => beh.$$name !== 'debug' && beh.params && beh.params.widget)
  : [];
$: attrs = target ? [...target.attributes].reduce((list, { name, value }) => {
  value = value === '' ? 'true' : `"${value}"`;

  list.push({
    name,
    value,
  });

  return list;
}, []) : [];
</script>
