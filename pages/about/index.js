import Navbar from '../../components/Navbar';
export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10 min-h-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold text-cyan-400">About Me</h1>
        <p className="mt-4">I'm Wasiq — a cybersecurity student and ethical hacker.</p>
      </div>
    </>
  );
}
export default function About() {
  return (
    <div className="p-10 min-h-screen bg-black text-white text-center">
      <h1 className="text-4xl font-bold text-cyan-400">About Me</h1>
      <p className="mt-4">I'm Wasiq — a cybersecurity student and ethical hacker, building tools in Termux.</p>
    </div>
  );
}
