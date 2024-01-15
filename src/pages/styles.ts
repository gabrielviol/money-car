import { Box, styled } from "@ignite-ui/react"

export const Container = styled('div', {
   width: '80%',
   height: '100%',
   padding: '50px 100px',
   margin: '$6 auto',
   display: 'flex',
   justifyContent: 'center',
   border: '1px solid white',
   borderRadius: '$sm',
   gap: '5rem',
   '@media (max-width: 990px)':{
      width: '100%',
      margin: '0 auto',
      padding: '2rem',
      gap: '2rem',
      alignItems: 'center',
      flexDirection: 'column-reverse'
   }
}
)

export const Content = styled(Box, {
  width: '40rem',
  height: '100%',
  padding: 0,
  display: 'grid',
  position: 'relative',
  border: '2px solid red',

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
  '@media (max-width: 990px)':{
   width: '100%',
   maxHeight:'600px',
   maxWidth:'600px',
}
})

export const DriversDash = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '5rem'
})



