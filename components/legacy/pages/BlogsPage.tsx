import Link from "next/link";
import Footer from "@/components/legacy/Footer";
import Navbar from "@/components/legacy/Navbar";

// Generated from the rendered old groupmaker.co.th page. Do not hand-edit large parts;
// refactor into components as each section gets rebuilt.
export default function BlogsPage() {
  return (
    <>
    <div className="snap-y snap-mandatory flex-grow z-0">
      <div className="w-full h-full bg-gradient-to-b from-black to-[#4a4a4a]">
        <div className="w-full h-full">
          <header>
            <Navbar />
          </header>
          <section>
            <div className="w-full flex flex-col py-[10rem]">
              <div className="flex flex-col px-5 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col items-center w-full h-full gap-10">
                  <div className="w-[70%] border-white rounded-3xl border-2 text-center p-5">
                    <div className="text-orange-800 text-4xl md:text-8xl font-bold">
                      Blog
                    </div>
                  </div>
                  <div className="w-[70%] rounded-xl h-[100%] grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Link className="card flex flex-col rounded-3xl items-center gap-8 text-black bg-white py-10 transition-transform transform hover:scale-105 active:scale-95 duration-300" href="/foodservice">
                      <img loading="lazy" width="1200" height="630" decoding="async" className="w-[80%] drop-shadow-xl" style={{ color: "transparent" }} src="/legacy/media/food-wervice-blog.9dcd21bb.png" alt="" />
                      <div className="w-[70%] flex flex-col gap-5">
                        <div className="text-orange-800 font-semibold text-base md:text-xl">
                          Pros and Cons of Food Service Robots in Post-Covid World
                        </div>
                        <div className="font-normal text-sm md:text-base">
                          The world after the Covid-19 pandemic has seen significant changes, and one of the most notable shifts is...
                        </div>
                      </div>
                    </Link>
                    <Link className="card flex flex-col rounded-3xl items-center gap-8 text-black bg-white py-10 transition-transform transform hover:scale-105 active:scale-95 duration-300" href="/rfid-business">
                      <img loading="lazy" width="1000" height="525" decoding="async" className="w-[80%] drop-shadow-xl" style={{ color: "transparent" }} src="/legacy/media/Why-Rfid-Small.874f3c4d.png" alt="" />
                      <div className="w-[70%] flex flex-col gap-5">
                        <div className="text-orange-800 font-semibold text-base md:text-xl">
                          Which Businesses Should Switch to RFID Now
                        </div>
                        <div className="font-normal text-sm md:text-base">
                          RFID or Radio Frequency Identification has become increasingly popular across various industries...
                        </div>
                      </div>
                    </Link>
                    <Link className="card flex flex-col rounded-3xl items-center gap-8 text-black bg-white py-10 transition-transform transform hover:scale-105 active:scale-95 duration-300" href="/benefits-of-rfid">
                      <img loading="lazy" width="1000" height="525" decoding="async" className="w-[80%] drop-shadow-xl" style={{ color: "transparent" }} src="/legacy/media/GoodThings-Rfid-small.48a55fa1.png" alt="" />
                      <div className="w-[70%] flex flex-col gap-5">
                        <div className="text-orange-800 font-semibold text-base md:text-xl">
                          5 Advantages of RFID, The Innovation of the Future
                        </div>
                        <div className="font-normal text-sm md:text-base">
                          Today, many organizations, whether public or private, are striving to apply new technologies...
                        </div>
                      </div>
                    </Link>
                    <Link className="card flex flex-col rounded-3xl items-center gap-8 text-black bg-white py-10 transition-transform transform hover:scale-105 active:scale-95 duration-300" href="/benefits-of-agv">
                      <img loading="lazy" width="1000" height="525" decoding="async" className="w-[80%] drop-shadow-xl" style={{ color: "transparent" }} src="/legacy/media/GoodThings-Agv-Small.f2fdcd9b.png" alt="" />
                      <div className="w-[70%] flex flex-col gap-5">
                        <div className="text-orange-800 font-semibold text-base md:text-xl">
                          3 Benefits of AGV Robots Every Factory Should Know
                        </div>
                        <div className="font-normal text-sm md:text-base">
                          If you're looking for smart robots to help alleviate the workload in your factory, you must consider AGVs...
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
}
