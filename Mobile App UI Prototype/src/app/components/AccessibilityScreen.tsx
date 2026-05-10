import { useState } from 'react';
import { ArrowLeft, Volume2, Type, Eye, Vibrate, Mic, Moon, Sun, Zap } from 'lucide-react';

interface AccessibilityScreenProps {
  onBack: () => void;
}

export function AccessibilityScreen({ onBack }: AccessibilityScreenProps) {
  const [settings, setSettings] = useState({
    voiceGuidance: true,
    largeText: false,
    highContrast: false,
    hapticFeedback: true,
    voiceControl: false,
    screenReader: true,
    reduceMotion: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 min-h-[700px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Accessibility Settings</h2>
      </div>

      {/* Settings List */}
      <div className="flex-1 space-y-4 overflow-y-auto">
        <p className="text-gray-600 mb-6">
          Customize the app to match your accessibility needs
        </p>

        {/* Visual Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5" />
            Visual
          </h3>

          <SettingToggle
            icon={<Type className="w-5 h-5" />}
            label="Large Text"
            description="Increase font size throughout the app"
            enabled={settings.largeText}
            onToggle={() => toggleSetting('largeText')}
          />

          <SettingToggle
            icon={<Sun className="w-5 h-5" />}
            label="High Contrast"
            description="Enhanced color contrast for better visibility"
            enabled={settings.highContrast}
            onToggle={() => toggleSetting('highContrast')}
          />

          <SettingToggle
            icon={<Zap className="w-5 h-5" />}
            label="Reduce Motion"
            description="Minimize animations and transitions"
            enabled={settings.reduceMotion}
            onToggle={() => toggleSetting('reduceMotion')}
          />
        </div>

        {/* Audio Section */}
        <div className="space-y-3 pt-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-3">
            <Volume2 className="w-5 h-5" />
            Audio
          </h3>

          <SettingToggle
            icon={<Volume2 className="w-5 h-5" />}
            label="Voice Guidance"
            description="Spoken instructions and feedback"
            enabled={settings.voiceGuidance}
            onToggle={() => toggleSetting('voiceGuidance')}
            recommended
          />

          <SettingToggle
            icon={<Eye className="w-5 h-5" />}
            label="Screen Reader Support"
            description="Optimized for screen readers"
            enabled={settings.screenReader}
            onToggle={() => toggleSetting('screenReader')}
            recommended
          />

          <SettingToggle
            icon={<Mic className="w-5 h-5" />}
            label="Voice Control"
            description="Navigate using voice commands"
            enabled={settings.voiceControl}
            onToggle={() => toggleSetting('voiceControl')}
          />
        </div>

        {/* Haptic Section */}
        <div className="space-y-3 pt-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-3">
            <Vibrate className="w-5 h-5" />
            Touch & Haptic
          </h3>

          <SettingToggle
            icon={<Vibrate className="w-5 h-5" />}
            label="Haptic Feedback"
            description="Vibration feedback for interactions"
            enabled={settings.hapticFeedback}
            onToggle={() => toggleSetting('hapticFeedback')}
          />
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
          <p className="text-sm text-blue-900 font-medium mb-2">
            💡 Accessibility First
          </p>
          <p className="text-sm text-blue-800 leading-relaxed">
            These settings are designed based on research with persons with disabilities in the Philippines. All features work independently and can be combined.
          </p>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={onBack}
        className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all mt-6"
      >
        Save & Continue
      </button>

      <p className="text-xs text-gray-500 text-center pt-4">
        Settings are saved automatically
      </p>
    </div>
  );
}

interface SettingToggleProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  recommended?: boolean;
}

function SettingToggle({ icon, label, description, enabled, onToggle, recommended }: SettingToggleProps) {
  return (
    <div
      className={`p-4 rounded-xl border-2 transition-all ${
        enabled ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
            enabled ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-base font-bold text-gray-900">{label}</h4>
            {recommended && (
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                RECOMMENDED
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <button
            onClick={onToggle}
            className={`h-10 px-6 rounded-lg font-semibold text-sm transition-colors ${
              enabled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {enabled ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </div>
    </div>
  );
}
