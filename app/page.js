import Link from "next/link";
import HeroImg from "../public/Landing/Hero.png";
import googleImg from "../public/Landing/googlelogo.png";
import ciscoImg from "../public/Landing/ciscologo.png";
import framerImg from "../public/Landing/framerlogo.png";
import twilioImg from "../public/Landing/twiliologo.png";
import secondsectionImg from "../public/Landing/2section.png";
import automatationImg from "../public/Landing/automatation.png";
import chatbotImg from "../public/Landing/chatbot.png";
import conversionChatbotImg from "../public/Landing/conversionChatbot.png";
import customerChatbotImg from "../public/Landing/customerChatbot.png";
import testemonial1Img from "../public/Landing/testemonial1.jpg";
import testemonial2Img from "../public/Landing/testemonial2.jpg";
import testemonial3Img from "../public/Landing/testemonial3.jpg";
import starImg from "../public/Landing/star.png";
import Button from "./components/Button";
import Blur from "./components/Blur";
import PrButton from "./components/PrButton";

export default function Home() {
  const testemonials = [
    {
      img: '',
      name: 'Alex Chesterman OBE',
      position: 'CEO of cazoo.co.uk',
      text: "Integrating AI-driven chatbots from your company was a game-changer for our organization. The instant solutions and streamlined internal communications have significantly increased our team's productivity. We have witnessed a remarkable 50% increase in efficiency, leading to a substantial boost in our overall profits. Thank you for helping us stay ahead in the competitive market!"
    },
    {
      img: testemonial1Img,
      name: 'Mark Archivald',
      position: 'stability.ai',
      text: "Your chatbot solution has revolutionized our customer interactions. The personalized recommendations and real-time responses have elevated our customer service to new heights. As a result, we experienced a whopping 40% rise in customer satisfaction, leading to an impressive 25% increase in sales. Our decision to partner with your team was undoubtedly a game-changer for our business.!"
    },
    {
      img: testemonial2Img,
      name: 'Martin Albraight',
      position: 'Project Manager at protocol.ai',
      text: "Your chatbots have transformed how we handle technical queries and support requests. The seamless automation of our customer service processes has reduced response times by 50%, enabling us to provide instant solutions to our clients. Not only did this lead to a 20% increase in customer retention, but it also strengthened our reputation as an innovative and customer-centric company."
    },
    {
      img: '',
      name: 'Henderson',
      position: 'CEO of lightning.ai',
      text: "Integrating your chatbots in our order processing system was a brilliant move. The chatbots streamlined our order tracking and provided real-time updates to our customers. This led to a significant reduction in delivery errors and complaints, resulting in a remarkable 15% increase in customer loyalty. Your chatbots have undeniably been a key factor in our business growth."
    }
  ]

  return (
    <>
      <div className="w1">
        {/* Hero */}
        <div className="text-white flex mt-[200px] items-start relative md:flex-col">
          <div className="flex-1">
            <h1 className="font-semibold text-[50px] sm:text-[40px]">
              <div data-aos='fade-right' data-aos-delay="200">Supercharge Your Business</div>
              <div data-aos='fade-right' data-aos-delay="400">Growth with AI Solutions</div>
            </h1>
            <p data-aos='fade-right' data-aos-delay="600" className="text-pt text-[14px] mt-3 mb-10">
              We leverage the power of cutting-edge AI solutions to propel your business to new heights of success.
            </p>
            <div data-aos='fade-right' data-aos-delay="800">
              <PrButton text='Start Now' link='/chatbot' style='bg-prBlue border border-prBlue hover:bg-transparent' />
            </div>
            <div className="mt-20" data-aos='zoom-in' data-aos-delay="1000">
              <div className="font-medium mb-10">
                Trusted by 800+ Businesses
              </div>
              <div>
                <div className="text-[14px] mb-4">
                  Parter with well known brands
                </div>
                <div className="flex gap-8">
                  <img
                    className="h-[35px] sm:h-[30px] w-auto"
                    src={googleImg.src}
                  />
                  <img
                    className="h-[35px] sm:h-[30px] w-auto"
                    src={ciscoImg.src}
                  />
                  <img
                    className="h-[35px] sm:h-[30px] w-auto"
                    src={framerImg.src}
                  />
                  <img
                    className="h-[35px] sm:h-[30px] w-auto"
                    src={twilioImg.src}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img data-aos="fade-up" className="w-[500px]" src={HeroImg.src} />
          </div>
        </div>
        <Blur style="bg-[#D9DC37] blur-[150px] bottom-[-50px] left-[-50px]" />

        {/* 2 section */}
        <div className="flex mt-[350px] gap-10 md:flex-col">
          <div className="text-white flex-1">
            <h1 data-aos='fade-right' data-aos-delay="200" className="text-[45px] sm:text-[35px] font-semibold">
              We are obsessed about growing your business
            </h1>
            <p data-aos='fade-right' data-aos-delay="200" className="text-pt text-[14px] my-10 mb-20">
              We believe that every business has untapped potential waiting to be unlocked. Our AI-driven solutions are designed to streamline your processes, optimize operations, and deliver unparalleled customer experiences.
            </p>
            <div data-aos='fade-right' data-aos-delay="200">
              <Button text="Learn more about us" />
            </div>
          </div>
          <div className="flex-1">
            <img
              data-aos='fade-left'
              className="rounded-lg shadow-lg shadow-white"
              src={secondsectionImg.src}
            />
          </div>
        </div>
      </div>

      <div>
        {/* 3 section */}
        <div className="mt-[350px]">
          <div data-aos='fade-down' data-aos-delay="200" className="text-center w1 !mb-[200px] md:!mb-[120px]">
            <h1 className="text-[45px] sm:text-[35px] font-semibold mb-4">
              What we offer?
            </h1>
            <p className="text-pt text-[14px]">
              We bring you the power of conversational AI to drive higher conversions and customer engagement. Our cutting-edge chatbot technology empowers businesses like yours to deliver personalized interactions, capture leads, and enhance your overall customer experience.
            </p>
          </div>
        </div>
        <div className="relative">
          <Blur style="bg-[#FFC0CB] blur-[150px] top-1/2 left-0" />
          <div className="flex md:flex-col w1 gap-10">
            <div data-aos='fade-right' data-aos-delay="200" className="flex-1">
              <h1 className="text-[35px] sm:text-[25px] font-semibold">
                AI Chatbots For Sales Conversion
              </h1>
              <p className="text-pt text-[14px] mt-10 mb-24">
                Our cutting-edge Sales Conversion chatbot is designed to enhance sales conversions by engaging customers with personalized product recommendations, addressing their queries promptly, and guiding them through the purchase process effortlessly. Businesses leveraging our chatbot have experienced a significant boost in sales revenue, increased customer retention, and improved conversion rates, thanks to its data-driven insights and effective lead nurturing capabilities. Harness the potential of AI-driven chatbot technology to supercharge your sales and achieve unprecedented growth in your business.
              </p>
              {/* <Button text="Learn more" type={true} /> */}
              <PrButton text='Start Now' link='/chatbot' style='bg-prBlue border border-prBlue hover:bg-transparent' />
            </div>
            <div data-aos='fade-left' data-aos-delay="200" className="flex-1">
              <img className="w-[1400px] md:w-3/4" src={conversionChatbotImg.src} />
            </div>
          </div>
        </div>
        {/* <div className="relative">
          <Blur style="bg-[#D9DC37] blur-[150px] top-1/2 left-0" />
          <div className="flex md:flex-col w1 md:!mt-[120px] !mt-[300px] gap-10">
            <div className="flex-2">
              <h1 className="text-[35px] sm:text-[25px] font-semibold">
                AI Automatated Proccess
              </h1>
              <p className="text-pt text-[14px] mt-10 mb-24">
                Are you struggling to reach your revenue goals? AI is the
                game-changer you need! Our team of AI experts will analyze your
                business data and identify opportunities for optimization and
                expansion. With AI-driven insights, you can make data-driven
                decisions that ensure every step you take is in the right
                direction.
              </p>
              <PrButton text='Start Now' link='/automatation' style='bg-prBlue border border-prBlue hover:bg-transparent' />
            </div>
            <div className="flex-2">
              <img className="w-[1300px] md:w-3/4" src={automatationImg.src} />
            </div>
          </div>
        </div> */}
        <div className="relative">
          <div className="flex md:flex-col w1 md:!mt-[120px] !mt-[300px] gap-10">
            <div data-aos='fade-right' data-aos-delay="400" className="flex-1">
              <h1 className="text-[35px] sm:text-[25px] font-semibold">
                AI Chatbots For Customer Interaction
              </h1>
              <p className="text-pt text-[14px] mt-10 mb-24">
                Our advanced Customer Support chatbot offers seamless customer interactions, providing instant responses, personalized recommendations, and guiding customers throughout their journey. Businesses using our chatbot have witnessed heightened customer satisfaction, improved loyalty, and increased revenue streams due to optimized marketing strategies and data-driven insights. Embrace the power of AI to revolutionize your customer experience and drive remarkable results for your business.
              </p>
              <PrButton text='Start Now' link='/automatation' style='bg-prBlue border border-prBlue hover:bg-transparent' />
            </div>
            <div data-aos='fade-left' data-aos-delay="400" className="flex-1">
              <img className="w-[1400px] md:w-3/4" src={customerChatbotImg.src} />
            </div>
          </div>
        </div>
        <div className="relative">
          <Blur style="bg-[#D9DC37] blur-[150px] top-1/2 left-0" />
          <div className="flex md:flex-col w1 md:!mt-[120px] !mt-[300px] gap-10">
            <div data-aos='fade-right' data-aos-delay="400" className="flex-1">
              <h1 className="text-[35px] sm:text-[25px] font-semibold">
                AI Chatbots For Solving Problems
              </h1>
              <p className="text-pt text-[14px] mt-10 mb-24">
                Introducing our advanced problem-solving chatbot that excels in providing tailored solutions to customer queries and challenges. By engaging users in interactive conversations, it offers real-time assistance and actionable advice, streamlining issue resolution and improving overall users satisfaction. Experience the power of an AI-driven problem solver, as our chatbot optimizes support operations, reduces response times, and fosters a proactive approach to resolving users problems. Empower your business with a chatbot that acts as a reliable and efficient problem-solving partner, ensuring seamless experiences and lasting customer loyalty.
              </p>
              <PrButton text='Start Now' link='/automatation' style='bg-prBlue border border-prBlue hover:bg-transparent' />
            </div>
            <div data-aos='fade-left' data-aos-delay="400" className="flex-1">
              <img className="w-[1400px] md:w-3/4" src={chatbotImg.src} />
            </div>
          </div>
        </div>
      </div>

      {/* 4 section */}
      <div className="my-[350px]">
        <div data-aos='fade-down' data-aos-delay="600" className="w1 text-center flex flex-col items-center">
          <h1 className="text-[45px] sm:text-[35px] font-semibold mb-10">
            Our Clients
          </h1>
          <p>Our AI chatbots are used by 800+ businesses across the globe.</p>
          <div className="mt-20">
            <div className="mb-5">We are partners with:</div>
            <div>
              <div className="flex gap-8">
                <img
                  className="h-[35px] sm:h-[30px] w-auto"
                  src={googleImg.src}
                />
                <img
                  className="h-[35px] sm:h-[30px] w-auto"
                  src={ciscoImg.src}
                />
                <img
                  className="h-[35px] sm:h-[30px] w-auto"
                  src={framerImg.src}
                />
                <img
                  className="h-[35px] sm:h-[30px] w-auto"
                  src={twilioImg.src}
                />
              </div>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-delay="600" className="mt-[150px] mb-[80px] font-medium text-[20px]">What our clients say about us</div>
        </div>
        {/* <div className="flex justify-between w-[2400px] gap-10 relative translate-x-[-100px]"> */}
        <div className="flex md:flex-col justify-between gap-10 relative">
          {testemonials.map((e) => {
            return (
              <div className="bg-white text-black px-2 py-2 rounded-md">
                <div className="flex gap-5 mb-5">
                  <div>
                    <img className="w-[60px] h-[60px] rounded-full" src={e.img.src} />
                  </div>
                  <div>
                    <h2 className="text-[20px] font-semibold">{e.name}</h2>
                    <p className="font-semiboldw text-[13px]">{e.position}</p>
                  </div>
                </div>
                <div className="font-regular">
                  {e.text}
                </div>
                <div className="flex mt-[20px] gap-2">
                  {[1, 2, 3, 4, 5].map((e) => {
                    return <img className="w-[20px]" src={starImg.src} />
                  })}
                </div>
              </div>
            )
          })}
          <Blur style="bg-[#814CC6] blur-[150px] bottom-[-100px] right-[350px]" />
        </div>
      </div>
    </>
  );
}
