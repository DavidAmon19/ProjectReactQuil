import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [content, setContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      ['clean']
    ]
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setPreviewMode(false)}
            className={`px-4 py-2 mr-2 ${!previewMode ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded hover:bg-blue-600`}
          >
            Editar
          </button>
          <button
            onClick={() => setPreviewMode(true)}
            className={`px-4 py-2 ${previewMode ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded hover:bg-blue-600`}
          >
            Preview
          </button>
        </div>
        {!previewMode ? (
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            className="h-64 mb-4"
          />
        ) : (
          <div className="border-t pt-4 mt-4 h-64 overflow-auto">
            <h2 className="text-xl">Preview:</h2>
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
