// src/components/InterestContact.jsx
export default function InterestContact() {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-4 print:hidden">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Minat & Kontak</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Interest */}
                    <div className="bg-white p-6 text-center rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Minat</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Pengembangan Web Frontend</li>
                            <li>Teknologi dan Otomasi Produksi</li>
                            <li>Perakitan Komputer & Perangkat Jaringan</li>
                            <li>Belajar Software Produktivitas (Ms. Excel, Input Data)</li>
                            <li>Belajar Software Desain (Canva, CorelDraw, dll)</li>
                            <li>Pengembangan Soft Skill dan Disiplin Kerja</li>
                            <li>Kerja Tim dan Kepedulian Terhadap Proses</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="bg-white p-6 text-center rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Kontak</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>
                                <span className="font-semibold">Email:</span>{" "}
                                <a
                                    href="mailto:mawarekautami@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    mawarekautami@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold">LinkedIn:</span>{" "}
                                <a
                                    href="https://www.linkedin.com/in/mawar-eka-utami-a30758369/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    mawarekautami
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold">Telepon:</span> +62 8572-0043-130
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
