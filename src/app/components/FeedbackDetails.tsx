import React from "react";
import FeedbackCount from "./FeedbackCount";
import { BiCaretUp } from "react-icons/bi";

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
      <div className="px-2 py-1 border flex flex-col items-center w-20 h-14 rounded-md">
        <BiCaretUp />
        <h2> {count} </h2>
      </div>
      <div>
        <h1 className="font-bold hover:text-blue-500">{title}</h1>
        <p className="mt-2 text-gray-500">{details}</p>
      </div>
    </div>
  );
};

export default FeedbackDetails;
