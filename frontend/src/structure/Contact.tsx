import MailTo from "../elements/MailTo";

function Contact() {
  return (<div id="Contact" className="flex justify-center h-full flex-col items-center bg-gradient-to-r from-purple-600 to-blue-600 py-8">
              <p className="desktop:text-[72px] mobile:text-[40px] font-bold ">Get in Touch</p>
              <p className="desktop:text-[30px] text-center mobile:text-[24px] max-w-xl">Any questions, suggestions or business related inquiries, I’d love to hear from you!</p>
              <MailTo label="✉️ d.czogalla@outlook.com" mailto="mailto:no-reply@example.com"/>
  </div>);
}

export default Contact;