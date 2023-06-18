"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  password: string;
};

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <input
        placeholder="Enter your email"
        {...register("example")}
        className="py-3 rounded-lg border block px-3 outline-blue-400"
      />

      <input
        placeholder="Enter your password"
        {...register("password", { required: true })}
        className="py-3 rounded-lg border block px-3 outline-blue-400"
      />

      {errors.password && <p>* This field is required</p>}

      <button className="border py-3 rounded-lg bg-blue-400 text-white font-semibold">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
