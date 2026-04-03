export default function MemberCard({ name, role, image }) {
  return (
    <div className="group p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  );
}