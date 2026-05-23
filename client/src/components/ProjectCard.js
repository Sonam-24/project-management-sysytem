import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-indigo-600">
          {project.title}
        </h2>

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          Active
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        {project.description}
      </p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">
            Created By
          </p>

          <p className="font-semibold text-gray-700">
            {project?.createdBy?.name || "Admin"}
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;