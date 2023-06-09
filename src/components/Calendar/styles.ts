import { styled, Text } from '@ignite-ui/react'
import * as Popover from '@radix-ui/react-popover';
import * as RadioGroup from '@radix-ui/react-radio-group';


export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',
  textTransform: 'capitalize',

  span: {
    color: '$gray200'
  }
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
  color: '$gray200',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    svg: {
      width: '$5',
      height: '$5'
    },
    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100'
    },
  }
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',

  'thead th': {
    color: '$gray200',
    fontWeight: '$medium',
    fontSize: '$sm'
  },

  'tbody:before': {
    lineHeight: '0.75rem',
    content: '.',
    display: 'block',
    color: '$gray800',
  },

  'tbody td': {
    boxSizing: 'border-box'
  }
})

export const CalendarDay = styled((Popover.Trigger), {
  all: 'unset',
  width: '100%',
  aspectRatio: '1/1',
  background: '$gray600',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $color$gray100'
  }
})
export const PopoverDay = styled((Popover.Content), {
  minWidth: '320px',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid white',

  background: '$gray600',
  borderRadius: '$sm'
})

export const RadioGroupRoot = styled((RadioGroup.Root), {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const RadioGroupItem = styled((RadioGroup.Item), {
  backgroundColor: 'white',
  width: '25px',
  height: '25px',
  borderRadius: '100%',
  boxShadow: '0 2px 10px $gray100',
  '&:hover': {
    backgroundColor: '$gray100'
  },
  '&:focus': {
    boxShadow: '0 0 0 2px black'
  }
})

export const RadioGroupIndicator = styled((RadioGroup.Indicator), {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '$ignite300'
  }
})

export const Label = styled('label', {
  fontSize: '15px',
  lineHeight: 1,
  paddingLeft: '15px'
})