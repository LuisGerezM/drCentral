import NavTop from "../../components/dashboard/NavTop";

const Patients = ({ location, routes }) => {


  const { url } = routes[0];
  const name = url[0].toUpperCase() + url.slice(1);


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

export default Patients;
