<vds-pane content="space-between" on:focusin={touch}>
  <vds-attrs
    for="arrow" radius="round"
    padding="0.5x .5x" special border="#special-bg"></vds-attrs>
  <vds-attrs
    for="dropdown-icon"
    name="chevron-down"
    scale="^:pressed[flip-y]" place="right" height="100%" size="1em"></vds-attrs>
  <vds-attrs
    for="dropdown" size="lg"
    text="sb center" content="stretch" columns="1fr 1.5x"
    padding=".25x .25x .25x .75x" grow="1"></vds-attrs>
  <vds-attrs
    for="option"
    padding="1x" content="center"></vds-attrs>

  <vds-pane>
    <vds-btn
      id="dropdown" on:tap={toggle} type="date" clear
      on:input={(event) => navDate = event.detail} value={navDate}>
      <vds-datetime month="short" value={navDate}></vds-datetime>
      <vds-icon id="dropdown-icon"></vds-icon>
      <vds-popuplistbox
        height="28x" size="md" bind:this={monthPopup}>
        {#each months as month}
          <vds-option
            value={month}
            disabled={!isMonthInRange(month, beginDate, endDate) ? '' : undefined}>
            <vds-datetime month value={month}></vds-datetime>
          </vds-option>
        {/each}
      </vds-popuplistbox>
    </vds-btn>

    <vds-btn
      id="dropdown" type="date" clear
      value={navDate} on:input={(event) => navDate = event.detail}>
      <vds-datetime year value={navDate}></vds-datetime>
      <vds-icon id="dropdown-icon"></vds-icon>
      <vds-popuplistbox
        height="28x" bind:this={yearPopup} size="md">
        {#each years as year}
          <vds-option
            value={year}
            disabled={!isMonthInRange(year, beginDate, endDate) ? '' : undefined}>
            <vds-datetime year value={year}></vds-datetime>
          </vds-option>
        {/each}
      </vds-popuplistbox>
    </vds-btn>
  </vds-pane>

  <vds-pane>
    <vds-btn id="arrow" on:tap={prevMonth} disabled={havePrevMonth ? undefined : ''}>
      <vds-icon name="chevron-left chevron-back-outline" size="1.25em" move="-.125x 0"></vds-icon>
    </vds-btn>

    <vds-btn id="arrow" on:tap={nextMonth} disabled={haveNextMonth ? undefined : ''}>
      <vds-icon name="chevron-right chevron-forward-outline" size="1.25em" move=".125x 0"></vds-icon>
    </vds-btn>
  </vds-pane>
</vds-pane>

<vds-grid columns="repeat(7, 1fr)" text="center" color="text 80%">
  <vds-attrs for="weekday" text="h" size="xs"></vds-attrs>

  {#each weekDays as weekDay}
    <vds-el id="weekday">
      <vds-datetime weekday="short" value={weekDay}></vds-datetime>
    </vds-el>
  {/each}
</vds-grid>
<vds-grid
  columns="repeat(7, 1fr)" content="start stretch"
  text="center" gap="1bw">
  <vds-attrs for="day" fill="clear" radius={isRange ? '1r :hover[1r 0 0 1r]' : '1r :hover[1r]'}
            text="n" inset="#clear :active[#shadow.50]" border="n" focus="inset"></vds-attrs>
  <vds-attrs for="today" text="h" color="special" inset="0 0 0 1bw #border :active[#shadow.50]"></vds-attrs>
  <vds-attrs for="other-month" color="text 50% :hover[text]"></vds-attrs>
  <vds-attrs for="disabled" disabled color="text 50%"></vds-attrs>
  <vds-attrs for="start" special fill="special-bg" color radius="1r 0 0 1r"></vds-attrs>
  <vds-attrs for="end" radius="0r 1r 1r 0r :hover[1r 0 0 1r]" special fill="special-bg"
            color></vds-attrs>
  <vds-attrs for="selected" radius special fill="special-bg" color="special-text"></vds-attrs>
  <vds-attrs for="range"
            radius={isRange ? '0 :hover[0 1r 1r 0]' : '1r'}
            fill="special-bg 25%" color="text" border="0 0 0 1bw #bg"></vds-attrs>
  <vds-attrs for="range-inside" radius="0 :hover[1r 0 0 1r]" fill="special-bg 25%" color="text"
            border="0 0 0 1bw #bg"></vds-attrs>

  {#each monthDays as day}
    <vds-btn
      as={day.modifiers}
      padding=".5x 1x"
      on:tap={() => selectRange(day.date)}
      on:mouseover={() => setHover(day.date)}>
      {day.date.getDate()}
    </vds-btn>
  {/each}

</vds-grid>

{#if isRange}
  <vds-flex gap size="xs">
    <vds-attrs for="vds-btn" special padding></vds-attrs>

    <vds-btn on:tap={() => setRange(yearRange)}>
      <vds-datetime year value={navDate}></vds-datetime>
    </vds-btn>

    <vds-btn on:tap={() => setRange(quaterRange)}>
      Q{navQuater}
      <vds-datetime year value={navDate}></vds-datetime>
    </vds-btn>

    <vds-btn on:tap={() => setRange(monthRange)}>
      <vds-datetime year month="short" value={navDate}></vds-datetime>
    </vds-btn>
  </vds-flex>
{/if}

<script context="module">
export const props = ['value', 'locale', 'begin', 'end', 'mode'];
</script>

<script>
import { createEventDispatcher } from 'svelte';
import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  isAfter,
  isBefore,
  isSameDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  startOfYear,
  startOfDay,
  endOfDay,
  endOfYear,
  differenceInDays,
  isWithinInterval,
  getQuarter,
  startOfQuarter,
  endOfQuarter,
  max as maxDate,
  min as minDate,
  setYear,
} from 'date-fns';
import { isValidDate, setTransitionTimeout } from '../helpers';

export let value;
export let locale;
export let begin;
export let end;
export let mode;
export let host;

const dispatch = createEventDispatcher();

function touch() {
  setTransitionTimeout(host, () => {
    touched = true;
  });
}

function weekStart(region) {
  if ('AEAFBHDJDZEGIQIRJOKWLYOMQASDSY'.match(/../g).includes(region)) {
    return 6;
  }
  if ('AGARASAUBDBRBSBTBWBZCACNCODMDOETGTGUHKHNIDILINJMJPKEKHKRLAMHMMMOMTMXMZNINPPAPEPHPKPRPTPYSASGSVTHTTTWUMUSVEVIWSYEZAZW'.match(/../g).includes(region)) {
    return 0;
  }
  return 1;
}

function decodeLocale(locale) {
  return locale.match(/^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|\d{3})(?=$|[_-]+))?/);
}

let fromDate = value && startOfDay(Array.isArray(value) ? value[0] : new Date(String(value).split(',')[0]));
let toDate = value && startOfDay(Array.isArray(value)
  ? (value[1] || value[0])
  : new Date(String(value).split(',')[1] || String(value).split(',')[0]));

if (!isValidDate(fromDate)) {
  fromDate = null;
}

if (!isValidDate(toDate)) {
  toDate = null;
}

$: isRange = mode === 'range';

if (mode === 'range' && (fromDate && !toDate) || (toDate && !fromDate)) {
  fromDate = null;
  toDate = null;
}

let navDate = startOfMonth(toDate || new Date);
let hoverDate;
let todayDate = new Date;
let yearPopup;
let monthPopup;
let touched = false;

$: navDateCurrentYear = setYear(new Date(navDate), todayDate.getFullYear());
$: host.setAttribute('type', isRange ? 'daterange' : 'date');
$: navQuater = getQuarter(navDate);
$: navMonthStartDate = navDate;
$: navMonthEndDate = endOfMonth(navDate);
$: weekStartDate = weekStart(decodeLocale(locale)[4]);
$: navStartDate = startOfWeek(navDate, { weekStartsOn: weekStartDate });
$: navEndDate = (() => {
  let dt = endOfWeek(navMonthEndDate, { weekStartsOn: weekStartDate });

  while (differenceInDays(dt, navStartDate) < 41) {
    dt = addDays(dt, 7);
  }

  return dt;
})();
$: beginDate = (() => {
  let date;

  if (begin) {
    date = startOfDay(new Date(begin));

    if (begin === 'today' || begin === 'now' || isAfter(date, todayDate)) {
      return todayDate;
    }

    return date;
  }

  return addYears(todayDate, -10);
})();
$: endDate = (() => {
  let date;

  if (end) {
    date = endOfDay(new Date(end));

    if (end === 'today' || end === 'now' || isBefore(date, beginDate)) {
      return todayDate;
    }

    return date;
  }

  return addYears(todayDate, 10);
})();
$: monthDays = (() => {
  let arr = [];
  let date = navStartDate;

  while (isBefore(date, navEndDate)) {
    arr.push({
      date,
      modifiers: getDayModifiers(
        date,
        navMonthStartDate,
        navMonthEndDate,
        fromDate,
        toDate,
        hoverDate,
        beginDate,
        endDate
      ),
    });

    date = addDays(date, 1);
  }

  return arr;
})();
$: startOfYearDate = startOfYear(navDate);
$: months = touched ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
  return addMonths(startOfYear(navDate), i);
}) : [];
$: years = (() => {
  if (!touched) return [];

  const list = [];

  const startYear = beginDate.getFullYear();
  const endYear = endDate.getFullYear();

  for (let i = 0; i <= endYear - startYear; i++) {
    list.push(setYear(navDate, startYear + i));
  }

  return list;
})();
$: weekDays = monthDays.slice(0, 7).map(day => day.date);
$: currentYear = navDate.toLocaleString(locale, { year: 'numeric' });
$: currentMonth = navDate.toLocaleString(locale, { month: 'short' });
$: haveNextMonth = isMonthInRange(addMonths(navDate, 1), beginDate, endDate);
$: havePrevMonth = isMonthInRange(addMonths(navDate, -1), beginDate, endDate);
$: haveNextYear = isYearInRange(addYears(navDate, 1), beginDate, endDate);
$: havePrevYear = isYearInRange(addYears(navDate, -1), beginDate, endDate);
$: yearRange = (() => {
  return [
    maxDate([beginDate, startOfYear(navDate)]),
    minDate([endDate, endOfYear(navDate)]),
  ];
})();
$: quaterRange = (() => {
  return [
    maxDate([beginDate, startOfQuarter(navDate)]),
    minDate([endDate, endOfQuarter(navDate)]),
  ];
})();
$: monthRange = (() => {
  return [
    maxDate([beginDate, startOfMonth(navDate)]),
    minDate([endDate, endOfMonth(navDate)]),
  ];
})();

function isMonthInRange(monthDate, beginDate, endDate) {
  const monthBeginDate = startOfMonth(beginDate);
  const monthEndDate = endOfMonth(endDate);

  return isWithinInterval(monthDate, {
    start: monthBeginDate,
    end: monthEndDate,
  });
}

function isYearInRange(yearDate, beginDate, endDate) {
  const yearBeginDate = startOfYear(beginDate);
  const yearEndDate = endOfYear(endDate);

  return isWithinInterval(yearDate, {
    start: yearBeginDate,
    end: yearEndDate,
  });
}

function nextMonth() {
  navDate = addMonths(navDate, 1);
}

function prevMonth() {
  navDate = addMonths(navDate, -1);
}

function nextYear() {
  navDate = addYears(navDate, 1);
}

function prevYear() {
  navDate = addYears(navDate, -1);
}

function getDayModifiers(date, navMonthStartDate, navMonthEndDate, fromDate, toDate, hoverDate, beginDate, endDate) {
  const mods = ['day'];
  const rangeMod = fromDate && toDate ? 'range-inside' : 'range';

  if (isBefore(date, navMonthStartDate) || isAfter(date, navMonthEndDate)) {
    mods.push('other-month');
  }

  if (isSameDay(date, todayDate)) {
    mods.push('today');
  }

  if (!isWithinInterval(date, {
    start: beginDate,
    end: endDate,
  })) {
    mods.push('disabled');

    return mods.join(' ');
  }

  if (fromDate && isSameDay(date, fromDate)) {
    mods.push('start');
  }

  if (toDate && isSameDay(date, toDate)) {
    mods.push('end');
  }

  if (isSameDay(date, fromDate) && isSameDay(fromDate, toDate)) {
    mods.push('selected');
  }

  if (fromDate && toDate
    && isAfter(date, fromDate)
    && isBefore(date, toDate)) {
    mods.push(rangeMod);
  } else if (fromDate && !toDate
    && isAfter(date, fromDate)
    && (isBefore(date, hoverDate) || isSameDay(date, hoverDate))) {
    mods.push(rangeMod);
  }

  return mods.join(' ');
}

function selectRange(date) {
  if (isRange) {
    if (fromDate && !toDate && (isAfter(date, fromDate) || isSameDay(date, fromDate))) {
      toDate = date;

      dispatch('input', [fromDate, toDate]);
    } else {
      fromDate = date;

      toDate = null;
    }
  } else {
    fromDate = date;
    toDate = date;

    dispatch('input', date);
  }
}

function setHover(date) {
  hoverDate = date;
}

function toLowerCase(date) {
  return date ? date.toString().toLowerCase() : '';
}

function toggle() {
  touched = true;
}

function setRange(range) {
  fromDate = startOfDay(range[0]);
  toDate = startOfDay(range[1]);

  dispatch('input', range);
}

</script>
