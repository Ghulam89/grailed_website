const CategoryCard = ({ url, image, name }) => {
  return (
    <a
      // href={url}
      className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-44 h-44   flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className=" object-cover"
        />
      </div>
      <p className="mt-5 text-sm font-medium text-gray-700">{name}</p>
    </a>
  );
};

export default CategoryCard;
