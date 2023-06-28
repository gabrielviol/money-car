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
  borderTop: '1px solid #ddd',
});

export const TableHead = styled('thead', {
  backgroundColor: '#373737',
});

export const TableHeader = styled('th', {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
});

export const TableBody = styled('tbody', {});

export const TableRow = styled('tr', {
  '&:nth-of-type(even)': {
    backgroundColor: '#373737'
  },
});

export const TableCell = styled('td', {
  padding: '10px 5px',
  borderBottom: '1px solid #ddd',
});

export const ContentValueForDay = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  'span': {
    fontSize: '22px',
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