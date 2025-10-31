import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import HeaderText from "src/components/New components/HeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import ReactMarkdown from "react-markdown";
import { YoutubeAnalysisAI } from "src/apiClients/aiAssessmentsApiService";


const apiEndpoints = [
  { path: "/youtube/analyze-tech-review", label: "Analyze Tech Review", description:"Instantly analyze tech review videos to highlight key features, pros and cons, and expert opinions." },
  { path: "/youtube/get-coding-timestamps", label: "Get Coding Timestamps",description:"Auto-generate coding video timestamps for quick access to code walkthroughs, tips, and key concepts." },
  { path: "/youtube/break-down-lecture", label: "Break Down Lecture" ,description:"Break down educational lectures into structured summaries and topic-wise insights for fast learning." },
  { path: "/youtube/summarize-documentary", label: "Summarize Documentary",description:"Summarize documentaries with key facts, timeline breakdowns, and takeaway messages for quick understanding." },
  { path: "/youtube/create-study-guide", label: "Create Study Guide",description:"Turn any educational video into a ready-to-use study guide with organized notes and topic summaries." },
];

export default function YouTubeApiForm() {
  const [selectedApi, setSelectedApi] = useState(apiEndpoints[0]);
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleApiClick = (api) => {
    setSelectedApi(api);
    setUrl("");
    setResponse(null);
  };

  const handleSubmit = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube video URL.");
      return;
    }

    if (!url.startsWith("http")) {
      setError("Invalid URL format.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      setLoading(true);
      //   const res = await fetch(selectedApi.path, {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ url }),
      //   });

      const response = await YoutubeAnalysisAI(selectedApi.path, url);

      //   const data = await res.json();
      setResponse(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResponse({ error: "Failed to fetch response" });
    } finally {
      setLoading(false);
    }
  };

  //   const renderFormattedContent = (text) => {
  //     const lines = text.split("\n").filter(Boolean);

  //     return lines.map((line, index) => {
  //       if (line.startsWith("## ")) {
  //         return (
  //           <h2
  //             key={index}
  //             className="text-lg font-semibold text-indigo-700 mt-4 mb-2"
  //           >
  //             {line.replace("## ", "")}
  //           </h2>
  //         );
  //       }
  //       return (
  //         <p key={index} className="text-gray-800 mb-2 text-sm leading-relaxed">
  //           {line}
  //         </p>
  //       );
  //     });
  //   };

  return (
    <div className="bg-whiteColor dark:bg-bodyBg-dark">
    <div className="container mx-auto p-6">
      <div>
        <div className="text-center space-y-2 mb-8">
          <HeaderText>YouTube Video Summarizer</HeaderText>
          <ParagraphText>
            Select an API and enter a YouTube URL to get started
          </ParagraphText>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {apiEndpoints.map((api) => (
            <button
              key={api.path}
              onClick={() => handleApiClick(api)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedApi?.path === api.path
                  ? "bg-primaryColor text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
              }`}
            >
              {api.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto ">
        {selectedApi && (
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {selectedApi.label}
            </h2>
            <p className=" mb-2">
              {selectedApi.description}
            </p>

            <input
              type="text"
              placeholder="Paste YouTube video URL..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <div className="w-full flex items-center justify-end">
              <button
                onClick={handleSubmit}
                className=" mt-4 flex items-center justify-cnter gap-2 px-6 py-2 bg-primaryColor text-white rounded-lg shadow border hover:bg-whiteColor hover:text-primaryColor hover:border-primaryColor transition duration-300 "
              >
                {/* {loading ? (
                <div className="spinnerButton"></div>
              ) : (
                <FaPaperPlane className="text-sm" />
              )} */}
                <FaPaperPlane className="text-sm" />
                Submit
              </button>
            </div>

            {loading ? (
              //   <div className="flex justify-center py-10">
              //   <div className="h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              // </div>
              <div className="flex justify-center items-center py-10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            ) : (
              response && (
                <div className="mt-6 bg-gray-50 text-gray-900 p-5 rounded-lg prose max-w-none border max-h-125 overflow-y-auto">
                  {response?.content ? (
                    <ReactMarkdown>{response.content}</ReactMarkdown>
                  ) : (
                    <pre className="text-red-500">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  )}
                </div>
              )
            )}
            {/* 
{response && (
  <div className="mt-6 bg-gray-50 text-gray-900 p-5 rounded-lg border text-sm leading-relaxed">
    {response?.content
      ? renderFormattedContent(response.content)
      : typeof response === 'object'
      ? JSON.stringify(response, null, 2)
      : response}
  </div>
)} */}
          </div>
        )}
      </div>
    </div>
    </div>

  );
}
