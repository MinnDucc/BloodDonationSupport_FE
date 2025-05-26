import { Routes, Route } from 'react-router-dom';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import ForgotPassword from '../../components/auth/ForgotPassword';

export default function AuthPage() {
    return (
        <div className="relative min-h-screen w-full bg-blue-400/40">
            <div className="absolute inset-0 backdrop-blur-sm z-0" />
            <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4">
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="reset-password" element={<ForgotPassword />} />
                </Routes>
            </div>
        </div>
    );
}
