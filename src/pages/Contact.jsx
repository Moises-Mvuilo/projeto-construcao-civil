import Header from "../Components/Header/Header.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ContactForm from "../Components/ContactForm/ContactForm.jsx";

function Contact() {
  return (
    <>
      <Header></Header>

      <Banner title="Contact Us" image="contact.jpg" />
      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
