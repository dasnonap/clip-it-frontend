import TextInput from "../../_comp/Fields/TextInput";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Checks if the form has any errors
 * @param {Object} errors the errors object
 * @param {String} field check for specific field, if left empty will return overall
 * @returns boolean
 */
const hasFormErrors = (errors, field = '') => {
  const errorKeys = Object.keys(errors);

  if (field.length > 0) {
    return errorKeys.includes(field);
  }

  return errorKeys.length > 0;
}

function LoginSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const onSubmit = (data) => {
    console.log(data, errors);
  };

  useEffect(() => {
    if (Object.keys(errors).length < 1) {
      return;
    }

    setHasEmailError(hasFormErrors(errors, 'email'));
    setHasPasswordError(hasFormErrors(errors, 'password'));
  }, [errors, hasEmailError, hasPasswordError]);
  
  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Sign In</h2>

      {hasFormErrors(errors) ? 
        <div className="border-2 border-red space-x-4 space-y-6 rounded bg-red-400">
          There has been an error while submitting the form.
        </div>
      : ''}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4 py-5 px-7">
          <TextInput
            id={"email"}
            showLabel={true}
            label={"Email"}
            type="text"
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
          
          <div className="space-x-6">
            <p className="text-medium">
              PASSWORD REQUIREMENTS:
            </p>

            <ul className="text-small">
              <li>
                at least 6 characters long
              </li>
              
              <li>
                at least 1 number <sup>(0-9)</sup>
              </li>

              <li>
                at least 1 uppercase letter <sup>(A-Z)</sup>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-slate-300 px-4 py-2 rounded border-2 hover:border-slare-300 hover:bg-white "
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
export default observer(LoginSection);
