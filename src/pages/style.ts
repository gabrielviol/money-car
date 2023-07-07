import { Box, styled } from "@ignite-ui/react";
import * as Popover from '@radix-ui/react-popover';

export const Container = styled('div', {
  width: '80%',
  height: '100%',
  padding: '50px 100px',
  margin: '$6 auto',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid white',
  borderRadius: '$sm',
  gap: '5rem'
})

export const Content = styled(Box, {
  width: '40rem',
  height: '100%',
  padding: 0,
  display: 'grid',
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const Table = styled('table', {
  borderCollapse: 'collapse',
  width: '100%',
  fontFamily: '$default',
  lineHeight: '1.5',
  fontWeight: '$regular',
  fontSize: '$xls',
});

export const Caption = styled('caption', {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  paddingTop: '5px',
  borderTop: '1px solid #ddd'
});

export const TableHead = styled('thead', {
  backgroundColor: '$gray600'
});

export const TableHeader = styled('th', {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
});

export const TableBody = styled('tbody', {
});

export const TableRow = styled('tr', {
  '&:nth-of-type(even)': {
    backgroundColor: '$gray600',
  },
  '&:hover': {
    background: '$gray500',
  }
});

export const TableCell = styled('td', {
  padding: '10px 5px',
  borderBottom: '1px solid #ddd',
});

export const PopoverTrigger = styled(Popover.Trigger, {
  'span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$gray900',
    position: 'absolute',
    marginTop: '-1.5rem',
    marginLeft: '0.9rem',
    padding: '10px',
    cursor: 'pointer',
    'svg': {
      color: '#3498db',
    }
  }
})
export const PopoverContent = styled(Popover.Content, {
  borderRadius: '4px',
  padding: '20px',
  width: '220px',
  backgroundColor: 'white',
  willChange: 'transform, opacity',
  'div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    'span': {
      marginBottom: '10px',
    },
    'div': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
    },
    'button': {
      border: 'none',
      background: '$gray600',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    'button:hover': {
      background: '$gray500',
    }
  }
})
export const PopoverClose = styled(Popover.Close, {
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray500',
  position: 'absolute',
  top: '5px',
  right: '5px',
  '&:hover': {
    color: 'black'
  },
  '&:focus': {
    boxShadow: '0 0 0 2px black'
  }
})

export const ContentValueForDay = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  'span': {
    fontSize: '22px',
  }
})

export const ContentAddNewDriver = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  'span': {
    fontSize: '22px',
  },
  'form': {
    display: 'flex'
  },
  'input': {
    width: '105px'
  }
})

export const DriversDash = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '5rem'
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const Value = styled('span', {
  fontSize: '22px',
  marginRight: '10px',
});

export const Input = styled('input', {
  width: '60px',
  marginRight: '10px',
  fontSize: '16px',
  padding: '4px',
});

export const Button = styled('button', {
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 16px',
  cursor: 'pointer',
  fontSize: '16px',

  '&:hover': {
    backgroundColor: '#2980b9',
  },
});