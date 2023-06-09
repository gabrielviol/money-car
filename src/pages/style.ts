import { Box, styled } from "@ignite-ui/react";

export const Container = styled('div', {
  width: '80%',
  height: '100%',
  margin: '$6 auto',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid white',
  borderRadius: '$sm',
})

export const Content = styled(Box, {
  width: '40rem',
  height: '35rem',
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