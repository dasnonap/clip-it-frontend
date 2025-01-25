import { useForm } from "react-hook-form";
import TextInput from "../../_comp/Fields/TextInput";
import { hasFormErrors } from "../../../helpers/utils";
import MainErrorNotice from "../_comp/MainErrorNotice";
import { useState, useEffect, useRef } from "react";
import PasswordRequirements from "../_comp/PasswordRequirements";

function Register() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  }= useForm();
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [hasRepeatPasswordError, setHasRepeatPasswordError] = useState(false);
  
  const password = useRef({});
  password.current = watch("password", "");
  password.repeat = watch("repeat_password", "");
  
  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // When errors are updated check the fields and set error state
  useEffect(() => {
    if (Object.keys(errors).length < 1) {
      return;
    }

    setHasUsernameError(hasFormErrors(errors, 'username'));
    setHasEmailError(hasFormErrors(errors, 'email'));
    setHasPasswordError(hasFormErrors(errors, 'password'));
    setHasRepeatPasswordError(hasFormErrors(errors, 'repeat_password'));   
    console.log(errors, password); 
  }, [errors, hasUsernameError, hasEmailError, hasPasswordError, hasRepeatPasswordError]);

  // Reset the field states
  const onSubmitClick = () => {
    setHasUsernameError(false);
    setHasEmailError(false);
    setHasPasswordError(false);
    setHasRepeatPasswordError(false);
  }

  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Create account</h2>
      
      <MainErrorNotice hasErrors={hasFormErrors(errors)}/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4 py-5 px-7">
          <TextInput
            id={"username"}
            showLabel={true}
            label={"Username"}
            type="text"
            register={register}
            validation={
              {
                required: true
              }
            }
            hasError={hasUsernameError}
          />

          <TextInput
            id={"email"}
            showLabel={true}
            label={"Email"}
            type="email"
            register={register}
            validation={
              {
                required: true,
                minLength: 1,
                pattern: /(.?)+@[a-z]+\.[a-z]+/
              }
            }
            hasError={hasEmailError}
          />

          <TextInput
            id={"password"}
            showLabel={true}
            label={"Password"}
            type="password"
            register={register}
            validation={
              {
                required: true,
                minLength: 1,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
              }
            }
            hasError={hasPasswordError}
          />

          <TextInput
            id={"repeat_password"}
            showLabel={true}
            label={"Repeat Password"}
            type="password"
            register={register}
            validation={
              {
                required: true,
                minLength: 1,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                validate: value => value == password.current || "The passwords do not match"
                
              }
            }
            hasError={hasRepeatPasswordError}
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

export default Register;
