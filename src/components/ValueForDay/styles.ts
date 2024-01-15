import { styled } from "@ignite-ui/react"

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

   '@media (max-width: 990px)':{
      fontSize: '14px',
   }
 })

 export const ContentValueForDay = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   'span': {
     fontSize: '22px',
   },
   '@media (max-width: 990px)':{
      alignItems: 'end',
      'span': {
         fontSize: '18px',
       }
   }
 })

 export const Value = styled('span', {
   fontSize: '22px',
   marginRight: '10px',
   '@media (max-width: 990px)':{
      fontSize: '18px',
   }
 })

 export const Input = styled('input', {
   width: '60px',
   marginRight: '10px',
   fontSize: '16px',
   padding: '4px',
   '@media (max-width: 990px)':{
      fontSize: '18px',
   }
 })

 export const Wrapper = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
 })