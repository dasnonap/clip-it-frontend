import TextInput from "../../_comp/Fields/TextInput";

function Register() {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Create account</h2>

      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col space-y-4 py-5 px-7">
          <TextInput
            id={"username"}
            showLabel={true}
            label={"Username"}
            type="text"
          />

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

          <TextInput
            id={"repeat_password"}
            showLabel={true}
            label={"Repeat Password"}
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

export default Register;
