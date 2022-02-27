<vds-heading>Playground</vds-heading>

{#if show('spin')}
  <vds-heading level="2">Spin</vds-heading>

  <vds-card gap="1x">
<!--    <vds-props hiding-time=".5s" transition=".5s"></vds-props>-->
    <vds-pane>
      <vds-btn control="#spin[!hidden] #btn[!disabled]" toggle>Toggle loading</vds-btn>
      <vds-btn id="btn" special>
        <vds-spin id="spin" hidden></vds-spin>
        <vds-in>Submit</vds-in>
      </vds-btn>
    </vds-pane>

    <vds-pane>
      <vds-btn control="#btn[loading]" toggle>Toggle loading</vds-btn>
      <vds-btn id="btn" special>
        <vds-in>Submit</vds-in>
      </vds-btn>
    </vds-pane>
  </vds-card>
{/if}

{#if show('placeholder')}
  <vds-heading level="2">Placeholder</vds-heading>

  <vds-card gap="1x">
    <vds-card fill="#special-bg.04" clear>
      <vds-grid columns="auto 1fr" gap="2x">
        <vds-ph size="5x" is-circle></vds-ph>
        <vds-flow gap="3x" padding="top 1.5x">
          <vds-ph width="15x"></vds-ph>
          <vds-flow gap="2x">
            <vds-ph></vds-ph>
            <vds-ph></vds-ph>
            <vds-ph></vds-ph>
            <vds-ph></vds-ph>
          </vds-flow>

  <!--        <vds-ph></vds-ph>-->
  <!--        <vds-ph></vds-ph>-->
        </vds-flow>
      </vds-grid>
    </vds-card>
  </vds-card>
{/if}

{#if show('validation')}
  <vds-heading level="2">Properties</vds-heading>

  <vds-card gap="1x">
    <vds-form>
      <vds-field>
        <vds-btn id="digit" width="10" columns="1fr auto">
          <vds-value list placeholder="placeholder"></vds-value>
          <vds-dropdownicon></vds-dropdownicon>
          <vds-popuplistbox>
            <vds-option value="one">One</vds-option>
            <vds-option value="two">Two</vds-option>
            <vds-option value="three">Three</vds-option>
            <vds-option value="four">Four</vds-option>
            <vds-option value="five">Five</vds-option>
            <vds-option value="six">Six</vds-option>
            <vds-option value="seven">Seven</vds-option>
          </vds-popuplistbox>
        </vds-btn>

        <vds-check for="digit" assert={sixValidator}>
          Value should be SIX
        </vds-check>
      </vds-field>

      <vds-btn action="submit">Submit</vds-btn>

    </vds-form>
  </vds-card>
{/if}

{#if show('props')}
  <vds-heading level="2">Properties</vds-heading>

  <vds-card gap="1x">
    <vds-props my-color="@white-color"></vds-props>
    <vds-block fill="#dark" color="#my">
      Text
    </vds-block>
  </vds-card>
{/if}

{#if show('nested')}
  <vds-heading level="2">Nested actions</vds-heading>

  <vds-card gap="1x">
    <vds-btn on:tap={() => console.log('tap out')}>
      Parent button
      <vds-btn on:tap={() => console.log('tap in')}>
        <vds-icon name="close"></vds-icon>
      </vds-btn>
    </vds-btn>

    <vds-btn on:tap={() => console.log('tap out')}>
      Parent button
      <vds-btn disabled on:tap={() => console.log('tap in')}>
        <vds-icon name="close"></vds-icon>
      </vds-btn>
    </vds-btn>
  </vds-card>
{/if}

{#if show('tooltip')}
  <vds-heading level="2">Tooltip</vds-heading>

  <vds-card gap="1x">
    <vds-btn>
      <vds-tooltip>Some tooltip</vds-tooltip>
      Hover me!
    </vds-btn>
  </vds-card>
{/if}

{#if show('boolean')}
  <vds-heading level="2">Boolean state</vds-heading>

  <vds-card gap="1x">
    <vds-pane flow="row wrap">
      <vds-btn disabled={true}>Disabled</vds-btn>
      <vds-btn disabled={false}>Not disabled</vds-btn>
      <vds-btn special={true}>Special</vds-btn>
      <vds-btn special={false}>Not special</vds-btn>
      <vds-btn success={true}>Success</vds-btn>
      <vds-btn success={false}>Not success</vds-btn>
      <vds-btn warning={true}>Warning</vds-btn>
      <vds-btn warning={false}>Not warning</vds-btn>
      <vds-btn danger={true}>Danger</vds-btn>
      <vds-btn danger={false}>Not danger</vds-btn>
    </vds-pane>
  </vds-card>
{/if}

{#if show('svg')}
  <vds-heading level="2">Built-in Themes</vds-heading>

  <vds-card gap="1x">
    <vds-svg color="#text :hover[#special]" use-hover src={svgImages.logo}></vds-svg>
  </vds-card>
{/if}

{#if show('builtin')}
  <vds-heading level="2">Built-in Themes & Colors</vds-heading>

  <vds-card gap="1x">
    <vds-pane flow="row wrap">
      <vds-btn success>Success</vds-btn>
      <vds-btn danger>Danger</vds-btn>
      <vds-btn warning>Warning</vds-btn>
      <vds-btn success clear>Clear Success</vds-btn>
      <vds-btn danger clear>Clear Danger</vds-btn>
      <vds-btn warning clear>Clear Warning</vds-btn>
      <vds-btn success special>Special Success</vds-btn>
      <vds-btn danger special>Special Danger</vds-btn>
      <vds-btn warning special>Special Warning</vds-btn>
    </vds-pane>
    <vds-pane flow="row wrap">
      <vds-btn theme="blue">Blue</vds-btn>
      <vds-btn theme="cyan">Cyan</vds-btn>
      <vds-btn theme="green">Green</vds-btn>
      <vds-btn theme="yellow">Yellow</vds-btn>
      <vds-btn theme="orange">Orange</vds-btn>
      <vds-btn theme="red">Red</vds-btn>
      <vds-btn theme="purple">Purple</vds-btn>
      <vds-btn theme="violet">Violet</vds-btn>
    </vds-pane>
    <vds-pane flow="row wrap">
      <vds-label color="#blue">Blue</vds-label>
      <vds-label color="#cyan">Cyan</vds-label>
      <vds-label color="#green">Green</vds-label>
      <vds-label color="#yellow">Yellow</vds-label>
      <vds-label color="#orange">Orange</vds-label>
      <vds-label color="#red">Red</vds-label>
      <vds-label color="#purple">Purple</vds-label>
      <vds-label color="#violet">Violet</vds-label>
    </vds-pane>
  </vds-card>
{/if}

{#if show('mark')}
  <vds-heading level="2">Marks</vds-heading>

  <vds-card>
    <vds-pane flow="row wrap">
      <vds-mark>Default Mark</vds-mark>
      <vds-mark special>Special Mark</vds-mark>
    </vds-pane>
  </vds-card>
{/if}

{#if show('badge')}
  <vds-heading level="2">Badges</vds-heading>

  <vds-card>
    <vds-pane flow="row wrap">
      <vds-badge>Default Badge</vds-badge>
      <vds-badge success>Success Badge</vds-badge>
      <vds-badge danger>Danger Badge</vds-badge>
      <vds-badge warning>Warning Badge</vds-badge>
      <vds-badge special>Special Badge</vds-badge>
    </vds-pane>
  </vds-card>
{/if}

{#if show('radius')}
  <vds-heading level="2">Radius</vds-heading>

  <vds-card>
    <vds-pane flow="row wrap">
      <vds-btn radius="leaf">Leaf</vds-btn>
      <vds-btn radius="backleaf">BackLeaf</vds-btn>
      <vds-btn radius="leaf 2r .5r">Custom Leaf</vds-btn>
    </vds-pane>
  </vds-card>
{/if}

{#if show('test-input')}
  <vds-heading level="2">Input test</vds-heading>

  <vds-card as="section">
    <vds-pane>
      <vds-input value={inputTestValue} on:input={evt => { inputTestValue = evt.detail; console.log('??', evt.detail) }}></vds-input>

      <vds-btn on:tap={() => { inputTestValue = '123' }}>Clear</vds-btn>

      <vds-block>{inputTestValue}</vds-block>
    </vds-pane>
  </vds-card>
{/if}

{#if show('button')}
  <vds-heading level="2">Button states</vds-heading>

  <vds-card as="section">
    <vds-pane flow="row wrap">
      <vds-btn>Normal</vds-btn>
      <vds-btn use-action="n">Default</vds-btn>
      <vds-btn use-action="n" is-hover mark>Hover</vds-btn>
      <vds-btn use-action="n" is-active>Pressed</vds-btn>
      <vds-btn use-action="n" is-pressed>Toggled</vds-btn>
      <vds-btn use-action="n" outline="focus" is-focus>Focused</vds-btn>
      <vds-btn use-action="n" disabled>Disabled</vds-btn>
    </vds-pane>

    <vds-pane flow="row wrap">
      <vds-btn clear>Normal</vds-btn>
      <vds-btn clear use-action="n">Default</vds-btn>
      <vds-btn clear use-action="n" is-hover mark>Hover</vds-btn>
      <vds-btn clear use-action="n" is-active>Pressed</vds-btn>
      <vds-btn clear use-action="n" is-pressed>Toggled</vds-btn>
      <vds-btn clear use-action="n" outline="focus" is-focus>Focused</vds-btn>
      <vds-btn clear use-action="n" disabled>Disabled</vds-btn>
    </vds-pane>

    <vds-pane flow="row wrap">
      <vds-btn special>Normal</vds-btn>
      <vds-btn special use-action="n">Default</vds-btn>
      <vds-btn special use-action="n" is-hover mark>Hover</vds-btn>
      <vds-btn special use-action="n" is-active>Pressed</vds-btn>
      <vds-btn special use-action="n" is-pressed>Toggled</vds-btn>
      <vds-btn special use-action="n" outline="focus" is-focus>Focused</vds-btn>
      <vds-btn special use-action="n" disabled>Disabled</vds-btn>
    </vds-pane>

    <vds-pane flow="row wrap">
      <vds-btn>Default Button</vds-btn>
      <vds-btn special>Special Button</vds-btn>
      <vds-btn danger>Danger Button</vds-btn>
      <vds-btn danger special>Danger Special Button</vds-btn>
    </vds-pane>
  </vds-card>
{/if}

{#if show('group-radius')}
  <vds-heading level="2">Group radius</vds-heading>

  <vds-card as="section">
    <vds-props transition=".2s"></vds-props>
    <vds-btngroup>
      <vds-btn>A</vds-btn>
      <vds-btn>B</vds-btn>
      <vds-btn>C</vds-btn>
    </vds-btngroup>
  </vds-card>
{/if}

{#if show('format')}
  <vds-heading level="2">Formatting</vds-heading>

  <vds-card as="section">
    <vds-block><vds-num value="1234"></vds-num></vds-block>
    <vds-block><vds-num value="1234" grouping="no"></vds-num></vds-block>
  </vds-card>
{/if}

{#if show('group')}
  <vds-heading level="2">Group radius</vds-heading>

  <vds-card as="section">
    <vds-flex group-radius="column" flow="column">
      <vds-btn>1</vds-btn>
      <vds-btn>2</vds-btn>
    </vds-flex>
  </vds-card>
{/if}

{#if show('decoration')}
  <vds-heading level="2">Code</vds-heading>

  <vds-card as="section">
    <vds-el text="u #special.50" color="special">Special</vds-el>
  </vds-card>
{/if}

{#if show('snippet')}
  <vds-heading level="2">Code</vds-heading>

  <vds-card as="section" gap>
    <vds-code special padding="1x 2x" overflow="auto">
      <pre>
        <vds-input is-big placeholder="Input"></vds-input>
        [[ ]] ## qqsdasd

        #[[something]]#
      </pre>
    </vds-code>

    <vds-code value={codeExample}></vds-code>

    <vds-block>
      This is something <vds-cd><pre>var a = '123';</pre></vds-cd>. This is something <vds-cd><pre>var a = '123';</pre></vds-cd>. This is something <vds-cd><pre>var a = '123';</pre></vds-cd>. This is something <vds-cd><pre>var a = '123';</pre></vds-cd>.
    </vds-block>
  </vds-card>
{/if}

{#if show('radio')}
  <vds-heading level="2">Radio buttons</vds-heading>

  <vds-card as="section" flow="row">
    <vds-grid
      display="inline-grid" columns="auto auto" gap="1x 2x">
      <vds-radiogroup flow="column" gap value="second">
        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="first"></vds-radio>
          <vds-label>First value</vds-label>
        </vds-flex>

        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="second"></vds-radio>
          <vds-label>Second value</vds-label>
        </vds-flex>

        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="third"></vds-radio>
          <vds-label>Third value</vds-label>
        </vds-flex>
      </vds-radiogroup>

      <vds-radiogroup flow="column" gap value="second" disabled>
        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="first"></vds-radio>
          <vds-label>First value</vds-label>
        </vds-flex>

        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="second"></vds-radio>
          <vds-label>Second value</vds-label>
        </vds-flex>

        <vds-flex gap="1x" items="center">
          <vds-radio labelledby=":next" value="third"></vds-radio>
          <vds-label>Third value</vds-label>
        </vds-flex>
      </vds-radiogroup>
    </vds-grid>
  </vds-card>
{/if}

{#if show('color')}
  <vds-card as="section">
    <vds-props
      some-color="^root :high-contrast[hsl(1, 80%, 50%)] :low-contrast[hsl(180, 80%, 50%)]"
      custom-color="#aabbcc" other-color="color(custom)"></vds-props>
    <vds-props some-other-color="hue(1 100)"></vds-props>
    <vds-block height="5" fill="some 50%"></vds-block>
    <vds-block height="5" fill="#some-other"></vds-block>
  </vds-card>
{/if}

{#if show('outline')}
  <vds-card as="section">
    <vds-btn outline="focus">Focus</vds-btn>
    <vds-btn outline="focus 1x">Focus 1x</vds-btn>
    <vds-btn outline="focus #special">Focus Special</vds-btn>
    <vds-btn outline="inset focus">Inset</vds-btn>
    <vds-btn outline="focus visible">Focus visible</vds-btn>
    <vds-cardbtn outline="n">
      <vds-el outline="focus-outside" box="y">On focus outside</vds-el>
    </vds-cardbtn>
    <vds-card outline="focus-inside">
      On focus inside
      <vds-btn outline="n">Button</vds-btn>
    </vds-card>
  </vds-card>
{/if}

{#if show('overflow')}
  <vds-card as="section" width="10" height="10" overflow="no auto">
    <vds-card width="20" height="20"></vds-card>
  </vds-card>
{/if}

{#if show('base')}
  <vds-card as="section">
    <vds-base size="(100vw / 80)|1rem"></vds-base>
    Everybody is looking for something
  </vds-card>
{/if}

{#if show('snap')}
  <vds-grid columns="repeat(4, 1fr)" height="10rem" width="max 20" overflow="auto" snapping="x start"
           gap="2x">
    <vds-card height="100%" width="20" fill="hue(0)"></vds-card>
    <vds-card height="100%" width="20" fill="hue(90)"></vds-card>
    <vds-card height="100%" width="20" fill="hue(180)"></vds-card>
    <vds-card height="100%" width="20" fill="hue(270)"></vds-card>
  </vds-grid>
{/if}

{#if show('touch')}
  <vds-card as="section">
    <vds-btn toggle>
      Button
      <vds-tooltip>Tooltip</vds-tooltip>
    </vds-btn>
  </vds-card>
{/if}

{#if show('heading')}
  <vds-card as="section">
    <vds-props
      h1-font-size="2rem||1.75rem"
      h1-line-height="2.5rem"></vds-props>
    <vds-heading level="3">Heading</vds-heading>

    <vds-block color="hue(280 80)">
      <vds-heading level="4">Heading with inherited color</vds-heading>
      <vds-block>Paragraph text.</vds-block>

      <vds-block theme padding="left">
        <vds-heading level="4">Heading with inherited color</vds-heading>
        <vds-block>Paragraph text.</vds-block>
      </vds-block>
    </vds-block>
  </vds-card>
{/if}

{#if show('notifications')}
  <vds-block theme="tone" box="y" width="20">
    <vds-card width="100% - 4x" height="100%" place="top left 2x"></vds-card>
    <vds-card width="100% - 2x" height="100%" place="top left 1x"></vds-card>
    <vds-card gap>
      <vds-h6>
        <vds-icon name="message-circle"></vds-icon>
        <vds-strong>Susan</vds-strong>
      </vds-h6>
      <vds-block text="i">
        Can I call you now?
      </vds-block>
    </vds-card>
  </vds-block>
{/if}

{#if show('basics')}
  <vds-card as="section">
    <vds-el
      border
      radius
      padding="1x 2x"
      cursor="pointer"
      mark="hover"
      nx-active
      inset="active">
      Button
    </vds-el>
  </vds-card>
{/if}

{#if show('colors')}
  <vds-gridtable columns="auto auto 1fr" border text="nowrap">
    <vds-attrs for="cell" padding></vds-attrs>
    <vds-columnheader>Name</vds-columnheader>
    <vds-columnheader>Contrast</vds-columnheader>
    <vds-columnheader></vds-columnheader>
    <vds-cell>system-black</vds-cell>
    <vds-cell>~MIN~</vds-cell>
    <vds-cell fill="#system-black"></vds-cell>
    <vds-cell>black</vds-cell>
    <vds-cell>100</vds-cell>
    <vds-cell fill="#black"></vds-cell>
    <vds-cell>dark</vds-cell>
    <vds-cell>85</vds-cell>
    <vds-cell fill="#dark"></vds-cell>
    <vds-cell>darkgrey</vds-cell>
    <vds-cell>high</vds-cell>
    <vds-cell fill="#darkgrey"></vds-cell>
    <vds-cell>grey-text</vds-cell>
    <vds-cell>auto</vds-cell>
    <vds-cell fill="#grey-text"></vds-cell>
    <vds-cell>grey</vds-cell>
    <vds-cell>auto</vds-cell>
    <vds-cell fill="#grey"></vds-cell>
    <vds-cell>lightgrey</vds-cell>
    <vds-cell>low</vds-cell>
    <vds-cell fill="#lightgrey"></vds-cell>
    <vds-cell>light</vds-cell>
    <vds-cell>5</vds-cell>
    <vds-cell fill="#light"></vds-cell>
    <vds-cell>white</vds-cell>
    <vds-cell>0</vds-cell>
    <vds-cell fill="#white"></vds-cell>
    <vds-cell>system-white</vds-cell>
    <vds-cell>~MAX~</vds-cell>
    <vds-cell fill="#system-white"></vds-cell>
  </vds-gridtable>

  <vds-card gap="2x">
    <vds-block color="success">Success text</vds-block>
    <vds-block color="danger">Danger text</vds-block>
    <vds-block color="warning">Warning text</vds-block>
  </vds-card>
{/if}

{#if show('nav')}
  <vds-nav as="section">
    <vds-menu flow="row">
      <vds-attrs for="menuitem" border="0 :current[1sw bottom inside #special]"></vds-attrs>
      <vds-menuitem to="/">Home</vds-menuitem>
      <vds-menuitem to="/about">About</vds-menuitem>
    </vds-menu>
  </vds-nav>
{/if}

{#if show('borders')}
  <vds-flow gap>
    <vds-flex gap>
      <vds-attrs for="vds-block" height="3" width="3" fill="subtle"></vds-attrs>

      <vds-block radius="round" border="1x hue(320)"></vds-block>
      <vds-block radius="round" border="1x top #special"></vds-block>
      <vds-block radius="round" border="1x right #special"></vds-block>
      <vds-block radius="round" border="1x bottom #special"></vds-block>
      <vds-block radius="round" border="1x left #special"></vds-block>
    </vds-flex>

    <vds-flex gap>
      <vds-attrs for="vds-block" height="5" width="3" fill="subtle"></vds-attrs>
      <vds-block radius="round" border="1x #special"></vds-block>
      <vds-block radius="round" border="1x top #special"></vds-block>
      <vds-block radius="round" border="1x right #special"></vds-block>
      <vds-block radius="round" border="1x bottom #special"></vds-block>
      <vds-block radius="round" border="1x left #special"></vds-block>
    </vds-flex>
  </vds-flow>
{/if}

{#if show('code')}
  <vds-card>
    <vds-markdown>
      <pre>
        # What?

        ```
        var a = #[['123']]#;
        var b = /.+/g;
        ```
      </pre>
    </vds-markdown>
  </vds-card>
{/if}

{#if show('appear')}
  <vds-card>
    <vds-block height="100vh"></vds-block>
    <vds-btn nx-appear="toggle timeout(1000)" opacity="0 :appear[1]" move="8x 0 :appear[0]"
            transition="opacity .5s, move .5s">Button
    </vds-btn>
    <vds-block height="100vh"></vds-block>
  </vds-card>
{/if}

{#if show('offset')}
  <vds-card>
    <vds-cardbtn
      nx-offset transition="move :offset[no]"
      move="(--offset-x * 1x) (--offset-y * 1x)" height="5" width="15" display="grid"
      items="center">
      Interactive button
    </vds-cardbtn>
  </vds-card>
{/if}

{#if show('menu')}
  <vds-nav label="Main">
    <vds-menu border width="12" nx-debug>
      <vds-menuitem>Item 1</vds-menuitem>
      <vds-menuitem>Item 2</vds-menuitem>
      <vds-menuitem>Item 3</vds-menuitem>
      <vds-menuitem content="space-between">
        <vds-el>Item 4</vds-el>
        <vds-dropdownicon></vds-dropdownicon>
        <vds-popup padding="0">
          <vds-menu>
            <vds-menuitem>Item 1</vds-menuitem>
            <vds-menuitem content="space-between">
              <vds-el>Item 2</vds-el>
              <vds-dropdownicon></vds-dropdownicon>
              <vds-popup padding="0">
                <vds-menu>
                  <vds-menuitem>Item 1</vds-menuitem>
                  <vds-menuitem>Item 2</vds-menuitem>
                </vds-menu>
              </vds-popup>
            </vds-menuitem>
          </vds-menu>
        </vds-popup>
      </vds-menuitem>
    </vds-menu>
  </vds-nav>

  <vds-debug></vds-debug>
{/if}

{#if show('spacer')}
  <vds-block>
    <vds-card>
      Card 1
    </vds-card>
    <vds-spacer size="2x"></vds-spacer>
    <vds-card>
      Card 2
    </vds-card>
  </vds-block>
{/if}

{#if show('circle')}
  <vds-card>
    <vds-pane gap>
      <vds-circle></vds-circle>
      <vds-circle size="xl"></vds-circle>
      <vds-circle special></vds-circle>
    </vds-pane>
  </vds-card>
{/if}

{#if show('gradients')}
  <vds-flow gap="2x" size="lg">
    <vds-attrs
      for="slider" width="15" min="0" max="359"
      image="linear(to right, hue(0), hue(90), hue(180), hue(270), hue(0))"></vds-attrs>
    <vds-grid columns="auto 1fr" gap="1x" items="center start">
      <vds-el>From</vds-el>
      <vds-slider fill="--from" value="280" control="props[from=hue(@ special)]"></vds-slider>
      <vds-el>To</vds-el>
      <vds-slider fill="--to" value="320" control="props[to=hue(@ special)]"></vds-slider>
      <vds-el>Angle</vds-el>
      <vds-slider image value="345" control="props[angle=@deg]"></vds-slider>
    </vds-grid>
    <vds-props id="props" fill="special"></vds-props>
    <vds-card
      clear color="special-text" size="xl" text="h" radius="3x" width="15" height="15"
      shadow="special"
      transition="fill .15s, shadow"
      image="linear(--angle, --from, --to)">
      Heading
    </vds-card>
    <!--    <vds-card-->
    <!--      clear color="special-text" size="xl" text="h" radius="3x" width="15" height="15"-->
    <!--      shadow="special"-->
    <!--      transition="fill .15s, shadow"-->
    <!--      image="linear(-15deg, hue(280 100% pastel special), hue(320 special))">-->
    <!--      Heading-->
    <!--    </vds-card>-->
  </vds-flow>
{/if}

{#if show('shadow')}
  <vds-card gap="2x" text="b" padding="4x">
    <vds-card shadow=".25">CARD</vds-card>
    <vds-card shadow=".5">CARD</vds-card>
    <vds-card shadow="1">CARD</vds-card>
    <vds-card shadow="2">CARD</vds-card>
  </vds-card>

  <vds-card gap="2x" padding="4x">
    <vds-cardbtn shadow=".25" border="0" special>CARD</vds-cardbtn>
    <vds-cardbtn shadow=".5" border="0" special>CARD</vds-cardbtn>
    <vds-cardbtn shadow="1" border="0" special>CARD</vds-cardbtn>
    <vds-cardbtn shadow="2" border="0" special>CARD</vds-cardbtn>
  </vds-card>
{/if}

<!--{#if show('theme')}-->
<!--  <vds-theme name="positive" hue="sadf" mod="special"></vds-theme>-->

<!--  <vds-card theme="positive">-->
<!--    Special card-->
<!--  </vds-card>-->
<!--{/if}-->

{#if show('clamp')}
  <vds-card>
    <vds-block line-clamp="2" width="max 10">
      sdfasdf af sadg asdigaso ifasoifsadoiu asdfiuosf sdos sf sdof asoif sadf
    </vds-block>
  </vds-card>
{/if}

{#if show('table')}
  <vds-card>
    <vds-table>
      <vds-rowgroup>
        <vds-row>
          <vds-tableheader></vds-tableheader>
          <vds-columnheader>Two</vds-columnheader>
        </vds-row>
      </vds-rowgroup>
      <vds-rowgroup>
        <vds-row>
          <vds-rowheader>One</vds-rowheader>
          <vds-cell>Two</vds-cell>
        </vds-row>
      </vds-rowgroup>
    </vds-table>
  </vds-card>

  <vds-card>
    <vds-h3>Grid Table</vds-h3>
    <vds-gridtable columns="auto 1fr">
      <vds-tableheader></vds-tableheader>
      <vds-columnheader>Two</vds-columnheader>
      <vds-rowheader>One</vds-rowheader>
      <vds-cell>Two</vds-cell>
    </vds-gridtable>
  </vds-card>

  <vds-card height="100vh + 4x" padding="1x 0">
    <vds-attrs
      for="columnheader"
      place="sticky top" z="above" fade="0 :sticky[bottom #shadow]"></vds-attrs>
    <vds-attrs for="content" width="30vw"></vds-attrs>
    <vds-table box="y" overflow="scroll-x">
      <vds-rowgroup>
        <vds-row>
          <vds-tableheader></vds-tableheader>
          <vds-columnheader>
            <vds-el as="content">Two</vds-el>
          </vds-columnheader>
          <vds-columnheader>
            <vds-el as="content">Two</vds-el>
          </vds-columnheader>
          <vds-columnheader>
            <vds-el as="content">Two</vds-el>
          </vds-columnheader>
          <vds-columnheader>
            <vds-el as="content">Two</vds-el>
          </vds-columnheader>
        </vds-row>
      </vds-rowgroup>
      <vds-rowgroup>
        <vds-row>
          <vds-rowheader>One</vds-rowheader>
          <vds-cell>Two</vds-cell>
        </vds-row>
      </vds-rowgroup>
    </vds-table>
  </vds-card>
{/if}

{#if show('datepicker')}
  <vds-card>
    <vds-datepicker mode="range" shadow-root="y" value={dateRange}></vds-datepicker>
  </vds-card>
{/if}

{#if show('collapse')}
  <vds-block>
    <vds-attrs for="btn" clear="" control="description" padding="" text="wrap" pressing=":active[1]"
              width="100%" content="start"></vds-attrs>
    <vds-attrs for="container" gap="" padding="0 0 3x 6x||0 0 2x 5x"></vds-attrs>

    <vds-flow gap="">
      <vds-btn toggle>
        <vds-dropdownicon></vds-dropdownicon>
        <vds-el text="h" size="h4">You probably
          <vds-el text="u">need</vds-el>
          a&nbsp;design&nbsp;system
        </vds-el>
      </vds-btn>

      <vds-flow id="description" as="container" hidden>
        <vds-block>
          Modern web development is complex. To&nbsp;grow fast you have to&nbsp;iterate fast. Design&nbsp;system
          allows&nbsp;you to&nbsp;have control over your&nbsp;design and&nbsp;code increasing
          quality of code base and minimizing tech debt.
        </vds-block>

        <vds-block>
          <vds-strong>Vira Design System</vds-strong>
          gives you insane level of
          <vds-strong>consistency</vds-strong>
          and
          <vds-strong>controllability</vds-strong>
          . This will make it easier for you to scale your application as it grows.
        </vds-block>
      </vds-flow>
    </vds-flow>
  </vds-block>
{/if}

{#if show('custom-themes')}
  <vds-card as="section" gap="2x">
    <vds-heading level="2">Custom themes</vds-heading>

    <vds-theme name="success1" hue="130" mod="tone dim"></vds-theme>
    <vds-theme name="danger1" hue="1" mod="special strong"></vds-theme>

    <vds-flow gap>
      <vds-card theme="success1">
        Everything is ok!
      </vds-card>

      <vds-card theme="danger1">
        Something went dramatically wrong!
      </vds-card>
    </vds-flow>
  </vds-card>
{/if}

{#if show('button-themes')}
  <vds-card as="section" gap="2x">
    <vds-heading level="2">Buttons</vds-heading>
    <vds-heading level="4">Button states</vds-heading>
    <vds-card display="flex" gap flow="column" shadow>
      <vds-h5>Main</vds-h5>
      <vds-description>Text example.</vds-description>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn>Button</vds-btn>
          <vds-btn mark="y">Hover</vds-btn>
          <vds-btn inset>Pressed</vds-btn>
          <vds-btn outline="y">Focus</vds-btn>
          <vds-btn disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn special>Button</vds-btn>
          <vds-btn special mark="y">Hover</vds-btn>
          <vds-btn special inset="special">Pressed</vds-btn>
          <vds-btn special outline="y">Focus</vds-btn>
          <vds-btn special disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn clear>Button</vds-btn>
          <vds-btn clear mark="y">Hover</vds-btn>
          <vds-btn clear inset>Pressed</vds-btn>
          <vds-btn clear outline="y">Focus</vds-btn>
          <vds-btn clear disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-input placeholder="Input"></vds-input>
      <vds-input disabled placeholder="Disabled input"></vds-input>
      <vds-input special placeholder="Special Input"></vds-input>
      <vds-input disabled special placeholder="Disabled special input"></vds-input>
    </vds-card>
    <vds-card display="flex" gap flow="column" shadow theme="tint">
      <vds-h5>Tint</vds-h5>
      <vds-description>Text example.</vds-description>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn>Button</vds-btn>
          <vds-btn mark="y">Hover</vds-btn>
          <vds-btn inset>Pressed</vds-btn>
          <vds-btn outline="y">Focus</vds-btn>
          <vds-btn disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn special>Button</vds-btn>
          <vds-btn special mark="y">Hover</vds-btn>
          <vds-btn special inset="special">Pressed</vds-btn>
          <vds-btn special outline="y">Focus</vds-btn>
          <vds-btn special disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn clear>Button</vds-btn>
          <vds-btn clear mark="y">Hover</vds-btn>
          <vds-btn clear inset>Pressed</vds-btn>
          <vds-btn clear outline="y">Focus</vds-btn>
          <vds-btn clear disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-input placeholder="Input"></vds-input>
      <vds-input disabled placeholder="Disabled input"></vds-input>
      <vds-input special placeholder="Special Input"></vds-input>
      <vds-input disabled special placeholder="Disabled special input"></vds-input>
    </vds-card>
    <vds-card display="flex" gap flow="column" shadow theme="tone">
      <vds-h5>Tone</vds-h5>
      <vds-description>Text example.</vds-description>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn>Button</vds-btn>
          <vds-btn mark="y">Hover</vds-btn>
          <vds-btn inset>Pressed</vds-btn>
          <vds-btn outline="y">Focus</vds-btn>
          <vds-btn disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn special>Button</vds-btn>
          <vds-btn special mark="y">Hover</vds-btn>
          <vds-btn special inset="special">Pressed</vds-btn>
          <vds-btn special outline="y">Focus</vds-btn>
          <vds-btn special disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn clear>Button</vds-btn>
          <vds-btn clear mark="y">Hover</vds-btn>
          <vds-btn clear inset>Pressed</vds-btn>
          <vds-btn clear outline="y">Focus</vds-btn>
          <vds-btn clear disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-input placeholder="Input"></vds-input>
      <vds-input disabled placeholder="Disabled input"></vds-input>
      <vds-input special placeholder="Special Input"></vds-input>
      <vds-input disabled special placeholder="Disabled special input"></vds-input>
    </vds-card>
    <vds-card display="flex" gap flow="column" shadow theme="swap">
      <vds-h5>Swap</vds-h5>
      <vds-description>Text example.</vds-description>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn>Button</vds-btn>
          <vds-btn mark="y">Hover</vds-btn>
          <vds-btn inset>Pressed</vds-btn>
          <vds-btn outline="y">Focus</vds-btn>
          <vds-btn disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn special>Button</vds-btn>
          <vds-btn special mark="y">Hover</vds-btn>
          <vds-btn special inset="special">Pressed</vds-btn>
          <vds-btn special outline="y">Focus</vds-btn>
          <vds-btn special disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn clear>Button</vds-btn>
          <vds-btn clear mark="y">Hover</vds-btn>
          <vds-btn clear inset>Pressed</vds-btn>
          <vds-btn clear outline="y">Focus</vds-btn>
          <vds-btn clear disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-input placeholder="Input"></vds-input>
      <vds-input disabled placeholder="Disabled input"></vds-input>
      <vds-input special placeholder="Special Input"></vds-input>
      <vds-input disabled special placeholder="Disabled special input"></vds-input>
    </vds-card>
    <vds-card display="flex" gap flow="column" shadow theme="special">
      <vds-h5>Special</vds-h5>
      <vds-description>Text example.</vds-description>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn>Button</vds-btn>
          <vds-btn mark="y">Hover</vds-btn>
          <vds-btn inset>Pressed</vds-btn>
          <vds-btn outline="y">Focus</vds-btn>
          <vds-btn disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn special>Button</vds-btn>
          <vds-btn special mark="y">Hover</vds-btn>
          <vds-btn special inset="special">Pressed</vds-btn>
          <vds-btn special outline="y">Focus</vds-btn>
          <vds-btn special disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-block>
        <vds-flex flow="row wrap" gap>
          <vds-btn clear>Button</vds-btn>
          <vds-btn clear mark="y">Hover</vds-btn>
          <vds-btn clear inset>Pressed</vds-btn>
          <vds-btn clear outline="y">Focus</vds-btn>
          <vds-btn clear disabled>Disabled</vds-btn>
        </vds-flex>
      </vds-block>
      <vds-input placeholder="Input"></vds-input>
      <vds-input disabled placeholder="Disabled input"></vds-input>
      <vds-input special placeholder="Special Input"></vds-input>
      <vds-input disabled special placeholder="Disabled special input"></vds-input>
    </vds-card>
    <vds-heading level="4">Toggle buttons</vds-heading>
    <vds-flex gap flow="row wrap">
      <vds-btn toggle>Non-pressed toggle button</vds-btn>
      <vds-btn toggle pressed>Pressed toggle button</vds-btn>
      <vds-btn toggle disabled>Disabled toggle button</vds-btn>
      <vds-btn toggle disabled pressed>Disabled pressed toggle button</vds-btn>
    </vds-flex>
  </vds-card>
{/if}

{#if show('space-around')}
  <vds-card as="section" gap>
    <vds-block>
      There should be a gap between cards
    </vds-block>
    <vds-card place="space-around" width="20">Space around</vds-card>
    <vds-card space="around" width="20">Space around</vds-card>
    <vds-card place="space-around" width="20">Space around</vds-card>
  </vds-card>
{/if}

{#if show('icon')}
  <vds-card as="section">
    <vds-heading level="4">Icons</vds-heading>

    <vds-heading level="5">Ionicons</vds-heading>

    Uses IonIcons library.

    <vds-block size="md">
      <vds-icon name="accessibility-outline :hover[accessibility]" use-hover></vds-icon>
      <vds-icon name="aperture-outline :hover[aperture]" use-hover></vds-icon>
      <vds-icon name="basketball-outline :hover[basketball]" use-hover></vds-icon>
      <vds-icon name="calendar-outline :hover[calendar]" use-hover></vds-icon>
      Text to align
    </vds-block>

    <vds-block size="xl">
      <vds-icon name="accessibility-outline :hover[accessibility]" use-hover></vds-icon>
      <vds-icon name="aperture-outline :hover[aperture]" use-hover></vds-icon>
      <vds-icon name="basketball-outline :hover[basketball]" use-hover></vds-icon>
      <vds-icon name="calendar-outline :hover[calendar]" use-hover></vds-icon>
      Text to align
    </vds-block>

    <vds-heading level="5">Eva</vds-heading>

    <vds-block size="md">
      <vds-icon name="archive-outline :hover[archive]" use-hover></vds-icon>
      <vds-icon name="checkmark-square-2-outline :hover[checkmark-square-2]" use-hover></vds-icon>
      <vds-icon name="email-outline :hover[email]" use-hover></vds-icon>
      <vds-icon name="calendar-outline :hover[calendar]" use-hover></vds-icon>
      Text to align
    </vds-block>

    <vds-block size="xl">
      <vds-icon name="archive-outline :hover[archive]" use-hover></vds-icon>
      <vds-icon name="checkmark-square-2-outline :hover[checkmark-square-2]" use-hover></vds-icon>
      <vds-icon name="email-outline :hover[email]" use-hover></vds-icon>
      <vds-icon name="calendar-outline :hover[calendar]" use-hover></vds-icon>
      Text to align
    </vds-block>

    <vds-heading level="5">Feather</vds-heading>

    Uses Feather Icons library by default. (lazy-loading)

    <vds-block size="xl">
      <vds-icon name="user"></vds-icon>
      <vds-icon name="dollar-sign"></vds-icon>
      <vds-icon name="message-square"></vds-icon>
      <vds-icon name="package"></vds-icon>
      Text to align
    </vds-block>

    <vds-heading level="5">Change default size (Context definition)</vds-heading>
    <vds-block>
      <vds-el>
        <vds-icon name="today-outline"></vds-icon>
      </vds-el>

      <vds-el>
        <vds-props icon-size="1em"></vds-props>
        <vds-icon name="today-outline"></vds-icon>
      </vds-el>

      <vds-el>
        <vds-props icon-size="2em"></vds-props>
        <vds-icon name="today-outline"></vds-icon>
      </vds-el>
    </vds-block>

    <vds-heading level="5">Change default stroke width</vds-heading>
    <vds-block>
      <vds-el>
        <vds-props icon-stroke-width="1em / 8"></vds-props>
        <vds-icon name="today-outline"></vds-icon>
      </vds-el>

      <vds-el>
        <vds-props icon-stroke-width="1em / 16"></vds-props>
        <vds-icon name="today-outline"></vds-icon>
      </vds-el>
    </vds-block>

  </vds-card>
{/if}

{#if show('tabs')}
  <vds-card as="section">
    <vds-props icon-stroke-width=".5x / 3"></vds-props>

    <vds-tablist value="one" border="bottom inside">
      <vds-tab control="one" value="one" trigger>
        One
      </vds-tab>
      <vds-tab control="two" value="two" trigger>Two</vds-tab>
      <vds-tab control="three" value="three" trigger>Three</vds-tab>
    </vds-tablist>

    <vds-block>
      <vds-block id="one" effect="collapse">One</vds-block>
      <vds-block id="two" effect="collapse">Two</vds-block>
      <vds-block id="three" effect="collapse">Three</vds-block>
    </vds-block>

    <!--    <vds-router>-->
    <!--      <vds-block id=""></vds-block>-->
    <!--    </vds-router>-->
  </vds-card>
{/if}

{#if show('width') || show('height')}
  <vds-card width="max 20">
    Something
  </vds-card>
{/if}

{#if show('weight')}
  <vds-card>
    <vds-heading level="3">Font
      <vds-u>weight</vds-u>
    </vds-heading>

    <vds-heading level="4" text="w6">Redefined</vds-heading>

    <vds-heading level="4" text="u">Styled</vds-heading>

    <vds-link>Simple link</vds-link>

    <vds-link text="i">Styled link</vds-link>

    <vds-link text="w7">Redefined link</vds-link>
  </vds-card>
{/if}

{#if show('place')}
  <vds-block padding="4">
    <vds-card width="20" height="20">
      <vds-block place="outside-top 1x">Something</vds-block>
    </vds-card>
  </vds-block>
{/if}

{#if show('image')}
  <vds-card id="section">
    <vds-heading>Images</vds-heading>

    <vds-grid columns="1fr 1fr||1fr" gap="2x">
      <vds-heading level="4">Raster image</vds-heading>
      <vds-heading level="4">Vector image</vds-heading>
      <vds-block>
        <vds-img
          class="vds-dark-invert"
          src={pngImages.logo}
          width="100%"
          loading="lazy"
          label="NUDE Elements Design System Playground">
        </vds-img>
      </vds-block>
      <vds-block>
        <vds-svg
          id="logo-vector"
          color="text-soft"
          src={svgImages.logo}
          width="100%"
          height="min 3"
          label="NUDE Elements Design System Playground">
        </vds-svg>
      </vds-block>
    </vds-grid>
    <vds-heading level="4">Background image</vds-heading>
    <vds-block
      class="vds-dark-invert"
      image="no-repeat left center / contain url({pngImages.logo})"
      height="4">
    </vds-block>
  </vds-card>
{/if}

{#if show('switch')}
  <vds-card as="section">
    <vds-heading>Switches</vds-heading>

    <vds-block>
      <vds-switch checked={false}/>
      <vds-switch checked={true}/>
    </vds-block>

    <vds-block size="xs">
      <vds-switch></vds-switch>
      <vds-switch checked></vds-switch>
    </vds-block>

    <vds-block size="xl">
      <vds-switch></vds-switch>
      <vds-switch checked></vds-switch>
    </vds-block>

    <vds-block>
      <vds-switch checked disabled></vds-switch>
      <vds-switch disabled></vds-switch>
      - Disabled.
    </vds-block>
  </vds-card>
{/if}

{#if show('markdown')}
  <vds-card as="section">
    <vds-markdown linkify>
      <pre>
---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will ==like== those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) [
  return bar++;
];

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        [ some code, part of Definition 2 ]

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
      </pre>
    </vds-markdown>

    <vds-markdown>
      <pre>
#### My awesome markdown header

And markdown **TEXT**. What do you _think_? `var a = '123'`. Also here is a [link](https://github.com/Victin09/vira-design-system).

----

```enumerate
var a = '123';
var b = /wow?/;
```
      </pre>
    </vds-markdown>

    <vds-markdown>
      <pre>
#### Markdown in Shadow DOM

And markdown **TEXT**. What do you _think_? `var a = '123'`. Also here is a [link](https://github.com/Victin09/vira-design-system).

```enumerate
var a = '123';
var b = /wow?/;
```
      </pre>
    </vds-markdown>

    <vds-heading level="4">Inline markdown</vds-heading>

    <vds-block>
      It's a fragment of "
      <vds-md>
        <pre>**inlined** markdown _content_</pre>
      </vds-md>
      ".
    </vds-block>
  </vds-card>
{/if}

{#if show('control')}
  <vds-card as="section">
    <vds-props transition=".9s"></vds-props>
    <vds-heading>Collapsing Custom Effect</vds-heading>
    <vds-btn
      toggle trigger
      control="collapsing[!hidden]"
      t="'Show the block' :pressed['Collapse the block']"></vds-btn>
    <vds-block id="collapsing" opacity="1 :hidden[0]" transition="opacity, move" move="0 0 :enter[0 -5x] :leave[0 5x]" hidden>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </vds-block>
  </vds-card>

  <vds-card as="section">
    <vds-props transition=".4s"></vds-props>
    <vds-heading>Collapsing</vds-heading>
    <vds-btn
      toggle trigger
      control="collapsing[!hidden]"
      t="'Show the block' :pressed['Collapse the block']"></vds-btn>
    <vds-block id="collapsing" effect="collapse">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </vds-block>
  </vds-card>

  <vds-card as="section">
    <vds-heading>Hide self</vds-heading>
    <vds-block>
      <vds-btn control=":self">
        Hide myself
      </vds-btn>
    </vds-block>
  </vds-card>

  <vds-card as="section">
    <vds-heading>Toggle icon styles</vds-heading>
    <vds-pane>
      <vds-btn
        toggle pressed clear
        control="light[color=text|special] light[size=3x|2x]">
        Toggle
      </vds-btn>
      <vds-icon id="light" name="sun"></vds-icon>
    </vds-pane>
  </vds-card>

  <vds-card as="section">
    <vds-heading>Slider value</vds-heading>

    <vds-block id="block"></vds-block>

    <vds-slider value="50" control="block[.innerText: units]"></vds-slider>
  </vds-card>

  <vds-card as="section">
    <vds-attrs for="icon" size="2x"></vds-attrs>
    <vds-heading>Toggle icon name</vds-heading>
    <vds-pane>
      <vds-btn
        id="test"
        toggle clear
        value="sun" off-value="moon"
        control="light[name]">
        Toggle
      </vds-btn>
      <vds-icon id="light" name="sun" type="fill"></vds-icon>
    </vds-pane>

    <vds-pane>
      <vds-btn
        toggle clear
        value="sun" off-value="moon"
        control="light[name]" trigger>
        Toggle with trigger
      </vds-btn>
      <vds-icon id="light" name="sun" type="fill"></vds-icon>
    </vds-pane>
  </vds-card>

  <vds-card as="section">
    <vds-heading>Toggle layout</vds-heading>

    <vds-debug id="debugger"></vds-debug>

    <vds-flex gap>
      <vds-btn
        toggle trigger use-debug
        control="layout[columns=auto auto|repeat(4, auto)]">
        Toggle Layout
      </vds-btn>

      <vds-btn value="stretch" control="layout[content=@]" trigger>
        <vds-value list="options"></vds-value>
        <vds-popup padding="1x 0">
          <vds-listbox id="options" link-value>
            <vds-option value="stretch">Stretch</vds-option>
            <vds-option value="space-between">Space between</vds-option>
            <vds-option value="start">Start</vds-option>
            <vds-option value="end">End</vds-option>
          </vds-listbox>
        </vds-popup>
      </vds-btn>
    </vds-flex>
    <vds-block id="layout" display="grid" gap>
      <vds-card>
        First card
      </vds-card>

      <vds-card>
        Second card
      </vds-card>

      <vds-card>
        Third card
      </vds-card>

      <vds-card>
        Fourth card
      </vds-card>
    </vds-block>
  </vds-card>

  <vds-card as="section">
    <vds-btngroup use-radiogroup value="auto" control=":root[data-vds-scheme=@]">
      <vds-btn value="auto">Auto</vds-btn>
      <vds-btn value="dark">Dark</vds-btn>
      <vds-btn value="light">Light</vds-btn>
    </vds-btngroup>
  </vds-card>
{/if}

{#if show('form')}
  <!--  <vds-card>-->
  <!--    <vds-datepicker mode="range" shadow-root="y" value={dateRange}></vds-datepicker>-->
  <!--  </vds-card>-->

  <vds-card as="section">
    <vds-flex gap>
      <vds-input></vds-input>
      <vds-btn>Submit</vds-btn>
    </vds-flex>
  </vds-card>

  <vds-card as="section">
    <vds-card gap>
      <vds-h3>Basic form</vds-h3>
      <vds-form control="output[.value]" gap="1x" type="formdata">
        <vds-field>
          <vds-label>Password</vds-label>
          <vds-password id="password" grow="1"></vds-password>
        </vds-field>
        <vds-field>
          <vds-label>Phone</vds-label>
          <vds-telinput id="phone" grow="1"></vds-telinput>
        </vds-field>
        <vds-field>
          <vds-label>Full name</vds-label>
          <vds-input id="name"/>
        </vds-field>
        <vds-field>
          <vds-label>One time code</vds-label>
          <vds-onetimecode id="onetimecode"/>
        </vds-field>
        <vds-field>
          <vds-label>Email</vds-label>
          <vds-emailinput id="email"/>
        </vds-field>
        <vds-field>
          <vds-label>Cover letter (optional)</vds-label>
          <vds-textarea id="coverLetter"/>
        </vds-field>
        <vds-field>
          <vds-label>LinkedIn Profile (optional)</vds-label>
          <vds-input id="linkedInUrl"/>
        </vds-field>
          <vds-field>
          <vds-label>CV/Resume</vds-label>
          <vds-fileinput id="files" accept=".json" />
        </vds-field>
        <vds-btn special action="submit">Submit</vds-btn>
      </vds-form>
      <vds-block overflow="auto" scrollbar width="max 16">
        <vds-value id="output"></vds-value>
      </vds-block>
    </vds-card>
  </vds-card>

  <vds-card as="section">
    <vds-form value={formData} on:input={submit} use-debug="form-debugger0">
      <vds-theme name="error" hue="1" mod="tone"></vds-theme>
      <!--      <vds-attrs for="vds-check" theme="error"></vds-attrs>-->
      <vds-attrs for="vds-field" theme=":invalid[error]"></vds-attrs>

      <vds-heading level="4">Form</vds-heading>
      <vds-flow>
        <vds-input
          id="email" placeholder="Email address" grow="1"></vds-input>
        <vds-check for="email" assert="email">
          Should be a valid email address
        </vds-check>
      </vds-flow>
      <vds-field>
        <vds-inputgroup height="8x" padding="2.5x 1x 1x 1x">
          <vds-label
            place="top left 1x 2x" z="above" text="w5" origin="top left"
            scale="^:focus[.75] :empty[1] .75"
            move="^:focus[0] :empty[0 1.25x] 0"
            color="^:focus[text-soft] :empty[text 50%] text-soft"
            transition="theme, transform">
            Password
          </vds-label>
          <vds-password id="password" placeholder="" grow="1"></vds-password>
        </vds-inputgroup>
        <vds-check for="password" assert="required">
          Password is required
        </vds-check>
      </vds-field>
      <vds-field>
        <vds-label>Date of issue</vds-label>
        <vds-dateinput mode="range" width="min 10"
                      placeholder="Date range"></vds-dateinput>
      </vds-field>
      <vds-card>
        <vds-form id="user" use-debug="form-debugger1">
          <vds-heading level="5">User</vds-heading>

          <vds-field>
            <vds-label for="name">User name</vds-label>
            <vds-inputgroup>
              <vds-icon name="person-outline" padding="0 1x"></vds-icon>
              <vds-input id="name" grow="1"></vds-input>
            </vds-inputgroup>
            <vds-check for="name" assert="required">
              Name is required
            </vds-check>
            <vds-check for="name" assert="minlength:5">
              Name should contain at least 5 characters
            </vds-check>
            <vds-check for="name" assert={customValidator}>
              Name should pass custom validator
            </vds-check>
          </vds-field>

          <vds-field>
            <vds-label>Period</vds-label>
            <vds-inputgroup>
              <vds-icon name="hash"></vds-icon>
              <vds-numinput id="period" unit="day" grow="1" max="100"></vds-numinput>
            </vds-inputgroup>
          </vds-field>

          <vds-pane gap>
            <vds-checkbox checked id="press" use-debug="form-debugger3"></vds-checkbox>
            <vds-label for="press">Some checkbox</vds-label>
          </vds-pane>
        </vds-form>
      </vds-card>
      <vds-block>
        <vds-btn action="submit" special>Submit</vds-btn>
      </vds-block>
    </vds-form>
  </vds-card>

  <vds-grid columns="repeat(4, 1fr)||1fr 1fr" gap>
    <vds-debug id="form-debugger0" as="section"></vds-debug>
    <vds-debug id="form-debugger1" as="section"></vds-debug>
    <vds-debug id="form-debugger2" as="section"></vds-debug>
    <vds-debug id="form-debugger3" as="section"></vds-debug>
  </vds-grid>
{/if}

  <!--<vds-card as="section">-->
<!--  <vds-numinput value="15" code="USD"></vds-numinput>-->
<!--</vds-card>-->

{#if show('progressbar')}
  <vds-card as="section">
    <vds-heading level="2">Progressbar</vds-heading>
    <vds-progressbar value="50"></vds-progressbar>
  </vds-card>
{/if}

{#if show('slider')}
  <vds-card as="section">
    <vds-card>
      <vds-debug id="slider2d-debugger"></vds-debug>
    </vds-card>

    <vds-card>
      <vds-slider2d use-debug="slider2d-debugger" min="0 0" max="1000 1000" height="10x" value="500 500"></vds-slider2d>
    </vds-card>

    <vds-card padding="0" overflow="no" selectable="n">
      <vds-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/after.jpg"></vds-img>
      <vds-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/before.jpg"
              id="overlay" place="cover" height="100%" fit="cover left"
              border="2bw right color(special)"></vds-img>
      <vds-block
        control="overlay[width:%] cap[--percent:%]" value="50" place="cover" height="100%"
        fill="clear" border="0" mark="n" use-slider cursor="pointer"></vds-block>
      <vds-circle
        id="cap" fill="special-bg" color="special-text" size="2"
        place="left top 50% --percent" move="(-50% + 1bw) 0" interactive="no"
      >
        <vds-icon name="chevron-left" place="left" move="-.5x"></vds-icon>
        <vds-icon name="chevron-right" place="right" move=".5x"></vds-icon>
      </vds-circle>
    </vds-card>
  </vds-card>

  <vds-card as="section" gap selectable="n">
    <vds-card padding="0" overflow="no">
      <vds-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/after.jpg"></vds-img>
      <vds-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/before.jpg"
              id="overlay" place="cover" height="100%" fit="cover left"
              border="2bw right color(special)"></vds-img>
    </vds-card>
    <vds-slider control="overlay[width:%]" value="50"></vds-slider>
  </vds-card>

  <vds-card as="section">
    <vds-heading level="2">Slider</vds-heading>
    <vds-slider value="50" use-debug="slider-debug-h"></vds-slider>
    <vds-slider value="50" orient="v" use-debug="slider-debug-v"></vds-slider>
    <vds-slider value="50" disabled></vds-slider>

    <vds-grid gap columns="1fr 1fr">
      <vds-debug id="slider-debug-h"></vds-debug>
      <vds-debug id="slider-debug-v"></vds-debug>
    </vds-grid>
  </vds-card>

{/if}

{#if show('listbox')}
  <vds-card as="section">
    <vds-heading level="4">Plain listbox</vds-heading>

    <vds-listbox value="one" label="Choose a number:">
      <vds-option value="one">One</vds-option>
      <vds-option value="two">Two</vds-option>
      <vds-option value="three">Three</vds-option>
    </vds-listbox>

    <vds-spacer></vds-spacer>

    <vds-heading level="4">Listbox with multiple value</vds-heading>

    <vds-listbox value="one, two" label="Choose a number:" multiple>
      <vds-option value="one">One</vds-option>
      <vds-option value="two">Two</vds-option>
      <vds-option value="three">Three</vds-option>
    </vds-listbox>

    <vds-spacer></vds-spacer>

    <vds-flow gap>
      <vds-heading level="4">Select</vds-heading>

      <vds-label for="comboxbox">
        Choose a number:
      </vds-label>
      <vds-btn id="comboxbox" width="10" columns="1fr auto" value="six" labelledby="value">
        <vds-value list></vds-value>
        <vds-dropdownicon></vds-dropdownicon>
        <vds-popuplistbox labelledby="label">
          <vds-option value="one">One</vds-option>
          <vds-option value="two">Two</vds-option>
          <vds-option value="three">Three</vds-option>
          <vds-option value="four">Four</vds-option>
          <vds-option value="five">Five</vds-option>
          <vds-option value="six">Six</vds-option>
          <vds-option value="seven">Seven</vds-option>
        </vds-popuplistbox>
      </vds-btn>
    </vds-flow>

    <vds-spacer></vds-spacer>

    <vds-flow gap>
      <vds-heading level="4">Multi-Select</vds-heading>

      <vds-label for="comboxbox">
        Choose a number:
      </vds-label>
      <vds-btn id="comboxbox" width="10 20" text="wrap" columns="1fr auto" value="six, four" labelledby="value">
        <vds-attrs for="badge" special></vds-attrs>
        <vds-value list placeholder="select options..."></vds-value>
        <vds-dropdownicon></vds-dropdownicon>
        <vds-popuplistbox multiple labelledby="label">
          <vds-option value="one">One</vds-option>
          <vds-option value="two">Two</vds-option>
          <vds-option value="three">Three</vds-option>
          <vds-option value="four">Four</vds-option>
          <vds-option value="five">Five</vds-option>
          <vds-option value="six">Six</vds-option>
          <vds-option value="seven">Seven</vds-option>
        </vds-popuplistbox>
      </vds-btn>
    </vds-flow>
  </vds-card>
{/if}

{#if show('select')}
  <vds-card as="section">
    <vds-heading level="3">Select</vds-heading>

    <vds-btn id="select" use-debug="debugger4" type="date">
      <vds-value></vds-value>
      <vds-popup use-listbox type="date" use-debug="select-debugger" link-value padding="1x 0">
        <vds-option value="05.10.2020">One</vds-option>
        <vds-option value="10.10.2020">Two</vds-option>
        <vds-option>
          Something else...
          <vds-popup use-listbox place="outside-right -1x 0" link-value padding="1x 0">
            <vds-option value="05.11.2020">Three</vds-option>
          </vds-popup>
        </vds-option>
      </vds-popup>
    </vds-btn>

    <vds-btn id="select" type="date">
      <vds-value></vds-value>
      <vds-popup use-listbox type="date" link-value padding="1x 0">
        <vds-option value="05.10.2020">One</vds-option>
        <vds-option value="10.10.2020">Two</vds-option>
      </vds-popup>
    </vds-btn>

    <vds-debug id="select-debugger"></vds-debug>
  </vds-card>
{/if}

  <!--<vds-card display="grid" columns="1fr 1fr 1fr" gap>-->
<!--  <vds-debug id="debugger4"></vds-debug>-->
<!--  <vds-debug id="debugger5"></vds-debug>-->
<!--  <vds-debug id="debugger6"></vds-debug>-->
<!--</vds-card>-->

<!--<vds-card as="section">-->
<!--  <vds-markdown>-->
<!--    <pre>-->
<!--# Something-->

<!--Something **bold**.-->

<!--```-->
<!--var a = '123';-->
<!--```-->
<!--    </pre>-->
<!--  </vds-markdown>-->
<!--</vds-card>-->

<!--<vds-card as="section">
  <vds-textarea value={inputValue}></vds-textarea>
</vds-card>

<vds-card as="section">
  <vds-blockquote>
    Say something!
    <vds-spacer></vds-spacer>
    <vds-block text="w6" size="md">Andrey Yamanov, Frontend Engineer at Sellerscale</vds-block>
  </vds-blockquote>
</vds-card>

<vds-heading level="2">Checkboxes</vds-heading>

<vds-card as="section">
  <vds-grid
    display="inline-grid" columns="auto auto" rows="auto auto" flow="column" gap="1x 2x">
    <vds-flex gap="1x" items="center">
      <vds-checkbox labelledby=":next"></vds-checkbox>
      <vds-label>Checkbox</vds-label>
    </vds-flex>

    <vds-flex gap="1x" items="center">
      <vds-checkbox labelledby=":next" pressed></vds-checkbox>
      <vds-label>Checked checkbox</vds-label>
    </vds-flex>

    <vds-flex gap="1x" items="center">
      <vds-checkbox labelledby=":next" disabled></vds-checkbox>
      <vds-label>Disabled checkbox</vds-label>
    </vds-flex>

    <vds-flex gap="1x" items="center">
      <vds-checkbox labelledby=":next" disabled checked></vds-checkbox>
      <vds-label>Disabled and checked checkbox</vds-label>
    </vds-flex>
  </vds-grid>
</vds-card>-->

<script>
const svgImages = require('../images/*.svg');
const pngImages = require('../images/*.png');

let inputValue = 'Some input value';
let user = {
  press: 2,
  name: '',
};
let hash = location.hash;
let formData = {
  email: 'tenphi@gmail.com',
  user,
};
let dateRange = [new Date('2020-05-10'), new Date('2020-05-20')];
let inputTestValue = '456';

function submit(event) {
  console.log('! form data submitted', event.detail);
}

function customValidator(val) {
  return val === 'Andrew';
}

window.addEventListener('hashchange', () => {
  hash = location.hash;
});

$: show = (name) => {
  return hash ? hash.includes(name) : true;
}

let sixValidator = v => v === 'six';

const codeExample = `var a = '123';`;

</script>
