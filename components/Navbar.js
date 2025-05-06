export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">NewsApp</h1>
          <div>
            <a href="/" className="mr-4 hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  }
  