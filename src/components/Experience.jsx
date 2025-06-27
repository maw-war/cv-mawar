// src/components/Experience.jsx
export default function Experience() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-4 print-clean">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 print:mb-0">Pengalaman Kerja</h2>
            <div className="space-y-4">
                <div className="bg-white shadow rounded-lg p-4 print:py-0 print-clean">
                    <h3 className="text-lg font-semibold">Operator Produksi/Packing (Internship)</h3>
                    <p className="text-sm text-gray-600">PT. Madusari Nusaperdana
                        Factory Ready to Eat Sausages, Maret 2024 - September 2024</p>
                    <p className="text-gray-700 mt-2 text-justify leading-relaxed print-clean">
                        Selama mengikuti program magang di PT. Madusari Nusaperdana, saya bertugas membantu proses produksi dan pengemasan produk sosis siap saji. Saya menjalankan tugas pengecekan kualitas bahan baku dan hasil akhir sesuai standar perusahaan, serta menjaga kebersihan area kerja dengan mengikuti prosedur K3 (Keselamatan dan Kesehatan Kerja). Selain itu, saya bekerja dalam sistem shift bersama tim untuk memastikan target harian produksi dan packing tercapai dengan efisien dan tepat waktu.
                    </p>
                </div>
            </div>
        </div>
    );
}
