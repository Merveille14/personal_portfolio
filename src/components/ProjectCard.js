export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
      <div className="w-full p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  