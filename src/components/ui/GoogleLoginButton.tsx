import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { HandleGoogleLogin } from '@/api/login/HandleLoginGoogle';
import Cookies from 'js-cookie';

const GoogleLoginButton = () => {
  const clientId = "407515638618-to1rr3s1s0uu056vjma88qn00j36c3d3.apps.googleusercontent.com"; // Thay bằng Client ID bạn lấy ở bước 1
  
  const handleSuccess = async (credentialResponse : any) => {
    const googleToken  = credentialResponse.credential;
    try {
      // Gửi token lên backend
      const response : any = await HandleGoogleLogin(googleToken);
      alert('Đăng nhập thành công!');
      Cookies.set("username",response.data.data.username);
      console.log('Server Response:', response.data);
    } catch (error : any) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className='btn-google'>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
