import { useRef, useState } from "react";
import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const baseApi = import.meta.env.VITE_API_URI

    try {
      const response = await fetch(`${baseApi}/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      if(data.success){
        formRef.current.reset();
        toast.success(data.message)
        setLoading(false);
      }
      if(!data.success){
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log('sending email error :',error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-gradient-to-b from-gray-800 to-gray-900 bg-gray-100 text-gray-900 dark:text-gray-100 ">    
    <div
      ref={ref}
      className="Container max-w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch p-4 md:p-20 "
    >
       <Toaster />
      <div
        className="textContainer flex-1 flex flex-col gap-8 md:gap-10 p-4 md:p-16"
        
      >
        <h1 className="text-3xl md:text-7xl font-semibold text-center md:text-left " >
          Let's work together
        </h1>
        <div className="item" >
          <h2 className="font-semibold">Mail</h2>
          <span className="font-light break-all">kamleshkumwt12th@gmail.com</span>
        </div>
        <div className="item" >
          <h2 className="font-semibold">Address</h2>
          <span className="font-light">Udaipur, Rajasthan, India</span>
        </div>
        <div className="item" >
          <h2 className="font-semibold">Phone</h2>
          <span className="font-light">+91 637 796 1566</span>
        </div>
      </div>
      <div className="formContainer flex-1 relative flex justify-center items-center p-4 md:p-0">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-md flex flex-col items-start justify-center gap-4 md:gap-6 h-auto md:h-96"
        >
          <input
            className="p-3 w-full bg-transparent border dark:border-white border-gray-800 dark:text-white text-gray-900 rounded-xl"
            type="text"
            placeholder="Name"
            required
            name="name"
          />
          <input
            className="p-3 w-full bg-transparent border dark:border-white border-gray-800 dark:text-white rounded-xl"
            type="email"
            placeholder="Email"
            required
            name="email"
          />
          <textarea
            placeholder="Message"
            className="p-5 w-full h-32 md:h-40 bg-transparent border dark:border-white border-gray-800 dark:text-white rounded-xl"
            rows={6}
            required
            name="message"
          />
          <button
            type="submit"
            value="send"
            disabled={loading}
            className="p-3 border-none bg-orange-400 w-full cursor-pointer font-semibold rounded-xl dark:hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] dark:shadow-[0_0_25px_hsl(var(--primary)/0.3)]"
          >
            Submit
          </button>
          {/* {error && <span className="text-red-400">Error</span>}
          {succes && <span className="text-green-400">Success</span>} */}
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;

