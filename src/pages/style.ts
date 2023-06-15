import { Box, styled } from "@ignite-ui/react";

export const Container = styled('div', {
  width: '80%',
  height: '100%',
  padding: '50px 100px',
  margin: '$6 auto',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid white',
  borderRadius: '$sm',
  gap: '1rem'
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

export const TableUsers = styled('table', {
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',
  backgroundColor: '#333',

  'tbody': {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    gap: '1rem',
  }
})
