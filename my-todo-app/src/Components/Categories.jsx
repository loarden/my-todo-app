import { Card, CardContent, Typography } from "@mui/material"

function Categories({title}) {
  return (
    <Card sx={{ maxWidth: '20em', width: '100%', minHeight: '10em' }}>
      <CardContent>
        <Typography variant="h5" sx={{textAlign: 'center', borderBottom: '1px solid black'}}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Categories