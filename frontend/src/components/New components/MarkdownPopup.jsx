import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css";

import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownPopup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800">📄 Functional Specification Document</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition-colors text-2xl"
          >
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 prose prose-lg max-w-none">
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        

            {content}
          </ReactMarkdown> */}
           <MarkdownPreview
                source={content}
                style={{
                  backgroundColor: "transparent",
                  fontSize: "16px",
                }}
              />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPopup;
