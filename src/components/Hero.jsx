import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-24 lg:pb-[114px]">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:order-2">
            <img
              src="/assets/taskHero.png"
              alt="frame"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73px] font-bold leading-tight text-[#F5BF42]">
              Tasker
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg opacity-70 max-w-xl mx-auto md:mx-0">
              Effortlessly organize, prioritize, and conquer tasks with Tasker —
              your personal productivity ally for seamless goal achievement and
              stress-free task management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
