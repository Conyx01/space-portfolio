"use client";

import { Button } from "../ui/MovingBorders";

export const Experience = () => {
  return (
    <section id="experience" className="py-8 w-full">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My <span className="text-[#4ADE80]">work experience</span>
      </h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.25rem"
              style={{
                background: "rgba(3,0,20,0.37)",
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex-shrink-0">
                  <img
                    src="/work/midascreed.svg"
                    alt="MidasCreed"
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Lead Software Engineer
                  </h2>
                  <h3 className="text-gray-400 text-sm mb-2">
                    MidasCreed
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Oversees project strategies & processes, coordinates with stakeholders, and leads development teams.
                  </p>
                </div>
              </div>
            </Button>

            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.25rem"
              style={{
                background: "rgba(3,0,20,0.37)",
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex-shrink-0">
                  <img
                    src="/work/ai-hub.svg"
                    alt="AI & Innovation Hub"
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Recruitment & Promotion Officer
                  </h2>
                  <h3 className="text-gray-400 text-sm mb-2">
                    AI & Innovation Hub
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Led events and initiatives, establishing partnerships with educational institutions.
                  </p>
                </div>
              </div>
            </Button>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.25rem"
              style={{
                background: "rgba(3,0,20,0.37)",
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex-shrink-0">
                  <img
                    src="/work/idias.svg"
                    alt="Idias Corporation"
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Software Engineer
                  </h2>
                  <h3 className="text-gray-400 text-sm mb-2">
                    Idias Corporation Limited
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Developed software solutions and conducted performance testing for clients.
                  </p>
                </div>
              </div>
            </Button>

            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.25rem"
              style={{
                background: "rgba(3,0,20,0.37)",
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex-shrink-0">
                  <img
                    src="/work/midbridge.svg"
                    alt="MidBridge"
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Facilitator
                  </h2>
                  <h3 className="text-gray-400 text-sm mb-2">
                    MidBridge Computer Training
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Led computer basics training and conducted regular assessments.
                  </p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 