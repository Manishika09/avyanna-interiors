export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917694843520"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition duration-300"
    >
      <div className="bg-white rounded-full p-2 shadow-2xl">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14"
        />

      </div>
    </a>
  );
}