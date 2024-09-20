import Image from 'next/image';
import Wade from "../assets/avatar3.jpg";

const Explore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center">
          <p className="text-lg md:text-2xl font-semibold text-black ml-4 md:ml-10 mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 text-center w-40 text-violet-900 border border-violet-900 rounded-xl hover:bg-purple-700 hover:text-white transition duration-300">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side - Card Stack */}
        <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 ml-auto md:ml-48">
          {/* Background cards */}
          <div className="absolute right-0 top-8 h-full w-full bg-purple-950 rounded-xl z-0"></div>
          <div className="absolute right-2 top-4 h-full w-full bg-fuchsia-700 rounded-xl z-0"></div>
          
          {/* Foreground card (blue card) */}
          <div className="absolute right-4 top-0 h-full w-full bg-sky-950 rounded-xl p-4 sm:p-6 text-white z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic mb-2">Lorem ipsum</h2>
            <div className="flex items-center mb-4">
              <Image
                src={Wade}
                alt="Wade Warren"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <p>Wade Warren</p>
            </div>
            <div className="absolute bottom-4 left-4 sm:left-8 w-full sm:w-72 bg-gray-400 bg-opacity-70 px-3 sm:px-4 py-2 rounded-lg">
              <p className="text-white font-semibold">Lawrance Stroll</p>
              <p className="text-gray-300 text-sm">Hegifueshho dhfsui foiehhsio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
