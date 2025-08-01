import React from 'react';

const CodeEditor = ({ code, onChange, language = 'jsx' }) => (
  <div className="relative">
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
      placeholder="Enter your code here..."
      spellCheck={false}
    />
    <div className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
      {language}
    </div>
  </div>
);

export default CodeEditor;