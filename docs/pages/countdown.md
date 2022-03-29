# Countdown

<p class="vds-text-lead">Create a simple countdown timer.</p>

## Usage

To apply this component, add the `vds-countdown` attribute to a container element and define a date when the countdown should expire. Just add `date: YYYY-MM-DDThh:mm:ssTZD` option to the attribute, using the [ISO 8601 format](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#ECMAScript_5_ISO-8601_format_support), e.g. `2017-12-04T22:00:00+00:00` (UTC time).

Add the following classes to child elements to apply the necessary functionality and styling.

| Class                   | Description                                                 |
|:------------------------|:------------------------------------------------------------|
| `.vds-countdown-days`    | Add this class to indicate the days to be counted down.     |
| `.vds-countdown-hours`   | Add this class to indicate the hours to be counted down.    |
| `.vds-countdown-minutes` | Add this class to indicate the minutes to be counted down.  |
| `.vds-countdown-seconds` | Add this class to indicate the seconds to be counted down.  |
| `.vds-countdown-number`  | This class adds the neccessary style to a countdown number. |

```html
<div vds-countdown="date: 2022-04-05T14:22:31+00:00">
    <span class="vds-countdown-number vds-countdown-days"></span>
    <span class="vds-countdown-number vds-countdown-hours"></span>
    <span class="vds-countdown-number vds-countdown-minutes"></span>
    <span class="vds-countdown-number vds-countdown-seconds"></span>
</div>
```

```example
<div class="vds-grid-small vds-child-width-auto vds-margin" vds-grid vds-countdown="date: 2022-04-05T14:22:31+00:00">
    <div>
        <div class="vds-countdown-number vds-countdown-days"></div>
    </div>
    <div>
        <div class="vds-countdown-number vds-countdown-hours"></div>
    </div>
    <div>
        <div class="vds-countdown-number vds-countdown-minutes"></div>
    </div>
    <div>
        <div class="vds-countdown-number vds-countdown-seconds"></div>
    </div>
</div>
```

***

## Separator

To insert a separator between each number, use the `.vds-countdown-separator` class.

```html
<div vds-countdown="date: 2022-04-05T14:22:31+00:00">
    <span class="vds-countdown-number vds-countdown-days"></span>
    <span class="vds-countdown-separator">:</span>
    <span class="vds-countdown-number vds-countdown-hours"></span>
    <span class="vds-countdown-separator">:</span>
    <span class="vds-countdown-number vds-countdown-minutes"></span>
    <span class="vds-countdown-separator">:</span>
    <span class="vds-countdown-number vds-countdown-seconds"></span>
</div>
```

```example
<div class="vds-grid-small vds-child-width-auto vds-margin" vds-grid vds-countdown="date: 2022-04-05T14:22:31+00:00">
    <div>
        <div class="vds-countdown-number vds-countdown-days"></div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-hours"></div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-minutes"></div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-seconds"></div>
    </div>
</div>
```

***

## Label

To add a label to each number, use the `.vds-countdown-label` class.

```html
<div class="vds-countdown-label">Days</div>
<div class="vds-countdown-label">Hours</div>
<div class="vds-countdown-label">Minutes</div>
<div class="vds-countdown-label">Seconds</div>
```

```example
<div class="vds-grid-small vds-child-width-auto" vds-grid vds-countdown="date: 2022-04-05T14:22:31+00:00">
    <div>
        <div class="vds-countdown-number vds-countdown-days"></div>
        <div class="vds-countdown-label vds-margin-small vds-text-center vds-visible@s">Days</div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-hours"></div>
        <div class="vds-countdown-label vds-margin-small vds-text-center vds-visible@s">Hours</div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-minutes"></div>
        <div class="vds-countdown-label vds-margin-small vds-text-center vds-visible@s">Minutes</div>
    </div>
    <div class="vds-countdown-separator">:</div>
    <div>
        <div class="vds-countdown-number vds-countdown-seconds"></div>
        <div class="vds-countdown-label vds-margin-small vds-text-center vds-visible@s">Seconds</div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. For more information, take a look at the chapter on [component configuration](javascript.md#component-configuration).

| Option | Value  | Default | Description                                                                                                                                         |
|:-------|:-------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `date` | String | `false` | Any string parsable by ```Date.parse```. See [Reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
ViraDesignSystem.countdown(element, options);
```

### Methods

The following methods are available for the component:

#### Start

```js
ViraDesignSystem.countdown(element).start();
```

Starts the countdown.

#### Stop

```js
ViraDesignSystem.countdown(element).stop();
```

Stops the countdown.
