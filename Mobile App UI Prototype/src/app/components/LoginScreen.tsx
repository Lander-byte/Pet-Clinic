import { useState } from 'react';
import { ArrowLeft, Fingerprint, Mic, QrCode, KeyRound, Eye, EyeOff, Settings } from 'lucide-react';

interface LoginScreenProps {
  onAuthenticate: () => void;
  onBack: () => void;
  onAccessibility: () => void;
}

export function LoginScreen({ onAuthenticate, onBack, onAccessibility }: LoginScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    if (method !== 'pin') {
      // Simulate authentication for non-PIN methods
      setIsAuthenticating(true);
      setTimeout(() => {
        onAuthenticate();
      }, 1500);
    }
  };

  const handlePinSubmit = () => {
    if (pin.length >= 4) {
      setIsAuthenticating(true);
      setTimeout(() => {
        onAuthenticate();
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 min-h-[700px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
        <button
          onClick={onAccessibility}
          className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Accessibility settings"
        >
          <Settings className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {!selectedMethod ? (
        <>
          {/* Method Selection */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-lg text-gray-600 text-center mb-8">
              Choose your preferred authentication method
            </p>

            <div className="space-y-4">
              <AuthMethodButton
                icon={<Fingerprint className="w-8 h-8" />}
                title="Biometric"
                description="Face ID or Fingerprint"
                onClick={() => handleMethodSelect('biometric')}
                recommended
              />

              <AuthMethodButton
                icon={<Mic className="w-8 h-8" />}
                title="Voice Authentication"
                description="Speak your passphrase"
                onClick={() => handleMethodSelect('voice')}
              />

              <AuthMethodButton
                icon={<KeyRound className="w-8 h-8" />}
                title="PIN Code"
                description="4-6 digit PIN"
                onClick={() => handleMethodSelect('pin')}
              />

              <AuthMethodButton
                icon={<QrCode className="w-8 h-8" />}
                title="QR Code Scan"
                description="Scan your digital ID"
                onClick={() => handleMethodSelect('qr')}
              />
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center pt-6">
            All methods are equally secure and accessible
          </p>
        </>
      ) : isAuthenticating ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6" />
          <p className="text-xl font-medium text-gray-700">Authenticating...</p>
          <p className="text-gray-500 mt-2">Please wait</p>
        </div>
      ) : selectedMethod === 'pin' ? (
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Your PIN</h3>
            <p className="text-gray-600">Enter your 4-6 digit PIN code</p>
          </div>

          {/* PIN Display */}
          <div className="flex justify-center gap-3 mb-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-12 h-14 rounded-xl border-2 flex items-center justify-center text-2xl font-bold transition-all ${
                  i < pin.length
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-300 bg-gray-50 text-gray-400'
                }`}
              >
                {i < pin.length ? (showPin ? pin[i] : '•') : ''}
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowPin(!showPin)}
            className="flex items-center justify-center gap-2 text-gray-600 mb-6 self-center hover:text-gray-800 transition-colors"
          >
            {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            <span className="text-sm font-medium">{showPin ? 'Hide' : 'Show'} PIN</span>
          </button>

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => pin.length < 6 && setPin(pin + num)}
                className="h-16 text-2xl font-bold rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setPin(pin.slice(0, -1))}
              className="h-16 text-lg font-medium rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={() => pin.length < 6 && setPin(pin + '0')}
              className="h-16 text-2xl font-bold rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors"
            >
              0
            </button>
            <button
              onClick={handlePinSubmit}
              disabled={pin.length < 4}
              className={`h-16 text-lg font-semibold rounded-xl transition-colors ${
                pin.length >= 4
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Enter
            </button>
          </div>

          <button
            onClick={() => setSelectedMethod(null)}
            className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Use different method
          </button>
        </div>
      ) : null}
    </div>
  );
}

interface AuthMethodButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  recommended?: boolean;
}

function AuthMethodButton({ icon, title, description, onClick, recommended }: AuthMethodButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center gap-4 text-left group relative"
    >
      {recommended && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          BEST
        </div>
      )}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  );
}
