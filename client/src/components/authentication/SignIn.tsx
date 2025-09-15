import { useForm } from "react-hook-form";
import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../zodSchemas/authenticationSchema";
import type { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { openSignUpModal } from "../../slices/signUpModalSlice";
import { closeSignInModal } from "../../slices/signInModalSlice";
import OAuth from "./OAuth";
import useData from "../../hooks/useData";

export type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { data } = useData("/auth/signin");
  console.log(data);

  const dispatch: AppDispatch = useDispatch();

  const openSignUp = () => {
    dispatch(closeSignInModal());
    dispatch(openSignUpModal());
  };

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    const userCredentials = getValues();

    axios
      .post("http://localhost:3000/auth/signin", userCredentials)
      .then((response) => {
        const { token } = response.data;

        if (token) {
          localStorage.setItem("authToken", token);

          window.location.href = "/admin";
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center py-3">
        <h4>Welcome Back!</h4>
        <h5>Login</h5>
      </div>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="form-control"
          />
        </div>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <div className="mb-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type={showPass ? "text" : "password"}
            className="form-control"
          />
        </div>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <div className="d-flex justify-content-between mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => setShowPass(!showPass)}
          />
          <a href="#" className="link-dark font-weight-bold ">
            Forgot Password?
          </a>
        </div>
        <div className="d-grid">
          <button
            className="btn btn-danger"
            type="submit"
            onSubmit={handleSignIn}
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-3">
        <OAuth />
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <p className="mb-0">
          Don't have an Account?{" "}
          <button
            type="button"
            className="btn btn-link p-0 text-dark fw-bold"
            onClick={openSignUp}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
