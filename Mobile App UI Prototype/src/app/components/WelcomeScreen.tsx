import { Fingerprint, Shield, Accessibility } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: 'welcome' | 'register' | 'login' | 'id' | 'accessibility') => void;
  isRegistered: boolean;
}

export function WelcomeScreen({ onNavigate, isRegistered }: WelcomeScreenProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[700px] flex flex-col">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        {/* Logo/Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-lg">
          <Shield className="w-14 h-14 text-white" strokeWidth={2.5} />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">
            AccessID
          </h1>
          <p className="text-xl text-gray-600 max-w-xs mx-auto leading-relaxed">
            Accessible Digital Identity for Everyone
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 pt-6 w-full">
          <FeatureItem
            icon={<Fingerprint className="w-6 h-6" />}
            text="Multiple Authentication Options"
          />
          <FeatureItem
            icon={<Accessibility className="w-6 h-6" />}
            text="Designed for All Abilities"
          />
          <FeatureItem
            icon={<Shield className="w-6 h-6" />}
            text="Secure & Private"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="space-y-3 pt-8">
        {!isRegistered ? (
          <>
            <button
              onClick={() => onNavigate('register')}
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            >
              Register New Account
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="w-full h-14 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              Already Registered? Sign In
            </button>
          </>
        ) : (
          <button
            onClick={() => onNavigate('login')}
            className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          >
            Sign In
          </button>
        )}
        <button
          onClick={() => onNavigate('accessibility')}
          className="w-full h-14 bg-gray-100 text-gray-700 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
        >
          <Accessibility className="w-5 h-5" />
          Accessibility Settings
        </button>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 text-center pt-6">
        {isRegistered
          ? 'Welcome back! Sign in to access your digital ID'
          : 'Research-based design for PWDs in the Philippines'
        }
      </p>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <p className="text-left text-base text-gray-700 font-medium">{text}</p>
    </div>
  );
}
