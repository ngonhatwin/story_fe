
const Card = ({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        {children}
      </div>
    );
  };
  export default Card;
  