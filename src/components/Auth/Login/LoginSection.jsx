import TextInput from "../../_comp/Fields/TextInput";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { hasFormErrors, parseErrorResponse } from "../../../helpers/utils";
import MainErrorNotice from "../_comp/MainErrorNotice";
import PasswordRequirements from "../_comp/PasswordRequirements";
import authStore from "../../../stores/authStore";
import { useNavigate } from "react-router-dom";

function LoginSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle Form submission
  const onSubmit = (data) => {
    authStore.login(data)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        setSubmitError(parseErrorResponse(error));
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length < 1) {
      return;
    }

    setHasEmailError(hasFormErrors(errors, "email"));
    setHasPasswordError(hasFormErrors(errors, "password"));
  }, [errors, hasEmailError, hasPasswordError]);

  const onSubmitClick = () => {
    setHasEmailError(false);
    setHasPasswordError(false);
  };

  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Sign In</h2>

      <MainErrorNotice errors={errors} />

      {submitError ? (
        <div className="border-2 border-red space-x-4 space-y-6 rounded bg-red-400">
          {submitError}
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4 py-5 px-7">
          <TextInput
            id={"email"}
            showLabel={true}
            label={"Email"}
            type="text"
            register={register}
            validation={{
              required: true,
              minLength: 1,
              pattern: /(.?)+@[a-z]+\.[a-z]+/,
            }}
            hasError={hasEmailError}
          />

          <TextInput
            id={"password"}
            showLabel={true}
            label={"Password"}
            type="password"
            register={register}
            validation={{
              required: true,
              minLength: 1,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            }}
            hasError={hasPasswordError}
          />

          <PasswordRequirements />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-slate-300 px-4 py-2 rounded border-2 hover:border-slare-300 hover:bg-white "
            onClick={onSubmitClick}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
export default observer(LoginSection);
