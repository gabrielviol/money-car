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

export const TableUsers = styled('table', {
  fontFamily: '$default',
  padding: '2rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid white',
  background: '$gray800',
  borderCollapse: 'collapse',
  'thead': {
    display: 'flex',
    justifyContent: 'center'
  },

  'tr': {
    display: 'flex',
    justifyContent: 'end',
    gap: '2rem',
    borderBottom: '1px solid #dddddd'
  },

  'tbody': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }
})