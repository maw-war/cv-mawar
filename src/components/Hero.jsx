import photo from "../assets/photoa.jpeg";

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white text-center py-12 px-4 
    print:py-2 print:px-4 print:pb-2 print:mb-2 print:pt-4 print:text-black print:border-b print:border-black 
    relative print:flex print:items-center print:justify-between">

            {/* Foto versi layar (non-print) */}
            <img
                src={photo}
                alt="Foto Mawar Eka Utami"
                className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-4 print:hidden"
            />

            {/* Foto versi cetak di kanan atas */}
            <div className="hidden print:block print:order-2">
                <img
                    src={photo}
                    alt="Foto Mawar Eka Utami"
                    className="w-24 h-28 object-cover rounded-md border border-black"
                />
            </div>

            {/* Teks nama dan headline */}
            <div className="print:text-left print:flex-1 print:ml-4 print:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 print:text-2xl print:mb-1">
                    Mawar Eka Utami
                </h1>
                <p className="text-xl md:text-2xl print:text-base print:mb-2">
                    Fresh Graduate • Siap Bekerja di Lingkungan Pabrik & Produksi
                </p>
                <div className="hidden print:block leading-snug print:mt-1 print:mb-1">
                    <p>E-mail: mawarekautami@gmail.com | Telepon: +62 8572-0043-130 </p>
                </div>
            </div>
        </div>
    );
}
