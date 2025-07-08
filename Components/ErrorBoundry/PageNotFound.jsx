
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css'; // Reuse the same styling

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2 className='login-title'>404 – Page Not Found</h2>
                <p style={{ color: 'gray', fontSize: '16px', marginBottom: '30px', textAlign: 'center' }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button className='continue-btn' onClick={() => navigate('/')}>
                    Go to Home
                </button>
                <p style={{ color: 'gray', fontSize: '14px', marginTop: '20px', textAlign: 'center' }}>
                    Try to login to access your account or return to the home page.
                </p>
                <button className='continue-btn' onClick={() => navigate('/login')}>
                    Go to Login
                </button>
            </div>
        </div>
    );
}
