import Navbar from '../../components/Navbar';
export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="p-10 min-h-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold text-blue-400">Projects</h1>
        <p className="mt-4">Some Termux tools and GitHub repos I've made.</p>
      </div>
    </>
  );
}
export default function Projects() {
  return (
    <div className="p-10 min-h-screen bg-black text-white text-center">
      <h1 className="text-4xl font-bold text-blue-400">My Projects</h1>
      <p className="mt-4">Check out my GitHub and Termux tools.</p>
    </div>
  );
}
