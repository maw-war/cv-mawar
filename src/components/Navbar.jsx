// src/components/Navbar.jsx
export default function Navbar() {
  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Work Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Soft Skills", id: "softskills" },
    { name: "Interest", id: "interest-contact" },
    { name: "Contact", id: "interest-contact" },
  ];

  return (
    <nav className="no-print bg-blue-800 text-white sticky top-0 z-50 shadow print-clean">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
        
        <div className="flex flex-wrap justify-center gap-3">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-yellow-300 text-sm transition"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => window.print()}
            className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
          >
            🖨️ Print
          </button>
        </div>
      </div>
    </nav>
  );
}
