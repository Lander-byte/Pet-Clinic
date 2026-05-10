import { ArrowLeft, Settings, User, QrCode, Shield, Phone, MapPin, Calendar } from 'lucide-react';

interface IDCardScreenProps {
  onBack: () => void;
  onAccessibility: () => void;
}

export function IDCardScreen({ onBack, onAccessibility }: IDCardScreenProps) {
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
        <h2 className="text-2xl font-bold text-gray-900">My Digital ID</h2>
        <button
          onClick={onAccessibility}
          className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Accessibility settings"
        >
          <Settings className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* ID Card */}
      <div className="flex-1 flex flex-col">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 shadow-xl mb-6">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">PWD ID</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </div>

          {/* Photo and Info */}
          <div className="flex gap-6 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1 text-white space-y-2">
              <h3 className="text-2xl font-bold">Juan Dela Cruz</h3>
              <p className="text-blue-100 text-sm">PWD ID: 2026-VII-12345</p>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg inline-block">
                <span className="text-sm font-medium">Visual Disability</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-2xl p-4 flex items-center justify-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <QrCode className="w-32 h-32 text-blue-900" strokeWidth={1.5} />
            </div>
          </div>

          <p className="text-blue-100 text-sm text-center mt-4">
            Scan to verify identity
          </p>
        </div>

        {/* Personal Information */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h4>

          <InfoRow
            icon={<Calendar className="w-5 h-5" />}
            label="Date of Birth"
            value="January 15, 1990"
          />

          <InfoRow
            icon={<MapPin className="w-5 h-5" />}
            label="Address"
            value="Cebu City, Region 7"
          />

          <InfoRow
            icon={<Phone className="w-5 h-5" />}
            label="Contact"
            value="+63 912 345 6789"
          />

          <InfoRow
            icon={<Shield className="w-5 h-5" />}
            label="Valid Until"
            value="December 31, 2026"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="h-14 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Share ID
          </button>
          <button className="h-14 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            Download
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 text-center pt-4">
        This is a secure digital representation of your PWD ID
      </p>
    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <p className="text-base font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
