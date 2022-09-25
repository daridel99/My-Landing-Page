import { MyButton } from "../components/MyButton";
import { redes } from "../database/redes";

export const ContactoPage = () => {
  return (
    <>
    <h1 className='font-bold text-2xl'>Contacto</h1>
    {redes.map((redes) => (
          <MyButton
            key={redes.id}
            url={redes.url}
            titulo={redes.titulo}
            url_preview={redes.url_preview}
          />
        ))}
    </>
    )
}
