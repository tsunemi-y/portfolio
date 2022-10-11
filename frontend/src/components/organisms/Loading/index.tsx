import CircularProgress from '@mui/material/CircularProgress'
import Box from 'components/layout/Box'

const Loading = () => {

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <CircularProgress size={60}/>
    </Box>
  )
}

export default Loading