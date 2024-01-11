import { styled } from "@ignite-ui/react";
import * as Popover from '@radix-ui/react-popover';

export const Caption = styled('caption', {
   fontSize: '18px',
   fontWeight: 'bold',
   marginBottom: '10px',
   paddingTop: '5px',
   borderTop: '1px solid #ddd'
 });

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

 export const Table = styled('table', {
   borderCollapse: 'collapse',
   width: '100%',
   fontFamily: '$default',
   lineHeight: '1.5',
   fontWeight: '$regular',
   fontSize: '$xls',
 });

 export const TableBody = styled('tbody', {
});

export const TableCell = styled('td', {
   padding: '10px 5px',
   borderBottom: '1px solid #ddd',
   'div': {
     display: 'flex',
     alignItems: 'center',
     gap: '0.2rem'
   },
   variants: {
     selectedDriver: {
       '0': {
         'svg': { color: '$gray600' }
       },
       '1': {
         'svg': { color: '#0080ff' }
       },
       '2': {
         'svg': { color: '#7e75f8', }
 
       },
       '3': {
         'svg': { color: '#ff3f98', }
 
       },
       '4': {
         'svg': { color: '#ff5457', }
 
       },
       '5': {
         'svg': { color: '#ff7f00', }
 
       },
     }
   },
 });

 export const TableHead = styled('thead', {
   backgroundColor: '$gray600'
 });
 
 export const TableHeader = styled('th', {
   padding: '10px',
   textAlign: 'left',
   borderBottom: '1px solid #ddd',
 });
 
 export const TableRow = styled('tr', {
   '&:nth-of-type(even)': {
     backgroundColor: '$gray600',
   },
   '&:hover': {
     background: '$gray500',
   }
 });