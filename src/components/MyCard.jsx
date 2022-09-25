export const MyCard = (
  { url, titulo, descripcion, url_preview, url_github }
  ) => {
  return (
    
    <div className="m-6 bg-white px-6 py-10 rounded-2xl shadow-2xl" class="card">
      <img src={url} className="rounded-2xl mx-20 mb-2 shadow-2xl" width="50%"/>
      <h1 className="font-bold text-2xl mb-6">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <a href={url_preview} target="_blank" className="bg-blue-500 mr-2 text-white px-6 py-2 rounded-full">
        Vista Previa
      </a>
      <a href={url_github} target="_blank" className="bg-blue-500 text-white px-6 py-2 rounded-full">
        GitHub
      </a>
      <p/>
    </div>
  );
};
