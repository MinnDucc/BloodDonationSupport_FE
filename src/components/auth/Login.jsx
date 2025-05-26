import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from '@react-oauth/google';
import login from '../../api/login2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    const flag = await login(data);
    if (flag) {
      navigate('/user');
    }
  };


  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post('/api/auth/google-login', { token });
      navigate('/user');
    } catch (error) {
      console.error("Google login failed", error);
    }
  };


  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '100px' }} >
      <Paper elevation={10} sx={{ p: 4, mt: 8, borderRadius: '40px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
            Chào mừng bạn quay trở lại
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="account"
              label="Số điện thoại"
              name="account"
              autoComplete="tel"
              autoFocus
              error={!!errors.account}
              helperText={errors.account?.message}
              {...register('account', {
                required: 'Số điện thoại là bắt buộc',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Số điện thoại không hợp lệ',
                },
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register('password', {
                required: 'Mật khẩu là bắt buộc',
                minLength: {
                  value: 6,
                  message: 'Mật khẩu phải có ít nhất 6 ký tự',
                },
              })}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ đăng nhập"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Đăng nhập
            </Button>
            <Grid container justifyContent="space-between">
              <Grid>
                <Link href="/auth/reset-password" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }}>Hoặc tiếp tục với</Divider>

          <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.log("Google login error")} />

          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Grid >
              <Typography variant="body2">
                Chưa có tài khoản?{' '}
                <Link href="/auth/register" variant="body2">
                  Đăng ký ngay
                </Link>

              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}