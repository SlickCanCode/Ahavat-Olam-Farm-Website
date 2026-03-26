export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold">Ahavat Olam Global Farm</h2>
          <p className="mt-3 text-sm text-gray-400">
            Providing high-quality, affordable, and nutritious agricultural products.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold">Products</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#products" className="hover:text-white">Habeneroes</a></li>
            <li><a href="#products" className="hover:text-white">Green Chilli Pepper</a></li>
            <li><a href="#products" className="hover:text-white">Bell Pepper</a></li>
            <li><a href="#products" className="hover:text-white">Tasty Sweet Potato Chips</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#investors" className="hover:text-white">Investors</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: ahavatolamglobalfarm@gmail.com</li>
            <li>Phone: +234 810 693 6560</li>
            <li>Ibadan, Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          
          <p>© {new Date().getFullYear()} Ahavat Olam Global Farm. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>

        </div>
      </div>

    </footer>
  );
}