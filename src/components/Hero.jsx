import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-700">

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-2xl sm:left-8 sm:top-8 sm:translate-x-0 sm:text-left">
                <p className="send-flowers-regular text-center sm:text-left">
                    Muhammad  <span className="text-3xl font-bold sm:text-2xl"> Shayan </span>  Khan
                </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center sm:text-left">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Muhammad Shayan Khan</span>
            </h1>

            <p className="text-3xl text-white mt-4 mb-12 text-center sm:text-left">
                Web Developer & Designer
            </p>

            <a href="#about" className="flex justify-center items-center gap-2 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300">
                See My Work <FaArrowDown className="animate-bounce" />
            </a>
        </div>

    );
}
