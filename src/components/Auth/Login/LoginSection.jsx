import TextInput from "../../_comp/Fields/TextInput";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";

function LoginSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
  };
  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Sign In</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4 py-5 px-7">
          <TextInput
            id={"email"}
            showLabel={true}
            label={"Email"}
            type="email"
          />

          <TextInput
            id={"password"}
            showLabel={true}
            label={"Password"}
            type="password"
          />
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
