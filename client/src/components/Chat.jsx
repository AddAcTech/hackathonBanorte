import React from "react";

export default function Chat() {
  const handleClick = () => {};

  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8">
        <div className="p-5">
          <label
            htmlFor="pdf-upload"
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Subir archivo PDF
          </label>
          <div className="flex items-center">
            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log(file.name);
                }
              }}
            />
            <label
              htmlFor="pdf-upload"
              className="cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Seleccionar archivo
            </label>
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <h2 className="text-2xl font-bold text-gray-800">Chat</h2>
        </div>
      </main>
    </>
  );
}
