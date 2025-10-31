export const Bio_card = ({ blok }: any) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{blok.bio_name}</h3>
      <p className="text-gray-600">{blok.bio_text}</p>
    </div>
  );
};