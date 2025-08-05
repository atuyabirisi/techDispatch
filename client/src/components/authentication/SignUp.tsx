import { useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signUpSchema } from "../../zodSchemas/authenticationSchema";
import type { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { closeSignUpModal } from "../../slices/signUpModalSlice";
import { openSignInModal } from "../../slices/signInModalSlice";

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const dispatch: AppDispatch = useDispatch();

  const handleBackToLogin = () => {
    dispatch(closeSignUpModal());
    dispatch(openSignInModal());
  };

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const user = getValues();

    axios
      .post("http://localhost:3000/auth/signup", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center py-2">
        <h4>Join space techDispatch</h4>
        <h5> ...& lets write</h5>
      </div>
      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="mt-2 mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
          />
        </div>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <div>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="confirmPassword"
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          onChange={() => setShowPassword(!showPassword)}
        />
        <div className="d-grid mt-3 mb-3">
          <button className="btn btn-danger" type="submit">
            SignUp
          </button>
        </div>
      </form>
      <div className="mt-3 d-flex justify-content-center">
        <p className="mb-0">
          Already have an account?{" "}
          <button
            type="button"
            className="btn btn-link p-0 text-dark fw-bold"
            onClick={handleBackToLogin}
          >
            Login
          </button>
        </p>
      </div>
    </>
  );
}
