"use client";
import Link from "next/link";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";

interface LoginComponentProps {
  email: string;
  password: string;
  error: string;
  success: boolean;
  loading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({
  email,
  password,
  error,
  success,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-xs mb-4">Đăng nhập thành công!</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-blue-500 text-white rounded-md ${
              loading ? "opacity-50" : "hover:bg-blue-600"
            } focus:outline-none`}
          >
            {loading ? "Đang đăng nhập..." : "Log in"}
          </button>
          <div className="mt-2">
            <GoogleLoginButton />
          </div>
          <div className="mt-4 text-center">
            <div>
              <Link
                href="/auth/register"
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account?
              </Link>
            </div>
            <div>
              <Link
                href="/auth/reset-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Reset password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
