import React from "react";
import { deleteActivity } from "../api/activities";

export default function ActivityList({ activities, setActivities }) {

  const token = localStorage.getItem("token");

  const handleDelete = async(activityId) => {
    if (!token) {
      alert("You must be logged in to delete an activity.");
    return;
    }
    try {
      await deleteActivity(token, activityId);
      setActivities((prev) => prev.filter((activity) => activity.id !== activityId));

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul>
      {activities.map((activity) => (
        <li 
        key={activity.id}>
          {activity.name}
          {token && (
            <button onClick={() => handleDelete(activity.id)}>Delete</button>
          )}
          </li>
      ))}
    </ul>
  );
}

