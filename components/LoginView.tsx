import React, { useState } from 'react';

interface Props {
  onLogin: () => void;
}

export const LoginView: React.FC<Props> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '133134') {
      onLogin();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🔒
          </div>
          <h1 className="text-2xl font-bold text-gray-800">访问受限</h1>
          <p className="text-gray-500 text-sm mt-2">请输入访问密码进入应用</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              inputMode="numeric"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="请输入密码"
              className="w-full text-center text-2xl tracking-widest p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all placeholder:tracking-normal placeholder:text-base"
              autoFocus
            />
            {error && (
              <p className="text-danger text-xs text-center mt-2 font-medium animate-pulse">
                密码错误，请重试
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
          >
            解锁
          </button>
        </form>
      </div>
    </div>
  );
};
