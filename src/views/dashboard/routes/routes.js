import MyPatients from "../../myPatients/MyPatients";
import Patients from "../../patients/Patients";

const routes = [
  {
    url: "patients",
    name: "Patients",
    icon: "",
    component: Patients,
  },
  {

    url: "my-patients",
    name: "My Patients",
    icon: "",
    component: MyPatients,
  },
];

export default routes;
