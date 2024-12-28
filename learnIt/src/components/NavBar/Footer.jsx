import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: '#662249', color: 'white' }}>
    <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
      Какво правим?
    </Typography>
    <Typography variant="body1" textAlign="center" maxWidth="800px" mx="auto">
      Нашата платформа свързва учители и ученици, предоставяйки им възможност за ефективно сътрудничество, споделяне на ресурси и информация. Създадена е с цел улесняване на образователния процес чрез модерни технологии.
    </Typography>
  </Box>
  
  )
}

export default Footer
