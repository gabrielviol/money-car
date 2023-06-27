import { styled } from "@ignite-ui/react";
import * as Popover from '@radix-ui/react-popover';
import * as RadioGroup from '@radix-ui/react-radio-group';

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
  },
  variants: {
    selectedDriver: {
      'default': {
        background: 'blue',
      },
      'motorista-2': {
        background: 'green',
      },
      'motorista-3': {
        background: 'red',
      },

    }
  },
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