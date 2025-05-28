import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomRoute from './routes/CustomRoute'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId='581056826760-guivkvbnune28fsfipvi0blao6afqv6i.apps.googleusercontent.com'>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <BrowserRouter>
          <CustomRoute />
        </BrowserRouter>
      {/* </LocalizationProvider> */}
    </GoogleOAuthProvider>
  );
}

export default App
