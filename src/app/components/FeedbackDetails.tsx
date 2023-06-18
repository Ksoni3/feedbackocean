import React from "react";
import FeedbackCount from "./FeedbackCount";

interface feedbackItemProps {
  title: string;
  details: string;
  count: number;
}

const FeedbackDetails = ({
  feedbackItem,
}: {
  feedbackItem: feedbackItemProps;
}) => {
  const { title, details, count } = feedbackItem;
  return (
    <div className="flex gap-4 items-center ">
      <FeedbackCount count={count} />
      <div>
        <h1 className="font-bold hover:text-blue-500">{title}</h1>
        <p className="mt-2 text-gray-500">{details}</p>
      </div>
    </div>
  );
};

export default FeedbackDetails;
