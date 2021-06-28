import NavTop from "../../components/dashboard/NavTop";

const MyPatients = ({ location, routes }) => {

  const { url } = routes[1];

  const formatName = url.split("-");
  const pageName = formatName[0] + " " + formatName[1];
  const name = pageName[0].toUpperCase() + pageName.slice(1);

  return (
    <div className="info-page">
      <NavTop name={name} />
      <div className="px-md-4 mt-md-4"> Aqui es el cuerpo de Patient</div>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
      <p className="px-md-4 mt-md-4">Lorem ipsum </p>
    </div>
  );
};

export default MyPatients;
