const ContactUS = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="font-bold text-3xl p-6 m-6"> Contact US</h2>
      <form onSubmit={handleSubmit}>
        <input className="border border-black p-2 m-2" placeholder="name" />
        <input className="border border-black p-2 m-2" placeholder="message" />
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUS;
