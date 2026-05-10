import { useState } from 'react';
import { ArrowLeft, Camera, FileText, User, Phone, Shield, ChevronRight } from 'lucide-react';

interface RegistrationScreenProps {
  onComplete: () => void;
  onBack: () => void;
  onAccessibility: () => void;
}

export function RegistrationScreen({ onComplete, onBack, onAccessibility }: RegistrationScreenProps) {
  const [step, setStep] = useState<'method' | 'manual' | 'scan' | 'verify' | 'setup'>('method');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [scanned, setScanned] = useState(false);

  const handleManualEntry = () => {
    if (idNumber.length >= 10 && phone.length >= 10) {
      setStep('verify');
      setTimeout(() => setStep('setup'), 2000);
    }
  };

  const handleScan = () => {
    setScanned(true);
    setTimeout(() => {
      setStep('verify');
      setTimeout(() => setStep('setup'), 2000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 min-h-[700px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => step === 'method' ? onBack() : setStep('method')}
          className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Register</h2>
        <button
          onClick={onAccessibility}
          className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
          aria-label="Accessibility settings"
        >
          <Shield className="w-6 h-6 text-blue-600" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className={`h-2 w-16 rounded-full transition-colors ${step === 'method' || step === 'manual' || step === 'scan' ? 'bg-blue-600' : 'bg-gray-300'}`} />
        <div className={`h-2 w-16 rounded-full transition-colors ${step === 'verify' ? 'bg-blue-600' : 'bg-gray-300'}`} />
        <div className={`h-2 w-16 rounded-full transition-colors ${step === 'setup' ? 'bg-blue-600' : 'bg-gray-300'}`} />
      </div>

      {/* Method Selection */}
      {step === 'method' && (
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Link Your PWD ID</h3>
            <p className="text-gray-600">Choose how you'd like to register your existing PWD ID</p>
          </div>

          <div className="space-y-4">
            <MethodButton
              icon={<Camera className="w-8 h-8" />}
              title="Scan Physical ID"
              description="Use your camera to scan your PWD ID card"
              onClick={() => setStep('scan')}
              recommended
            />

            <MethodButton
              icon={<FileText className="w-8 h-8" />}
              title="Enter Manually"
              description="Type your PWD ID number and details"
              onClick={() => setStep('manual')}
            />
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-900 font-medium mb-2">
              ℹ️ Already have a PWD ID?
            </p>
            <p className="text-sm text-blue-800">
              This app digitizes your existing PWD ID from DSWD/NCDA. If you don't have one yet, please visit your local government office.
            </p>
          </div>
        </div>
      )}

      {/* Manual Entry */}
      {step === 'manual' && (
        <div className="flex-1 flex flex-col">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
            <p className="text-gray-600">Information from your PWD ID card</p>
          </div>

          <div className="space-y-5 flex-1">
            <InputField
              icon={<FileText className="w-5 h-5" />}
              label="PWD ID Number"
              placeholder="2026-VII-12345"
              value={idNumber}
              onChange={setIdNumber}
              helperText="Found on the front of your PWD ID"
            />

            <InputField
              icon={<User className="w-5 h-5" />}
              label="Full Name"
              placeholder="Juan Dela Cruz"
              value=""
              onChange={() => {}}
              helperText="As written on your ID"
            />

            <InputField
              icon={<Phone className="w-5 h-5" />}
              label="Mobile Number"
              placeholder="+63 912 345 6789"
              value={phone}
              onChange={setPhone}
              helperText="For verification code"
            />

            <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
              <p className="text-sm text-amber-900 font-medium">
                📱 We'll send a verification code to confirm your identity
              </p>
            </div>
          </div>

          <button
            onClick={handleManualEntry}
            disabled={idNumber.length < 10 || phone.length < 10}
            className={`w-full h-16 rounded-2xl font-semibold text-lg shadow-lg transition-all mt-6 ${
              idNumber.length >= 10 && phone.length >= 10
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      )}

      {/* Scan ID */}
      {step === 'scan' && (
        <div className="flex-1 flex flex-col items-center justify-center">
          {!scanned ? (
            <>
              <div className="w-full max-w-sm aspect-[3/2] bg-gray-900 rounded-2xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-3/4 border-4 border-white rounded-xl animate-pulse" />
                </div>
                <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Position Your PWD ID</h3>
              <p className="text-gray-600 text-center mb-6 max-w-xs">
                Place your PWD ID card within the frame. Make sure it's well-lit and readable.
              </p>
              <button
                onClick={handleScan}
                className="w-full max-w-xs h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Capture ID
              </button>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ID Captured!</h3>
              <p className="text-gray-600">Processing your information...</p>
            </>
          )}
        </div>
      )}

      {/* Verification */}
      {step === 'verify' && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Verifying Identity</h3>
          <p className="text-gray-600 text-center max-w-xs">
            Checking your details with DSWD/NCDA database...
          </p>
        </div>
      )}

      {/* Setup Authentication */}
      {step === 'setup' && (
        <div className="flex-1 flex flex-col">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Verified Successfully!</h3>
            <p className="text-gray-600">Now, set up your secure access method</p>
          </div>

          <div className="space-y-4 flex-1">
            <p className="font-semibold text-gray-900 mb-2">Choose your authentication:</p>

            <SetupMethodCard
              title="Biometric"
              description="Face ID or Fingerprint"
              recommended
            />
            <SetupMethodCard
              title="Voice"
              description="Speak your passphrase"
            />
            <SetupMethodCard
              title="PIN Code"
              description="4-6 digit PIN"
            />
          </div>

          <button
            onClick={onComplete}
            className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all mt-6"
          >
            Complete Setup
          </button>
        </div>
      )}
    </div>
  );
}

function MethodButton({ icon, title, description, onClick, recommended }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center gap-4 text-left group relative"
    >
      {recommended && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          EASIER
        </div>
      )}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
    </button>
  );
}

function InputField({ icon, label, placeholder, value, onChange, helperText }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium"
        />
      </div>
      {helperText && <p className="text-xs text-gray-500 mt-2">{helperText}</p>}
    </div>
  );
}

function SetupMethodCard({ title, description, recommended }: any) {
  return (
    <div className={`p-4 rounded-xl border-2 ${recommended ? 'border-green-400 bg-green-50' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {recommended && (
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            BEST
          </span>
        )}
      </div>
    </div>
  );
}
