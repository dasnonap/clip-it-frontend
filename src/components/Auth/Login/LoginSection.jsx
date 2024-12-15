import TextInput from "../../_comp/Fields/TextInput";

function LoginSection() {
  const handleOnSubmit = (event) => {
    console.log(event);
  };
  return (
    <div className="container max-w-sm bg-white text-black py-4">
      <h2 className="text-center">Sign In</h2>

      <form onSubmit={handleOnSubmit}>
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

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginSection;
