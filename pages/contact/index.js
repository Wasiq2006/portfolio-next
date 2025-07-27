import Navbar from '../../components/Navbar';
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-10 min-h-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold text-pink-400">Contact</h1>
        <p className="mt-4">
          Reach me on <a href="https://github.com/Wasiq2006" className="underline text-blue-300">GitHub</a>.
        </p>
      </div>
    </>
  );
}
export default function Contact() {
  return (
    <div className="p-10 min-h-screen bg-black text-white text-center">
      <h1 className="text-4xl font-bold text-pink-400">Contact Me</h1>
      <p className="mt-4">
        Reach me at <a href="https://github.com/Wasiq2006" className="underline text-blue-300">GitHub</a>
      </p>
    </div>
  );
}
