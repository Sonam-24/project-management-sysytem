import React from "react";

const TaskCard = ({ task }) => {
  const statusStyle = (status) => {
    if (status === "completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "in-progress") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-indigo-600">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        {task.description}
      </p>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">
            Project:
          </span>{" "}
          {task?.project?.title || "N/A"}
        </p>

        <p>
          <span className="font-semibold">
            Assigned To:
          </span>{" "}
          {task?.assignedTo?.name || "Unassigned"}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition">
          Update Task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;