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