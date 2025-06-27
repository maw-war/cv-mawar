// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-4 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Mawar Eka Utami. All rights reserved.
      </p>
    </footer>
  );
}
