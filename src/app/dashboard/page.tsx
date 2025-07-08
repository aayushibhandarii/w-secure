import { ShieldCheck, ScanBarcode, Bell } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4 mb-4">
            <ShieldCheck className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Secure Transactions</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Real-time monitoring of transactions to detect fraud and anomalies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4 mb-4">
            <ScanBarcode className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold">Product Verification</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Verify the authenticity of products using barcode or QR code scans.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4 mb-4">
            <Bell className="w-8 h-8 text-red-600" />
            <h3 className="text-xl font-semibold">Threat Alerts</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Get notified of suspicious activities or breach attempts in real-time.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-semibold mb-4">Recent Activity</h4>
        <ul className="divide-y divide-gray-200 text-sm text-gray-700">
          <li className="py-2">🔒 Payment flagged from suspicious IP - 2 minutes ago</li>
          <li className="py-2">📦 Product ID #XWZ203 verified successfully</li>
          <li className="py-2">🚨 Multiple login attempts detected - 3 hours ago</li>
        </ul>
      </div>
    </div>
  );
}