import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";
import { MdBalance } from "react-icons/md";
import Male from "../../assets/male.png";
const HomeHero = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-12 animate-slideUp">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-orange-500 p-1 rounded-lg mr-3">
              <MdBalance className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Legal<span className="text-orange-500">Consultant</span>.com
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left animate-slideUpDelay1">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="bg-gray-200 rounded-2xl w-48 h-48 flex items-end justify-center overflow-hidden animate-slideUpDelay2">
                <img
                  src={Male}
                  alt="Attorney"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 animate-slideUpDelay3">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Find Attorney.
                  <br />
                  Connect with
                  <br />
                  Clients.
                </h2>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-4 animate-slideUpDelay4">
              <div className="bg-gray-300 h-3 rounded-full overflow-hidden">
                <div className="bg-gray-400 h-full w-3/4 rounded-full animate-progressBar1"></div>
              </div>
              <div className="bg-gray-300 h-3 rounded-full overflow-hidden">
                <div className="bg-gray-400 h-full w-1/2 rounded-full animate-progressBar2"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="flex-1 flex flex-col space-y-6 max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-slideUpDelay2">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Reviews</h3>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-orange-500 text-xl" />
                ))}
              </div>
            </div>

            {/* Bilingual Profiles Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-slideUpDelay3">
              <h3 className="text-3xl font-bold text-gray-800">
                Bilingual
                <br />
                Profiles
              </h3>
            </div>

            {/* Verified Attorneys Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 animate-slideUpDelay4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <FaCheck className="text-white text-lg" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Verified
                  <br />
                  Attorneys
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar1 {
          from {
            width: 0;
          }
          to {
            width: 75%;
          }
        }

        @keyframes progressBar2 {
          from {
            width: 0;
          }
          to {
            width: 50%;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-slideUpDelay1 {
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .animate-slideUpDelay2 {
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        .animate-slideUpDelay3 {
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .animate-slideUpDelay4 {
          animation: slideUp 0.8s ease-out 0.8s both;
        }

        .animate-progressBar1 {
          animation: progressBar1 1.5s ease-out 1.2s both;
        }

        .animate-progressBar2 {
          animation: progressBar2 1.5s ease-out 1.4s both;
        }
      `}</style>
    </div>
  );
};

export default HomeHero;
