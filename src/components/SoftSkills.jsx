// src/components/SoftSkills.jsx
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const softSkills = [
  { name: "Disiplin", color: "bg-blue-500" },
  { name: "Mampu bekerja dalam tim", color: "bg-teal-400" },
  { name: "Bertanggung Jawab", color: "bg-yellow-400" },
  { name: "Fleksibel", color: "bg-gray-700" },
  { name: "Teliti dan fokus dalam pekerjaan", color: "bg-green-500" },
  { name: "Siap bekerja shift / lembur", color: "bg-pink-500" },
];

export default function SoftSkills() {
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
      <h2 className="text-2xl font-bold text-blue-800 mb-6 print:mb-0">Soft Skills</h2>

      {/* 🎯 Slider (untuk layar) */}
      <div className="print:hidden">
        <div ref={sliderRef} className="keen-slider mb-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className={`keen-slider__slide ${skill.color} text-white font-semibold text-center rounded-lg py-6`}
            >
              {skill.name}
            </div>
          ))}
        </div>

        {/* Navigasi bullet */}
        <div className="flex justify-center gap-2">
          {softSkills.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? "bg-blue-800 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* 🖨️ Tampil saat print */}
      <div className="hidden print:block print:py-0 print-clean ">
        <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-800 print:mb-0 print-clean">
          {softSkills.map((skill, index) => (
            <li key={index}><li></li>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
