export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          IQ Options Trading Platform
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Welcome to the advanced options trading platform
        </p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
