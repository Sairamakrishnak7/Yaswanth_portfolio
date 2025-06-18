import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Github, Linkedin, BookOpen, Film } from "lucide-react";

function HeroIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-slate-900 to-blue-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400 drop-shadow-lg">
        Hi, I'm Yaswanth ?????
      </h1>
      <p className="text-xl sm:text-2xl text-center max-w-2xl text-gray-300">
        Full Stack Developer | Cloud Enthusiast | UI Craftsman
      </p>
      <div className="mt-10">
        <a
          href="/portfolio"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg text-lg transition-all duration-300"
        >
          ?? Enter Portfolio
        </a>
      </div>
      <div className="absolute bottom-4 text-sm text-gray-400 opacity-60">
        Crafted with ?? by Yaswanth | Powered by React & Tailwind
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio ??</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md text-left">
          <h3 className="text-2xl font-bold text-blue-600 mb-2 flex items-center gap-2">
            <Film className="w-5 h-5" /> Movie Recommendation System
          </h3>
          <p className="text-gray-700 mb-2">
            A personalized movie recommendation engine using Python, Streamlit, and collaborative filtering.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://movie-recommender-app-ejjgc6h49jq6g5tdm5egxt.streamlit.app"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              ?? Live App
            </a>
            <a
              href="https://github.com/Sairamakrishnak7/movie-recommender-streamlit"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              ?? GitHub
            </a>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-xl shadow-md text-left">
          <h3 className="text-2xl font-bold text-green-600 mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Course Recommender System
          </h3>
          <p className="text-gray-700 mb-2">
            Recommends relevant courses by mapping resume/job keywords with academic catalogs.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://courserecommenderapp-kfqwzdpntbawnepnmgfut9.streamlit.app"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              ?? Live App
            </a>
            <a
              href="https://github.com/Sairamakrishnak7/course_recommender_streamlit"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              ?? GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
        <a href="mailto:komaravoluyaswanth@gmail.com" className="hover:underline">
          ?? komaravoluyaswanth@gmail.com
        </a>
        <p>?? +1 (864) 790-3566</p>
        <a
          href="https://www.linkedin.com/in/yaswanth-k-227a64345"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          ?? LinkedIn
        </a>
        <a
          href="https://github.com/Sairamakrishnak7"
          target="_blank"
          className="hover:underline text-black"
        >
          ?? GitHub
        </a>
        <a
          href="/resume/Yaswanth_Resume.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          ?? Download Resume
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroIntro />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
