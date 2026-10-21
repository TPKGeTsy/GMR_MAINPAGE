import Navbar from "@/components/legacy/Navbar";

// Generated from the rendered old groupmaker.co.th page. Do not hand-edit large parts;
// refactor into components as each section gets rebuilt.
export default function EventsPage() {
  return (
    <>
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <div className="w-full h-screen bg-gradient-to-b from-black to-[#4a4a4a]">
        <div className="w-full h-full">
          <header>
            <Navbar />
          </header>
          <section>
            <div className="w-full flex flex-col py-[10rem]">
              <div className="flex flex-col px-5 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 justify-start items-center mx-3">
                    <div>
                      <img loading="lazy" width="27" height="33" decoding="async" className="w-[1.25rem]" style={{ color: "transparent" }} src="/legacy/media/Polygon.d8403894.png" alt="" />
                    </div>
                    <div className="text-3xl text-[#FF6C2D] font-semibold">
                      2024
                    </div>
                  </div>
                  <div className="w-full border-2 border-[#FF6C2D] rounded-2xl flex flex-col md:grid grid-cols-5 gap-10 px-10 py-8">
                    <div className="flex flex-col text-white col-span-4 gap-10 items-center justify-center text-[3vw] md:text-lg lg:text-xl xl:text-2xl font-semibold">
                      <div className="flex flex-col text-center">
                        <label>
                          We dont have any events at this time.
                        </label>
                        <label>
                          You can see our interesting products first.
                        </label>
                      </div>
                      <div>
                        <a href="./../page/Product">
                          <label className="underline cursor-pointer hover:text-[#FF6C2D]">
                            View Our Products
                          </label>
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <img loading="lazy" width="406" height="406" decoding="async" className="w-[40vw] md:w-[120rem] lg:w-[20rem]" style={{ color: "transparent" }} src="/legacy/media/GmrBlogs.b8d6e28e.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
