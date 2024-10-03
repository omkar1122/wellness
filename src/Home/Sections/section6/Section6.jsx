// Components
import { Container, Row } from "react-bootstrap";
// style
import "./Section6.css";
// Context
import { useAuth } from "../../../../Context/AuthContext";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Section6() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");

  const handleValue = (e) => {
    e.preventDefault();
    if (email.includes("@") && name) {
      emailjs
        .sendForm(
          "service_wz4b2xg",
          "template_hajy9xu",
          form.current,
          "rrNvraXvPIQepy7tI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire(
        `${t("Thank You")} <b style=color:#0066ff;>  ${name.toUpperCase()} 
         </b> ${t("We recieved Your Message Successfully")}`,
        " <b style=color:#0066ff;> " + `${t("Healthify Team")}` + " </b>",
        "success"
      );
      clearInputs();
    } else {
      Swal.fire({
        icon: "error",
        title: t("Oops!"),
        text: t("Plz Enter Your Name And Email Correctly"),
        footer: "",
      });
    }
  };
  const clearInputs = () => {
    setName("");
    setEmail("");
    setMassege("");
  };
  const { t } = useAuth();
  return (
    <>
    </>
  );
}
