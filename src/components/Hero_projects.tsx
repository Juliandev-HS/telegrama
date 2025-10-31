export const Hero_projects = ({ blok }: any) => {
  return (
    <div key={blok._uid} className="p-4 border rounded-lg shadow-sm">
      {blok.project_asset?.filename && (
        <img
          src={blok.project_asset.filename}
          alt={blok.project_asset.alt || blok.project_name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{blok.project_name}</h3>
      <p className="text-gray-600">{blok.project_description}</p>
    </div>
  );
};