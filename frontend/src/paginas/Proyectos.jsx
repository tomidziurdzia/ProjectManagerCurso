import useProyectos from "../hooks/useProyectos";

const Proyectos = () => {
  const { proyectos, setProyectos } = useProyectos();
  console.log(proyectos);
  return (
    <>
      <h1 className="text-3xl font-black">Proyectos</h1>
      <div></div>
    </>
  );
};

export default Proyectos;