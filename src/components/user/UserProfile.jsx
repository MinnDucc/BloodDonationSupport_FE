import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Stack,
  Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WcIcon from '@mui/icons-material/Wc';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const UserProfile = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 5, p: 2, boxShadow: 4 }}>
      <CardContent>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={4}>
            <Avatar
              alt={user.full_name}
              src={user.avatar}
              sx={{ width: 120, height: 120, mx: 'auto' }}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight="bold">
                {user.full_name}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon fontSize="small" />
                <Typography>{user.phone_number}</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon fontSize="small" />
                <Typography>{user.address}</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonthIcon fontSize="small" />
                <Typography>{user.date_of_birth}</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <WcIcon fontSize="small" />
                <Typography>{user.gender}</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <BloodtypeIcon fontSize="small" />
                <Typography>{user.blood_type}</Typography>
              </Stack>

              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                size="small"
                sx={{ mt: 1, width: 'fit-content' }}
              >
                Chỉnh sửa
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserProfile;