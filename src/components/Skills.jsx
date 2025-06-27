// src/components/Skills.jsx
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const skills = [
    { name: "Jaringan Komputer Dasar", color: "bg-green-500" },
    { name: "Administrasi Server Dasar", color: "bg-pink-500" },
    { name: "Mengoperasikan alat produksi", color: "bg-blue-500" },
    { name: "Pengemasan dan pelabelan produk", color: "bg-teal-400" },
    { name: "Quality control sederhana", color: "bg-yellow-400" },
    { name: "Penggunaan APD dan SOP pabrik", color: "bg-gray-700" },
    ,
];

export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 1 },
            },
        },
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 print:mb-0">Keahlian</h2>

            {/* 🎯 Slider (hanya tampil di layar) */}
            <div className="print:hidden">
                <div ref={sliderRef} className="keen-slider mb-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`keen-slider__slide ${skill.color} text-white font-semibold text-center rounded-lg py-6`}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>

                {/* Bullets */}
                <div className="flex justify-center gap-2">
                    {skills.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? "bg-blue-800 scale-125" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* 🖨️ Versi Daftar Saat Cetak */}
            <div className="hidden print:block print:py-0 print-clean">
                <ul className="grid grid-cols-2 gap-2 mt2 text-gray-700 print-clean">
                    {skills.map((skill, index) => (
                       <li key={index}>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
