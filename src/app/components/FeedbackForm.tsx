"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillImageFill } from "react-icons/bs";

type FeedbackInputs = {
  category: string;
  title: string;
  details: string;
};

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackInputs>();

  const onSubmit: SubmitHandler<FeedbackInputs> = (data) => console.log(data);

  return (
    <div className="hidden w-2/5 h-[80vh] bg-slate-100 py-10 rounded-md text-center lg:flex flex-col gap-4">
      <div>
        <h1 className="font-semibold tracking-wider mb-4">Share your idea</h1>
        <h2>
          Send us your best ideas, we <br />
          want to hear them!
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mx-auto"
      >
        <div>
          <label className="text-start block mb-1">CATEGORY</label>
          <div className="w-full bg-white rounded-lg border">
            <select
              {...register("category")}
              className="w-[90%] py-3 block px-4 outline-none"
            >
              <option value="FeedbackOcean General">
                FeedbackOcean General
              </option>
              <option value="FeedbackOcean General">
                FeedbackOcean General
              </option>
              <option value="FeedbackOcean General">
                FeedbackOcean General
              </option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-start block mb-1">TITLE</label>
          <input
            {...register("title")}
            placeholder="What's this idea called?"
            className="py-3 rounded-lg border block px-3 outline-blue-400"
          />
        </div>
        <div>
          <label className="text-start block mb-1">DETAILS</label>
          <textarea
            {...register("details")}
            placeholder="Please share details about your idea"
            className="w-full py-3 rounded-lg border block px-3 outline-blue-400"
          />
        </div>
        <div className="flex justify-between h-12">
          <div className="p-4 border-2 rounded-md flex items-center">
            <BsFillImageFill className="text-3xl text-facebook">
              {" "}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </BsFillImageFill>
          </div>
          <button className="border bg-facebook px-6 rounded-lg text-white">
            Submit
          </button>
        </div>
      </form>
      <p className="text-neutral-500 mt-4">Terms of Service</p>
    </div>
  );
};

export default FeedbackForm;
