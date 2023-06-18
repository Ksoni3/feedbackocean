import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import feedbackdata from "../../../constants/feedbackdata";
import FeedbackDetails from "../components/FeedbackDetails";
import SearchBar from "../components/SearchBar";

interface feedbackItemProps {
  title: string;
  details: string;
  count: number;
}

const page = () => {
  return (
    <div className="  lg:w-[70%] h-screen mx-auto flex items-center justify-center">
      <FeedbackForm />
      <div className="w-[90%] lg:w-[60%] min-h-screen mt-32  flex flex-col gap-5 lg:ml-10 mx-auto">
        <span className="flex items-center gap-3">
          <h2 className="lg:text-lg"> Showing posts in</h2>
          <select className="outline-none">
            <option> All category</option>
            <option> Sub Category</option>
            <option> No Category</option>
          </select>
          <SearchBar />
        </span>
        {feedbackdata.map((feedbackItem: feedbackItemProps) => {
          return <FeedbackDetails feedbackItem={feedbackItem} />;
        })}
      </div>
    </div>
  );
};

export default page;
