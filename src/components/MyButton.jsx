export const MyButton = ({ url, titulo, url_preview}) => {
    return (
      
      <div className="m-20 bg-white px-6 py-10 rounded-2xl shadow-2xl">
        <img src={url} className="rounded-2xl mx-20 mb-2 shadow-2xl" width="50%"/>
        <h1 className="font-bold text-2xl mb-6">{titulo}</h1>
        <a href={url_preview} target="_blank" className="bg-blue-500 mr-2 text-white px-6 py-2 rounded-full">
          Acceso
        </a>
        <p/>
      </div>
    );
  };