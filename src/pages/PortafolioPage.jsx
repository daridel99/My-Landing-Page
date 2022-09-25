import { MyCard } from "../components/MyCard";
import { portafolio } from "../database/portafolio";

export const PortafolioPage = () => {
  return (
    <>
    <h1 className='font-bold text-2xl'>Portafolio</h1>

      <div class="scrolling-wrapper">
        {portafolio.map((portafolio) => (
          <MyCard
            key={portafolio.id}
            url={portafolio.url}
            titulo={portafolio.titulo}
            descripcion={portafolio.descripcion}
            url_preview={portafolio.url_preview}
            url_github={portafolio.url_github}
          />
        ))}
      </div>

 </> 
 );
}
