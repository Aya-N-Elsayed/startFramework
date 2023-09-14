import React from "react";
import { Headers } from "../Headers";
import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className="container py-5">
      <Headers title="CONTACT SECTION" color="#2c3e50" />
      <form className={style.form}>
        <div className="mb-5">
          <input
            type="text"
            className={style.formControl}
            id="username"
            placeholder="User name"
          />

          <label htmlFor="username" className="form-label text-capitalize">
            User name:
          </label>
        </div>

        <div className="mb-5">

          <input
            type="number"
            className={style.formControl}
            id="userage"
            placeholder="User Age"
          />
                    <label htmlFor="userage" className="form-label text-capitalize">
            User Age:
          </label>
        </div>

        <div className="mb-5">
          <input
            type="email"
            className={style.formControl}
            id="useremail"
            placeholder="User Email"
          />
          <label htmlFor="useremail" className="form-label text-capitalize">
            User Email:
          </label>
        </div>

        <div className="mb-5">
          <input
            type="password"
            className={style.formControl}
            id="userpassword"
            placeholder="User Password"
          />
          <label htmlFor="userpassword" className="form-label text-capitalize">
            User Password:
          </label>
        </div>

        <button type="submit" className="btn bg-main text-white mt-4">
          Send message
        </button>
      </form>
    </div>
  );
};
