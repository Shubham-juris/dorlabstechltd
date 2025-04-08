export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-blue-900 text-white py-10 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm uppercase tracking-wide">
            COPYRIGHT © {currentYear} DORLABS TECH - ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    );
  }