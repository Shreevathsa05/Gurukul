import { createBrowserRouter } from "react-router";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[90vh] flex items-center justify-center bg-[#EDF6F9] text-[#059b69] p-4">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center rounded-lg shadow-2xl"
          style={{ backgroundImage: "url('/herobg.png')" }}
        >
          <h1 className="text-8xl font-bold drop-shadow-lg bg-black/60 p-4 rounded-xl ">Gurukul</h1>
        </div>
      </section>

      {/* Features Section */}
      <h2 className="pt-16 text-3xl font-bold text-center mb-12 text-[#006D77]">Features</h2>

      <section className="pb-4 bg-white text-black flex justify-center px-6">
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
          {/* Slidecast */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Slidecast</h3>
            <p>PPT/PDF + Voice → Lecture stream/download, low-bandwidth friendly.</p>
          </div>

          {/* Learners Hub */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Learners Hub</h3>
            <p>Upload lectures, create courses & auto-compressed videos for rural accessibility.</p>
          </div>

          {/* Mini Meet */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Mini Meet</h3>
            <p>P2P mentoring, doubt-solving, whiteboard, chat & fallback APIs.</p>
          </div>

          {/* Teacher Toolkit */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Teacher Toolkit</h3>
            <p>AI-powered tools to generate PPTs, flashcards, question banks & videos.</p>
          </div>

          {/* Student-Centric App */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Student-Centric App</h3>
            <p>
              Mobile & web app optimized for low bandwidth with caching, local storage, and
              encryption/decryption compression techniques like Netflix/Prime for efficient streaming.
            </p>
          </div>

          {/* Vlabs */}
          <div className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-[#83C5BE] rounded-xl bg-[#EDF6F9] shadow-sm hover:shadow-lg hover:bg-[#FFDDD2] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#006D77]">Vlabs</h3>
            <p>
              Virtual labs to simulate practical experiments for colleges with limited or no lab infrastructure.
            </p>
          </div>
        </div>
      </section>


      {/* References Section */}
      <section className="py-16 px-6 bg-[#EDF6F9] text-black">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006D77]">Resources</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://github.com/Shreevathsa05/SIH-web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#006D77] text-white rounded-lg shadow hover:bg-[#E29578] transition"
          >
            GitHub Repository
          </a>
          <ul className="list-disc list-inside space-y-2 text-[#006D77]">
            <li><a href="https://js.langchain.com/docs/tutorials/rag/" target="_blank">LangChain.js </a></li>
            <li><a href="https://gitbrent.github.io/PptxGenJS/" target="_blank">PptxGen.js</a></li>
            <li><a href="https://cloudinary.com/guides/video-formats/vp9-vs-h-264" target="_blank">VP9 vs H.264</a></li>
            <li><a href="https://www.researchgate.net/publication/320829701_Performance_analysis_of_H264_H265_VP9_and_AV1_video_encoders" target="_blank">Video Codec Performance</a></li>
          </ul>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#006D77]">System Flow</h2>
        <img
          src="/flowchart.png"
          alt="Flowchart"
          className="mx-auto max-w-3xl shadow-lg rounded-lg border border-[#83C5BE]"
        />
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-[#EDF6F9]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006D77]">Our Team</h2>

        {/* Core Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/team-lead.jpg" alt="Team Lead" className="w-32 h-32 mx-auto rounded-full border-4 border-[#006D77]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 1</h3>
            <p className="text-gray-600">Team Lead</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/uiux.jpg" alt="UI/UX" className="w-32 h-32 mx-auto rounded-full border-4 border-[#83C5BE]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 2</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/genai.jpg" alt="GenAI" className="w-32 h-32 mx-auto rounded-full border-4 border-[#E29578]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 3</h3>
            <p className="text-gray-600">GenAI Engineer</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/fsd1.jpg" alt="FSD" className="w-32 h-32 mx-auto rounded-full border-4 border-[#83C5BE]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 4</h3>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/fsd2.jpg" alt="FSD" className="w-32 h-32 mx-auto rounded-full border-4 border-[#83C5BE]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 5</h3>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/fsd3.jpg" alt="FSD" className="w-32 h-32 mx-auto rounded-full border-4 border-[#83C5BE]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Member 6</h3>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
        </div>

        {/* Mentors */}
        <h3 className="text-2xl font-semibold text-center mb-8 text-[#006D77]">Our Mentors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/mentor1.jpg" alt="Mentor 1" className="w-32 h-32 mx-auto rounded-full border-4 border-[#E29578]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Mentor 1</h3>
            <p className="text-gray-600">Domain Expert</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src="/mentor2.jpg" alt="Mentor 2" className="w-32 h-32 mx-auto rounded-full border-4 border-[#E29578]" />
            <h3 className="mt-4 text-xl font-semibold text-[#006D77]">Mentor 2</h3>
            <p className="text-gray-600">Technical Guide</p>
          </div>
        </div>
      </section>
    </div>
  );
}
