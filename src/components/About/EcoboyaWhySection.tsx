import Image from "next/image";

const EcoboyaWhySection = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-primary">¿Por qué nació Ecoboya?</h2>
        <p className="mb-4 text-lg text-gray-700">
          La contaminación por plásticos en ríos y lagos representa una amenaza creciente para los ecosistemas acuáticos. La falta de sistemas efectivos para retener residuos o delimitar zonas críticas ha provocado la degradación del agua y la pérdida de biodiversidad.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Ecoboya surge con el objetivo de reducir la contaminación y facilitar el control de los cuerpos de agua. Gracias a su diseño funcional y resistente, puede emplearse para contener desechos flotantes, marcar áreas seguras o restringidas, y organizar espacios acuáticos de manera eficiente.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <Image
          src="/src/images/image3.png"
          alt="Ecoboya en acción"
          width={480}
          height={320}
          className="rounded-xl object-cover"
        />
        <Image
          src="/src/images/image4.png"
          alt="Ecoboya flotando"
          width={480}
          height={320}
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default EcoboyaWhySection;
