import Link from "next/link";
import Footer from "@/components/legacy/Footer";
import Navbar from "@/components/legacy/Navbar";

// Generated from the rendered old groupmaker.co.th page. Do not hand-edit large parts;
// refactor into components as each section gets rebuilt.
export default function HomePage() {
  return (
    <>
    <div className="w-full h-screen relative">
      <section>
        <Navbar />
      </section>
      <section>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen overflow-x-hidden flex-grow z-0">
          <div className="w-full h-screen relative">
            <section>
              <div className="snap-start">
                <div className="relative w-full h-screen overflow-hidden">
                  <video src="/legacy/videos/MobileRobot.1cbab8b73624552e7f73275abf501153.webm" autoPlay loop className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover" muted playsInline />
                  <div className="absolute bottom-0 w-full h-[90%] lg:h-[100%] text-white flex flex-col items-center justify-between lg:justify-center lg:items-start py-10 lg:py-10 lg:gap-[10rem] lg:px-20">
                    <div className="tracking-widest font-bold flex flex-col">
                      <div className="text-7xl sm:text-8xl lg:text-9xl" data-aos="fade-up" data-aos-duration="1200">
                        SMART
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-3xl" data-aos="fade-up" data-aos-duration="1300">
                        WAREHOUSE SOLUTIONS
                      </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-10">
                      <div className="px-[5vw] sm:px-[15vw] lg:px-0 text-[3.5vw] sm:text-lg lg:text-xl tracking-wider" data-aos="fade-up" data-aos-duration="1300">
                        <div>
                          Discover our innovative robotic technology
                        </div>
                        <div>
                          for AGV/AMR and transform your business
                        </div>
                        <div>
                          into the future with GROUP MAKER ROBOTIC
                        </div>
                      </div>
                      <div className="flex flex-row w-full gap-5 lg:gap-10 justify-center items-center lg:justify-start">
                        <Link href="/product">
                          <div className="flex border border-white px-[5vw] py-[2vw] sm:px-8 sm:py-3 lg:py-2 rounded-full items-center gap-1" data-aos="fade-right" data-aos-duration="1600">
                            <img alt="" loading="lazy" width="30" height="30" decoding="async" src="/legacy/media/Product_logo.89deffed.png" style={{ color: "transparent" }} />
                            <div className="text-base font-medium">
                              <div>
                                <div>
                                  Product
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="bg-white h-[10vw] w-1 sm:h-16" data-aos="zoom-out" data-aos-duration="1600" />
                        <a href="https://line.me/R/ti/p/@425tsjdy" target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-2" data-aos="fade-left" data-aos-duration="1600">
                            <div className="w-[10vw] sm:w-14">
                              <img alt="" loading="lazy" width="55" height="52" decoding="async" src="/legacy/media/Line_Icon.9bd14082.png" style={{ color: "transparent" }} />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[4vw] sm:text-2xl">
                                Add Line
                              </div>
                              <div className="flex gap-1 text-[2vw] sm:text-xs">
                                <div className="text-[#27FFB1]">
                                  Groupmaker Co., Ltd
                                </div>
                                <div>
                                  Line Official
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 w-full hidden px-10 lg:flex justify-between z-40">
                    <div className="flex items-center gap-4">
                      <a href="https://line.me/R/ti/p/@425tsjdy" target="_blank" rel="noopener noreferrer">
                        <div>
                          <img alt="line" loading="lazy" width="55" height="52" decoding="async" className="w-[2rem]" src="/legacy/media/Line_Icon.9bd14082.png" style={{ color: "transparent" }} />
                        </div>
                      </a>
                      <a href="https://www.facebook.com/people/Group-Maker-CoLtd/100057165291360/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <div>
                          <img alt="facebook" loading="lazy" width="21" height="37" decoding="async" className="w-[1rem]" src="/legacy/media/Facebook_Icon.06902421.png" style={{ color: "transparent" }} />
                        </div>
                      </a>
                      <a href="https://www.youtube.com/@GROUPMAKER-ROBOTIC" target="_blank" rel="noopener noreferrer">
                        <div>
                          <img alt="youtube" loading="lazy" width="41" height="26" decoding="async" className="w-[2rem]" src="/legacy/media/Youtube_Icon.0804d38e.png" style={{ color: "transparent" }} />
                        </div>
                      </a>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img alt="phone" loading="lazy" width="36" height="36" decoding="async" className="w-[2rem]" src="/legacy/media/Phone_Icon.5a78566d.png" style={{ color: "transparent" }} />
                        </div>
                        <div className="text-sm text-white">
                          <a href="tel:+66815935599">
                            Thailand-Bangkok | +66 81 593 5599
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 text-white">
                      <div className="flex gap-2 items-center">
                        <div>
                          <img alt="" loading="lazy" width="36" height="36" decoding="async" className="w-[2rem]" src="/legacy/media/Mail_Icon.9198d010.png" style={{ color: "transparent" }} />
                        </div>
                        <div className="text-sm">
                          <a href="mailto:thanapat.c@groupmaker.co.th">
                            thanapat.c@groupmaker.co.th
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-12 lg:h-24 w-full" />
                </div>
              </div>
              <div className="snap-start">
                <div className="relative w-full h-screen">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <video src="/legacy/videos/ANTBOT-WEB.9348eeeb08a649cc24f19b35b9c5de6e.webm" autoPlay loop className="w-full h-full object-cover" muted playsInline />
                  </div>
                  <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[9rem]" />
                </div>
              </div>
              <div className="snap-start">
                <div className="relative w-full h-screen">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <video src="/legacy/videos/ButlerWeb.9aaa8eb37d996fba4f7d2fc654fb5fb2.webm" autoPlay loop className="w-full h-full object-cover" muted playsInline />
                  </div>
                  <div className="absolute inset-0 w-full h-full py-48 flex flex-col items-center lg:justify-center lg:items-start px-[10%] z-10" data-aos="fade-up" data-aos-delay="2400" data-aos-duration="1000" />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[9rem]" />
                </div>
              </div>
              <div className="snap-start">
                <div className="relative w-full h-full">
                  <div className="w-full h-full">
                    <img alt="background" loading="lazy" width="2560" height="1308" decoding="async" className="object-cover h-[800px] w-full md:h-[600px] lg:h-[600px] xl:h-full" src="/legacy/media/Product-Background.ee577e2e.png" style={{ color: "transparent" }} />
                  </div>
                  <div className="absolute inset-0 h-full w-full grid md:grid-cols-3 justify-center md:justify-center md:items-center">
                    <div className="flex md:flex-col justify-center h-[400px] md:[35vw] lg:w-[30vw] md:h-[80%] md:justify-end w-full z-40">
                      <div className="w-full justify-center h-[100%] md:h-[38%] xl:h-[38%] flex md:flex-col md:justify-start md:items-end">
                        <div className="flex flex-col justify-center w-full md:justify-end items-end">
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              ANTBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 block">
                            <div>
                              BITBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              TUG
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[3.5vw] lg:text-[3vw] hidden">
                            <div>
                              DENDRO
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              FOLKLIFT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              CYBER TRUCK
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              MOBILE ROBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              MOBILE ROBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              MOBILE ROBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              RFID
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              RADAR
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              BIT TRAY
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              SOCKET TRAY
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[3.5vw] lg:text-[3.25vw] mt-10 hidden">
                            <div>
                              SMART CONTROLLER
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[2.5vw] lg:text-[3.25vw] mt-10 hidden">
                            <div>
                              REAL-TIME PRICE
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 w-full h-full flex flex-col-reverse">
                    <div className="justify-center items-center flex w-full h-[65%] md:h-[80%] relative">
                      <div className="absolute top-2 w-full">
                        <div className="swiper w-full">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-14">
                                <img alt="AntBot" fetchPriority="high" width="935" height="996" decoding="async" className="lg:w-[24vw] xl:w-[24vw]" src="/legacy/media/AntBot_3D.6521eb56.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-2">
                                <img alt="Bitbot" fetchPriority="high" width="853" height="834" decoding="async" className="lg:w-[28vw] xl:w-[28vw]" src="/legacy/media/BitBot.f8285fdc.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-10">
                                <img alt="TUG" fetchPriority="high" width="1128" height="800" decoding="async" className="lg:w-[40vw] xl:w-[40vw]" src="/legacy/media/Tuk.dd13a379.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-10 xl:mt-0">
                                <img alt="dendro" fetchPriority="high" width="858" height="807" decoding="async" className="lg:w-[24vw] xl:w-[30vw]" src="/legacy/media/Discerning.f60c4312.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center">
                                <img alt="Folklift" fetchPriority="high" width="572" height="834" decoding="async" className="lg:w-[17vw] xl:w-[20vw]" src="/legacy/media/Lifting.8d0c2abe.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-28 xl:mt-[9%]">
                                <img alt="CyberTruck" fetchPriority="high" width="1458" height="739" decoding="async" className="lg:w-[40vw] xl:w-[40vw]" src="/legacy/media/CyberTruckSlide.3e6c57a9.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-28 xl:mt-[12.8%]">
                                <img alt="MobileRobot" fetchPriority="high" width="999" height="720" decoding="async" className="lg:w-[22vw] xl:w-[22vw]" src="/legacy/media/Mobile_3D.a5273549.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-32 xl:mt-[14.5%]">
                                <img alt="MobileRobot" fetchPriority="high" width="824" height="532" decoding="async" className="lg:w-[22vw] xl:w-[22vw]" src="/legacy/media/Incline_3D.1184d8be.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-36 xl:mt-[14.5%]">
                                <img alt="MobileRobot" fetchPriority="high" width="855" height="491" decoding="async" className="lg:w-[22vw] xl:w-[22vw]" src="/legacy/media/Tray_3D.1897114c.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-0">
                                <img alt="rfid" fetchPriority="high" width="650" height="650" decoding="async" className="lg:w-[28vw] xl:w-[30vw]" src="/legacy/media/RFID.2e423820.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-16 md:mt-28">
                                <img alt="radar" fetchPriority="high" width="451" height="354" decoding="async" className="lg:w-[28vw] xl:w-[28vw]" src="/legacy/media/Radar-Pig.33b0c139.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-20 md:mt-32">
                                <img alt="bittray" fetchPriority="high" width="500" height="262" decoding="async" className="lg:w-[28vw] xl:w-[28vw]" src="/legacy/media/Bit-Tray.7b0b74bd.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-20 md:mt-24">
                                <img alt="socket" fetchPriority="high" width="421" height="321" decoding="async" className="lg:w-[24vw] xl:w-[24vw]" src="/legacy/media/Socket.d22fb9cc.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-20 md:mt-36">
                                <img alt="controller" fetchPriority="high" width="483" height="275" decoding="async" className="lg:w-[30vw] xl:w-[30vw]" src="/legacy/media/Controller.b3b86846.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-16 md:mt-20">
                                <img alt="realtime" fetchPriority="high" width="380" height="312" decoding="async" className="lg:w-[24vw] xl:w-[24vw]" src="/legacy/media/Realtime.32786ac8.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 w-full flex justify-center md:justify-end">
                    <div className="justify-between m-24 sm:m-24 md:m-20 lg:m-24 items-center">
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold block">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div>
                          CONVEYOR
                        </div>
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div>
                          INCLINED TRAY
                        </div>
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div>
                          TRAY
                        </div>
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 h-[90%] w-full flex justify-center items-end">
                    <div className="w-72 xl:w-96 h-5 py-1 px-1 bg-black bg-opacity-60 rounded-full">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: "13.3333%", backgroundColor: "rgb(0, 255, 163)" }} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full" />
                </div>
                <div className="w-full bg-black flex flex-col py-14 justify-center items-center">
                  <div className="flex justify-center items-center">
                    <div className="text-white font-bold mr-0 text-3xl">
                      Trusted By
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div>
                      <div className="swiper w-[375px] sm:w-[560px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1550px] mt-10">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="174" height="114" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Afamosa.0eefad5d.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="204" height="34" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Sharp.be672583.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="211" height="49" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Toshiba.699f911e.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="189" height="59" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Mitsubishi.42a1de22.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="124" height="66" decoding="async" className="w-[80px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/True.f72f1869.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="167" height="61" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Scg.7d5054b9.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="98" height="85" decoding="async" className="w-[70px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/Harley.d0f25192.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="68" height="69" decoding="async" className="w-[45px] sm:w-[48px] xl:w-[60px]" src="/legacy/media/Motto.91cd64fe.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="173" height="69" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Begistics.08baeae6.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="110" height="67" decoding="async" className="w-[80px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/Toyota.92934590.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="74" height="74" decoding="async" className="w-[50px] sm:w-[58px] xl:w-[80px]" src="/legacy/media/Joinmax.5b080ef3.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="246" height="50" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Fec.f414ef47.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="188" height="37" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Densp.86cc6fb8.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="146" height="73" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Mut.6f610267.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="204" height="70" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Obodroid.c4bd3185.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="83" height="83" decoding="async" className="w-[80px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/Pro_Toyd.80057185.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="107" height="83" decoding="async" className="w-[80px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/5GCT.7bcb079d.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="93" height="66" decoding="async" className="w-[70px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/Esso.5a659664.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="114" height="93" decoding="async" className="w-[80px] sm:w-[68px] xl:w-[100px]" src="/legacy/media/Bangchak.d082758d.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="70" height="70" decoding="async" className="w-[50px] sm:w-[38px] xl:w-[70px]" src="/legacy/media/PT.355fa340.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="249" height="62" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Seagate.ae91e30a.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="68" height="83" decoding="async" className="w-[40px] sm:w-[38px] xl:w-[60px]" src="/legacy/media/Ais.f09b6655.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="168" height="67" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Adient.598dd16d.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="264" height="63" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Parkroyal.4326cb16.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="251" height="78" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Novotel.968ca6d3.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="210" height="59" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/GC.f4eb966d.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="177" height="75" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Flowco.b330b17a.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="230" height="46" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Cartino.8401dcb2.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="208" height="54" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Fujikura.3e88f338.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="211" height="119" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Kubota.2acfff08.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="85" height="85" decoding="async" className="w-[50px] sm:w-[58px] xl:w-[70px]" src="/legacy/media/Millicon.368c1c01.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="bg-white w-28 h-14 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-32 lg:h-16 xl:w-40 xl:h-20 rounded-lg flex items-center justify-center">
                              <img alt="Brand logo" loading="lazy" width="215" height="52" decoding="async" className="w-[80px] sm:w-[96px] xl:w-[128px]" src="/legacy/media/Pandora.8e9f0e52.png" style={{ color: "transparent" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <div className="w-full h-full">
                    <img alt="background" loading="lazy" width="2560" height="1308" decoding="async" className="object-cover h-[800px] w-full md:h-[600px] lg:h-[600px] xl:h-full" src="/legacy/media/Butler-BackGround.44b2d202.png" style={{ color: "transparent" }} />
                  </div>
                  <div className="absolute inset-0 h-full w-full grid md:grid-cols-3 justify-center md:justify-center md:items-center">
                    <div className="flex md:flex-col justify-center h-[400px] md:[35vw] lg:w-[30vw] md:h-[80%] md:justify-end w-full z-40">
                      <div className="w-full justify-center h-[100%] md:h-[38%] xl:h-[38%] flex md:flex-col md:justify-start md:items-end">
                        <div className="flex flex-col justify-center w-full md:justify-end items-end">
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 hidden">
                            <div>
                              BUTLER
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] mt-10 block">
                            <div>
                              SHINING
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[3vw] lg:text-[3vw] mt-10 hidden">
                            <div>
                              INDUSTRIAL ROBOT
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[4vw] lg:text-[3.5vw] mt-10 hidden">
                            <div>
                              EV CHARGER
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[2.5vw] lg:text-[2.5vw] mt-10 hidden">
                            <div>
                              SMART REFRIGERATOR
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[2.5vw] lg:text-[3.25vw] mt-10 hidden">
                            <div>
                              TAG
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[2.5vw] lg:text-[3.25vw] mt-10 hidden">
                            <div>
                              ANCHOR
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                          <div className="tracking-widest w-full md:w-[85%] lg:w-[70%] text-white font-bold text-center md:text-start text-4xl sm:text-5xl md:text-[2.5vw] lg:text-[3.25vw] mt-10 hidden">
                            <div>
                              GPS TRACKER
                            </div>
                            <div className="z-40 tracking-wider text-[#FF5C00] text-base sm:text-lg md:text-[1.725vw] lg:text-[1.4vw] font-bold">
                              GROUP MAKER ROBOTIC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 w-full h-full flex flex-col-reverse">
                    <div className="justify-center items-center flex w-full h-[65%] md:h-[80%] relative">
                      <div className="absolute top-2 w-full">
                        <div className="swiper w-full">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-[3%]">
                                <img alt="Butler" fetchPriority="high" width="255" height="469" decoding="async" className="lg:w-[13vw] lg:h-[27vw] xl:w-[14vw] xl:h-[28vw]" src="/legacy/media/NewButlerModel.417e7e58.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-[3%]">
                                <img alt="Shining" fetchPriority="high" width="667" height="828" decoding="async" className="lg:w-[22vw] lg:h-[26vw] xl:w-[24vw] xl:h-[28vw]" src="/legacy/media/Shining-B.e1ff2fa9.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-10 md:mr-32">
                                <img alt="Arm" fetchPriority="high" width="529" height="894" decoding="async" className="lg:w-[15vw] lg:h-[26vw] xl:w-[16vw] xl:h-[28vw]" src="/legacy/media/Machanical_Arm.fa27f809.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-0">
                                <img alt="Evcharger" fetchPriority="high" width="595" height="1310" decoding="async" className="lg:w-[14vw] lg:h-[28vw] xl:w-[15vw] xl:h-[30vw]" src="/legacy/media/fullEvCharger.843ca73a.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center">
                                <img alt="refrigerator" fetchPriority="high" width="167" height="516" decoding="async" className="lg:w-[9vw] xl:w-[10vw]" src="/legacy/media/Automatic.a0cacda8.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-10">
                                <img alt="tag" fetchPriority="high" width="315" height="317" decoding="async" className="lg:w-[24vw] xl:w-[24vw]" src="/legacy/media/UltraWire.b9d1d8f7.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-5 md:mt-20">
                                <img alt="anchor" fetchPriority="high" width="394" height="351" decoding="async" className="lg:w-[24vw] xl:w-[24vw]" src="/legacy/media/UltraWide.6bb836fc.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="items-center flex justify-center mt-16 md:mt-24">
                                <img alt="tracker" fetchPriority="high" width="596" height="503" decoding="async" className="lg:w-[30vw] xl:w-[30vw]" src="/legacy/media/Tracker.5e458904.png" style={{ color: "transparent" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 w-full flex justify-center md:justify-end">
                    <div className="justify-between m-24 sm:m-24 md:m-20 lg:m-24 items-center">
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold block">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                      <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hidden">
                        <div className="" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 h-[90%] w-full flex justify-center items-end">
                    <div className="w-72 xl:w-96 h-5 py-1 px-1 bg-black bg-opacity-60 rounded-full">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: "25%", backgroundColor: "rgb(0, 255, 163)" }} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full" />
                </div>
                <div className="overflow-hidden">
                  <div className="w-full h-[800px] relative" style={{ backgroundImage: "url(/legacy/media/Bg-Categrory.4b89c7a3.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="w-full h-full grid grid-cols-12">
                      <div className="col-span-0 lg:col-span-2" />
                      <div className="py-20 col-span-12 lg:col-span-10">
                        <div className="flex flex-col h-full w-[100%] gap-10 items-center lg:items-start">
                          <div className="w-[75%] text-4xl font-bold sm:text-4xl md:text-4xl xl:text-6xl flex flex-col justify-center items-start lg:justify-start lg:items-start gap-10 text-white z-40">
                            <div className="text-start">
                              <div>
                                OUR SERVICES
                              </div>
                            </div>
                            <div className="text-start text-xs sm:text-sm md:text-base lg:text-base xl:text-2xl lg:text-start mt-2 sm:mt-0 px-2 sm:px-2 text-white z-40 font-medium">
                              <div>
                                Group Maker, we are experts and real experts in both ROBOT AGV/AMR, RFID systems and Smart IoT, so you can be confident that the system administration and installation will go smoothly. Provide expert advice and take care after installing the system Always ready to give advice.
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col justify-center items-center">
                            <div className="w-full flex justify-center items-center">
                              <div>
                                <div className="swiper w-[375px] sm:w-[500px] md:w-[760px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1550px]">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="bg-[#1A1A1A] rounded-2xl relative shadow-md pb-5 pt-2 xl:pt-5 w-[375px] h-[251px] sm:w-[500px] sm:h-[300px] md:w-[475px] md:h-[300px] lg:w-[490px] lg:h-[320px] px-6 xl:w-[500px] xl:h-[335px] 2xl:h-[335px] 2xl:w-[550px]">
                                        <div className="text-black flex flex-col justify-evenly gap-7">
                                          <div>
                                            <div className="text-2xl md:text-4xl xl:text-5xl text-[#FF7020] font-bold">
                                              AMR / AGV
                                            </div>
                                            <div className="text-[0.7rem] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.15vw] xl:text-[1vw] 2xl:text-[0.8vw] font-bold text-white">
                                              Autonomous Mobile Robot / Automated Guided Vehicle
                                            </div>
                                          </div>
                                          <div className="font-medium text-[9px] md:text-[12px] text-white">
                                            <div>
                                              We offer customizable AGV robots
                                            </div>
                                            <div>
                                              to meet our clients need. Our current AGV
                                            </div>
                                            <div>
                                              collections include three different robot sizes.
                                            </div>
                                            <div>
                                              Our latest and newest type - Cybertruck.
                                            </div>
                                          </div>
                                          <div className="py-10">
                                            <button className="text-sm h-8 w-32 font-bold bg-[#00FFA3] rounded-full text-center">
                                              View Detail
                                            </button>
                                          </div>
                                        </div>
                                        <div className="absolute w-full h-full flex justify-end items-end bottom-4 right-0 md:bottom-4 md:right-0 lg:bottom-2 lg:right-0">
                                          <img alt="AMR / AGV Image" loading="lazy" width="566" height="321" decoding="async" className="w-[60%] sm:w-[68%] md:w-[62%] lg:w-[65%] xl:w-[65%] 2xl:w-[70%]" src="/legacy/media/AMR_AGV.4484afe3.png" style={{ color: "transparent" }} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="bg-[#1A1A1A] rounded-2xl relative shadow-md pb-5 pt-2 xl:pt-5 w-[375px] h-[251px] sm:w-[500px] sm:h-[300px] md:w-[475px] md:h-[300px] lg:w-[490px] lg:h-[320px] px-6 xl:w-[500px] xl:h-[335px] 2xl:h-[335px] 2xl:w-[550px]">
                                        <div className="text-black flex flex-col justify-evenly gap-7">
                                          <div>
                                            <div className="text-2xl md:text-4xl xl:text-5xl text-[#FF7020] font-bold">
                                              RFID
                                            </div>
                                            <div className="text-[0.7rem] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.15vw] xl:text-[1vw] 2xl:text-[0.8vw] font-bold text-white">
                                              Radio-Frequency Identification
                                            </div>
                                          </div>
                                          <div className="font-medium text-[9px] md:text-[12px] text-white">
                                            <div>
                                              We offer customizable AGV robots
                                            </div>
                                            <div>
                                              to meet our clients need. Our current AGV
                                            </div>
                                            <div>
                                              collections include three different robot sizes.
                                            </div>
                                            <div>
                                              Our latest and newest type - Cybertruck.
                                            </div>
                                          </div>
                                          <div className="py-10">
                                            <button className="text-sm h-8 w-32 font-bold bg-[#00FFA3] rounded-full text-center">
                                              View Detail
                                            </button>
                                          </div>
                                        </div>
                                        <div className="absolute w-full h-full flex justify-end items-end -bottom-4 -right-10">
                                          <img alt="RFID Image" loading="lazy" width="786" height="786" decoding="async" className="w-[60%] sm:w-[60%] md:w-[55%] lg:w-[55%] xl:w-[55%] 2xl:w-[60%]" src="/legacy/media/MiniAnt.92afd985.png" style={{ color: "transparent" }} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="bg-[#1A1A1A] rounded-2xl relative shadow-md pb-5 pt-2 xl:pt-5 w-[375px] h-[251px] sm:w-[500px] sm:h-[300px] md:w-[475px] md:h-[300px] lg:w-[490px] lg:h-[320px] px-6 xl:w-[500px] xl:h-[335px] 2xl:h-[335px] 2xl:w-[550px]">
                                        <div className="text-black flex flex-col justify-evenly gap-7">
                                          <div>
                                            <div className="text-2xl md:text-4xl xl:text-5xl text-[#FF7020] font-bold">
                                              IoT
                                            </div>
                                            <div className="text-[0.7rem] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.15vw] xl:text-[1vw] 2xl:text-[0.8vw] font-bold text-white">
                                              Internet of Things
                                            </div>
                                          </div>
                                          <div className="font-medium text-[9px] md:text-[12px] text-white">
                                            <div>
                                              We offer customizable AGV robots
                                            </div>
                                            <div>
                                              to meet our clients need. Our current AGV
                                            </div>
                                            <div>
                                              collections include three different robot sizes.
                                            </div>
                                            <div>
                                              Our latest and newest type - Cybertruck.
                                            </div>
                                          </div>
                                          <div className="py-10">
                                            <button className="text-sm h-8 w-32 font-bold bg-[#00FFA3] rounded-full text-center">
                                              View Detail
                                            </button>
                                          </div>
                                        </div>
                                        <div className="absolute w-full h-full flex justify-end items-end bottom-8 -right-2 md:bottom-8 md:-right-2 lg:bottom-10 lg:-right-2 xl:bottom-2 xl:-right-2">
                                          <img alt="IoT Image" loading="lazy" width="469" height="340" decoding="async" className="w-[50%] sm:w-[56%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[55%]" src="/legacy/media/IoT.3e22b339.png" style={{ color: "transparent" }} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="bg-[#1A1A1A] rounded-2xl relative shadow-md pb-5 pt-2 xl:pt-5 w-[375px] h-[251px] sm:w-[500px] sm:h-[300px] md:w-[475px] md:h-[300px] lg:w-[490px] lg:h-[320px] px-6 xl:w-[500px] xl:h-[335px] 2xl:h-[335px] 2xl:w-[550px]">
                                        <div className="text-black flex flex-col justify-evenly gap-7">
                                          <div>
                                            <div className="text-2xl md:text-4xl xl:text-5xl text-[#FF7020] font-bold">
                                              ROBOT
                                            </div>
                                            <div className="text-[0.7rem] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.15vw] xl:text-[1vw] 2xl:text-[0.8vw] font-bold text-white">
                                              Industrial Robot
                                            </div>
                                          </div>
                                          <div className="font-medium text-[9px] md:text-[12px] text-white">
                                            <div>
                                              We offer customizable AGV robots
                                            </div>
                                            <div>
                                              to meet our clients need. Our current AGV
                                            </div>
                                            <div>
                                              collections include three different robot sizes.
                                            </div>
                                            <div>
                                              Our latest and newest type - Cybertruck.
                                            </div>
                                          </div>
                                          <div className="py-10">
                                            <button className="text-sm h-8 w-32 font-bold bg-[#00FFA3] rounded-full text-center">
                                              View Detail
                                            </button>
                                          </div>
                                        </div>
                                        <div className="absolute w-full h-full flex justify-end items-end bottom-[-2%] right-[-2%]">
                                          <img alt="ROBOT Image" loading="lazy" width="417" height="469" decoding="async" className="w-[42%] sm:w-[48%] md:w-[42%] lg:w-[45%] xl:w-[40%] 2xl:w-[45%]" src="/legacy/media/Arm_Mechanical.6cfd7eb5.png" style={{ color: "transparent" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-12 flex justify-center w-full z-40">
                        <div className="flex space-x-4">
                          <div className="w-4 h-4 rounded-full cursor-pointer bg-white icon" />
                          <div className="w-4 h-4 rounded-full cursor-pointer bg-[#FF7A2F] icon" />
                          <div className="w-4 h-4 rounded-full cursor-pointer bg-white icon" />
                          <div className="w-4 h-4 rounded-full cursor-pointer bg-white icon" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                </div>
                <div className="w-full h-full bg-black flex justify-center">
                  <div className="w-full md:w-[90%] lg::w-[80%] gap-10 grid grid-rows-3 grid-col-1 md:grid-cols-5 md:grid-rows-1 items-center justify-center py-20">
                    <div className="flex flex-col gap-3 md:col-span-2 justify-end items-end">
                      <div className="text-white font-bold text-2xl md:text-2xl xl:text-4xl flex flex-col gap-5">
                        PRODUCT &amp; SERVICE
                        <div className="text-white font-bold text-xs lg:text-sm text-center">
                          <div>
                            For more information and schedule
                          </div>
                          <div>
                            a tour of our collections showroom.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img alt="" loading="lazy" width="300" height="300" decoding="async" className="w-[12rem] md:w-[25vw] lg:w-[16rem]" src="/legacy/media/LineQr.cf9bf001.png" style={{ color: "transparent" }} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <div className="text-white font-bold text-2xl md:text-2xl xl:text-4xl text-start tracking-wide">
                        SCAN US
                      </div>
                      <div className="text-white font-bold text-xs md:text-sm text-start flex space-x-2">
                        <div className="text-[#27FFB1]">
                          Groupmaker Co., Ltd
                        </div>
                        <div>
                          Line Official
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[40rem] m-0 bg-black md:overflow-hidden" style={{ backgroundImage: "url(/legacy/media/Bg-Why.daed4888.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                  <div className="flex flex-col gap-4 h-full w-full px-10 py-10">
                    <div className="flex justify-center bg-transparent text-[4vw] sm:text-3xl md:text-4xl xl:text-5xl font-bold gap-2 md:gap-5 py-10 tracking-widest">
                      <label className="text-white">
                        <div>
                          WHY
                        </div>
                      </label>
                      <label className="text-[#FF7B31] text-nowrap">
                        GROUP MAKER ROBOTIC
                      </label>
                      <label className="text-white font-extrabold">
                        ?
                      </label>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
                      <div className="w-[50vw] h-[28vw] md:w-[30vw] md:h-[18vw] xl:w-[380px] xl:h-[220px] bg-[#232323] rounded-lg flex flex-col gap-4 justify-center items-center">
                        <div>
                          <img loading="lazy" width="210" height="210" decoding="async" className="w-[7vw] xl:w-[6rem]" src="/legacy/media/Engineer.cb9e8be2.png" style={{ color: "transparent" }} alt="" />
                        </div>
                        <div className="text-white text-[2.5vw] sm:text-[1.5vw] xl:text-xl font-medium">
                          <div>
                            Developed by Thai Engineer
                          </div>
                        </div>
                      </div>
                      <div className="w-[50vw] h-[28vw] md:w-[30vw] md:h-[18vw] xl:w-[380px] xl:h-[220px] bg-[#232323] rounded-lg flex flex-col gap-4 justify-center items-center">
                        <div>
                          <img loading="lazy" width="227" height="227" decoding="async" className="w-[7vw] xl:w-[6rem]" src="/legacy/media/Expertise.8e7bbe79.png" style={{ color: "transparent" }} alt="" />
                        </div>
                        <div className="text-white text-[2.5vw] sm:text-[1.5vw] xl:text-xl font-medium">
                          <div>
                            Enpertise in our Field
                          </div>
                        </div>
                      </div>
                      <div className="w-[50vw] h-[28vw] md:w-[30vw] md:h-[18vw] xl:w-[380px] xl:h-[220px] bg-[#232323] rounded-lg flex flex-col gap-4 justify-center items-center">
                        <div>
                          <img loading="lazy" width="222" height="222" decoding="async" className="w-[7vw] xl:w-[6rem]" src="/legacy/media/Roll.ef6f8c10.png" style={{ color: "transparent" }} alt="" />
                        </div>
                        <div className="text-white text-[2.5vw] sm:text-[1.5vw] xl:text-xl font-medium">
                          <div>
                            End-to-end service
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-center text-[3vw] sm:text-sm md:text-base xl:text-lg text-white mt-[2rem] w-[50rem] md:w-[70rem]">
                        solutions for every business around the world. We implement from the start to finish process with our expert engineering team who can consult and provide the best solutions for your technology needs. We are also a leader in price. With our low-cost but high-quality products, we are able to deliver work to our customers without hesitation. Consult us today and learn how to transform your business to meet Industry 4.0 expectations.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black" style={{ backgroundImage: "url(/legacy/media/BlackGroundCor_vdo.a2184738.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                  <div className="relative w-full h-[5rem] bg-gradient-to-b from-black from-[2%] to-transparent" />
                  <div className="relative -top-[5rem] left-0 flex justify-center items-start mt-[50%] md:mt-[25%] lg:mt-[13%]">
                    <div className="">
                      <div className="text-white sm:text-3xl font-extrabold md:text-5xl md:font-semibold flex justify-center text-nowrap">
                        UPDATE OUR WORKS
                      </div>
                      <div className="carousel mt-20">
                        <div className="carousel flex">
                          <button className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full bg-[#232323] hover:bg-blue-gray-200 my-auto flex justify-center items-center">
                            <img alt="polygon" loading="lazy" width="41" height="47" decoding="async" className="w-[10px] sm:w-[20px]" src="/legacy/media/Polygon%2012.13625352.png" style={{ color: "transparent" }} />
                          </button>
                          <div className="relative w-[78vw] sm:w-[21rem] md:w-[42.5rem] lg:w-[51.5rem] 2xl:w-[81rem] lg:h-[25rem] overflow-hidden flex items-center">
                            <div className="flex transition-transform duration-500 ease-in-out" id="car1" style={{ transform: "translateX(0rem)" }}>
                              <div>
                                <div className="inline-block m-2">
                                  <div className="w-[75vw] h-[65vw] sm:w-[20rem] sm:h-[18rem] md:w-[20rem] md:h-[18rem] lg:w-[25rem] lg:h-[20rem] 2xl:w-[26rem] 2xl:h-[20rem] bg-[#232323] rounded-xl p-4">
                                    <div className="flex justify-center">
                                      <div className="video-container">
                                        <video autoPlay loop muted playsInline>
                                          <source src="/legacy/videos/AndBot.8bdc6492711ee73df341f8c6efab0ea5.mp4" type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="text-[3.5vw] sm:text-sm font-extrabold my-3 text-white">
                                      POC ANTBOT ROBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium my-1">
                                      Product :ANTBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium">
                                      Type : AGV
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="inline-block m-2">
                                  <div className="w-[75vw] h-[65vw] sm:w-[20rem] sm:h-[18rem] md:w-[20rem] md:h-[18rem] lg:w-[25rem] lg:h-[20rem] 2xl:w-[26rem] 2xl:h-[20rem] bg-[#232323] rounded-xl p-4">
                                    <div className="flex justify-center">
                                      <div className="video-container">
                                        <video autoPlay loop muted playsInline>
                                          <source src="/legacy/videos/AndBotCar.ff336f4de9a50221204be7241563048c.mp4" type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="text-[3.5vw] sm:text-sm font-extrabold my-3 text-white">
                                      CAR TOWING TEST OF ANTBOT ROBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium my-1">
                                      Product :ANTBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium">
                                      Type : AGV
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="inline-block m-2">
                                  <div className="w-[75vw] h-[65vw] sm:w-[20rem] sm:h-[18rem] md:w-[20rem] md:h-[18rem] lg:w-[25rem] lg:h-[20rem] 2xl:w-[26rem] 2xl:h-[20rem] bg-[#232323] rounded-xl p-4">
                                    <div className="flex justify-center">
                                      <div className="video-container">
                                        <video autoPlay loop muted playsInline>
                                          <source src="/legacy/videos/pandora.c75bd79de52925915dc5b71364900c62.mp4" type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="text-[3.5vw] sm:text-sm font-extrabold my-3 text-white">
                                      POC GMR MOBILE ROBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium my-1">
                                      Product :MOBILE ROBOT
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium">
                                      Type : AGV
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="inline-block m-2">
                                  <div className="w-[75vw] h-[65vw] sm:w-[20rem] sm:h-[18rem] md:w-[20rem] md:h-[18rem] lg:w-[25rem] lg:h-[20rem] 2xl:w-[26rem] 2xl:h-[20rem] bg-[#232323] rounded-xl p-4">
                                    <div className="flex justify-center">
                                      <div className="video-container">
                                        <video autoPlay loop muted playsInline>
                                          <source src="/legacy/videos/changer.641800a077a5bddc9eac96306d19ea48.mp4" type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="text-[3.5vw] sm:text-sm font-extrabold my-3 text-white">
                                      GMR EV CHARGER SPECFICATIONS
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium my-1">
                                      Product :EV CHARGER
                                    </div>
                                    <div className="text-[2.75vw] sm:text-sm text-deep-orange-500 font-medium">
                                      Type : IOT
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="rotate-180 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full bg-[#232323] hover:bg-blue-gray-200 my-auto flex justify-center items-center">
                            <img alt="" loading="lazy" width="41" height="47" decoding="async" className="w-[10px] sm:w-[20px]" src="/legacy/media/Polygon%2012.13625352.png" style={{ color: "transparent" }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full relative">
                  <div className="w-full h-full">
                    <div style={{ backgroundImage: "url(/legacy/media/Bg-Expert-Team.baf5450a.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                      <div className="w-full h-full">
                        <div className="w-full h-full flex flex-col justify-between items-center py-10 sm:py-36 md:py-48 lg:py-8 xl:py-12 2xl:py-20 px-5">
                          <div className="w-full text-white flex flex-col justify-center items-center z-10">
                            <span className="font-extrabold w-full text-2xl md:text-3xl lg:text-xl xl:text-3xl text-center">
                              EXPERT
                              <span className="text-[#FF5C00]">
                                TEAM
                              </span>
                            </span>
                            <span className="text-center text-xs sm:text-sm md:text-base lg:text-xl xl:text-lg">
                              <div>
                                We are always developing our team to make progress.
                              </div>
                              <div>
                                Update new things To make our robot products most beneficial to your business
                              </div>
                            </span>
                          </div>
                          <div>
                            <img alt="gmc-teams" loading="lazy" width="1463" height="486" decoding="async" className="w-[32rem] sm:w-[48rem] md:w-[52rem] lg:w-[32rem] xl:w-[56rem]" src="/legacy/media/TeamGMR.a3951306.png" style={{ color: "transparent" }} />
                          </div>
                          <div className="w-full pt-10">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-5 xl:gap-10">
                              <div className="flex justify-end items-center lg:justify-end">
                                <div className="w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[20rem] lg:h-[12rem] xl:w-[24rem] xl:h-[14rem] flex p-3 sm:p-4 md:p-6 lg:p-8 xl:p-6 rounded-md relative" style={{ background: "linear-gradient(rgb(35, 35, 35) 82%, rgba(77, 44, 25, 0.88) 88%, rgba(118, 52, 15, 0.95) 95%, rgb(255, 92, 0) 100%)" }}>
                                  <div className="h-full flex flex-col gap-2 sm:gap-4 md:gap-10 justify-start text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-white">
                                    <div className="font-bold">
                                      <div className="text-[#FF5C00]">
                                        BANK
                                        <span className="text-white">
                                          BOONANAN
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-medium text-[6px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
                                      <div style={{ lineHeight: "1" }}>
                                        SENIOR SPECIALIST
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        MECHATRONICS
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        ENGINEER
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[50%] h-full flex items-center justify-center">
                                    <img alt="bank senior specialist" loading="lazy" width="270" height="436" decoding="async" className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] xl:w-[10rem] absolute bottom-0 right-0" src="/legacy/media/Bank.c1177241.png" style={{ color: "transparent" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-start items-center lg:justify-center">
                                <div className="w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[20rem] lg:h-[12rem] xl:w-[24rem] xl:h-[14rem] flex p-3 sm:p-4 md:p-6 lg:p-8 xl:p-6 rounded-md relative" style={{ background: "linear-gradient(rgb(35, 35, 35) 82%, rgba(77, 44, 25, 0.88) 88%, rgba(118, 52, 15, 0.95) 95%, rgb(255, 92, 0) 100%)" }}>
                                  <div className="h-full flex flex-col gap-2 sm:gap-4 md:gap-10 justify-start text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-white">
                                    <div className="font-bold">
                                      <div className="text-[#FF5C00]">
                                        TARM
                                        <span className="text-white">
                                          NATHAKORN
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-medium text-[6px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
                                      <div style={{ lineHeight: "1" }}>
                                        SENIOR SPECIALIST
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        MECHATRONICS
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        ENGINEER
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[40%] sm:w-[40%] md:w-[50%] h-full flex items-center justify-center">
                                    <img alt="tarm senior specialist" loading="lazy" width="259" height="426" decoding="async" className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] xl:w-[10rem] absolute bottom-0 right-0" src="/legacy/media/Tarm.4891cd5c.png" style={{ color: "transparent" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end items-center lg:justify-start">
                                <div className="w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[20rem] lg:h-[12rem] xl:w-[24rem] xl:h-[14rem] flex p-3 sm:p-4 md:p-6 lg:p-8 xl:p-6 rounded-md relative" style={{ background: "linear-gradient(rgb(35, 35, 35) 82%, rgba(77, 44, 25, 0.88) 88%, rgba(118, 52, 15, 0.95) 95%, rgb(255, 92, 0) 100%)" }}>
                                  <div className="h-full flex flex-col gap-2 sm:gap-4 md:gap-10 justify-start text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-white">
                                    <div className="font-bold">
                                      <div className="text-[#FF5C00]">
                                        FRANK
                                        <span className="text-white">
                                          CHAIWIT
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-medium text-[6px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
                                      <div style={{ lineHeight: "1" }}>
                                        SENIOR SPECIALIST
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        SOFTWARE
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        ENGINEER
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[50%] lg:w-[40%] h-full flex items-center justify-center">
                                    <img alt="frank senior specialist" loading="lazy" width="256" height="423" decoding="async" className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] xl:w-[10rem] absolute bottom-0 right-0" src="/legacy/media/Frank.1afc463a.png" style={{ color: "transparent" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-start items-center lg:justify-end">
                                <div className="w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[20rem] lg:h-[12rem] xl:w-[24rem] xl:h-[14rem] flex p-3 sm:p-4 md:p-6 lg:p-8 xl:p-6 rounded-md relative" style={{ background: "linear-gradient(rgb(35, 35, 35) 82%, rgba(77, 44, 25, 0.88) 88%, rgba(118, 52, 15, 0.95) 95%, rgb(255, 92, 0) 100%)" }}>
                                  <div className="h-full flex flex-col gap-2 sm:gap-4 md:gap-10 justify-start text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-white">
                                    <div className="font-bold">
                                      <div className="text-[#FF5C00]">
                                        TOH
                                        <span className="text-white">
                                          SUPAAUT
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-medium text-[6px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
                                      <div style={{ lineHeight: "1" }}>
                                        SENIOR SPECIALIST
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        PCB DESIGN
                                      </div>
                                      <div style={{ lineHeight: "1" }}>
                                        ENGINEER
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[50%] sm:w-[60%] lg:w-[40%] xl:w-[40%] h-full flex items-center justify-center">
                                    <img alt="toh senior specialist" loading="lazy" width="278" height="418" decoding="async" className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] xl:w-[10rem] absolute bottom-0 right-0" src="/legacy/media/Toh.6b14f3d1.png" style={{ color: "transparent" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end lg:justify-center items-center">
                                <div className="w-[12rem] h-[8rem] sm:w-[20rem] sm:h-[12rem] md:w-[22rem] md:h-[14rem] lg:w-[20rem] lg:h-[12rem] xl:w-[24rem] xl:h-[14rem] flex p-3 sm:p-4 md:p-6 lg:p-8 xl:p-6 rounded-md relative" style={{ background: "linear-gradient(rgb(35, 35, 35) 82%, rgba(77, 44, 25, 0.88) 88%, rgba(118, 52, 15, 0.95) 95%, rgb(255, 92, 0) 100%)" }}>
                                  <div className="h-full flex flex-col gap-2 sm:gap-4 md:gap-10 justify-start text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-white">
                                    <div className="font-bold">
                                      <div className="text-[#FF5C00]">
                                        GAME
                                        <span className="text-white">
                                          NATTHAWE
                                        </span>
                                      </div>
                                    </div>
                                    <div className="font-medium text-xs">
                                      <div className="font-medium text-[6px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
                                        <div style={{ lineHeight: "1" }}>
                                          SENIOR SPECIALIST
                                        </div>
                                        <div style={{ lineHeight: "1" }}>
                                          PRODUCT DEVELOPER
                                        </div>
                                        <div style={{ lineHeight: "1" }}>
                                          ENGINEER
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-[30%] sm:w-[40%] lg:w-[40%] md:w-[50%] h-full flex items-center justify-center">
                                    <img alt="game senior specialist" loading="lazy" width="233" height="400" decoding="async" className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] xl:w-[10rem] absolute bottom-0 right-0" src="/legacy/media/PGame.4a7f00fe.png" style={{ color: "transparent" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
