// src/components/Education.jsx
export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 print:mb-0">Pendidikan</h2>
      <div className="space-y-4">
        <div className="bg-white shadow rounded-lg p-4 print:py-0 print-clean ">
          <h3 className="text-lg font-semibold ">Teknik Komputer dan Jaringan (TKJ)</h3>
          <p className="text-sm text-gray-600">SMK SAKTI GEMOLONG, 2022 - 2025</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 print:py-0 print-clean">
          <h3 className="text-lg font-semibold">SMP NEGERI 1 PLUPUH</h3>
          <p className="text-sm text-gray-600">2019 - 2022</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 print:py-0 print-clean">
          <h3 className="text-lg font-semibold">SD NEGERI DARI 2</h3>
          <p className="text-sm text-gray-600">2013 - 2019</p>
        </div>
      </div>
    </div>
  );
}
