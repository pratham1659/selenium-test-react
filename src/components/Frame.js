import React, { useEffect, useRef } from "react";

const Frame = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/quill/dist/quill.snow.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/quill/dist/quill.min.js"></script>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }
          #editor-container { height: 200px; border: 1px solid #ccc; }
        </style>
      </head>
      <body>
        <div id="editor-container"></div>
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            var quill = new Quill('#editor-container', {
              theme: 'snow',
              placeholder: 'Write something amazing...',
              modules: {
                toolbar: [
                  ['bold', 'italic', 'underline'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  [{ 'align': [] }],
                  ['clean']
                ]
              }
            });
          });
        </script>
      </body>
      </html>
    `);
    doc.close();
  }, []);

  return (
    <div className="iframe-container p-4 space-y-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="headerStyle text-center bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-2xl font-semibold">Selenium iFrame Playground</h2>
        <p className="text-gray-600">This is an iFrame to interact with Selenium</p>
      </div>

      {/* Quill Editor iFrame */}
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Quill Editor Inside an Iframe</h2>
        <iframe ref={iframeRef} className="w-full h-[350px] border rounded-lg shadow-sm" title="quill-editor-iframe"></iframe>
      </div>
    </div>
  );
};

export default Frame;
