import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-white w-[29rem] px-12 py-16 rounded-lg border shadow-sm  space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Login</h1>
      
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
          Username
        </label>
        <Input
          id="username"
          type="text"
          className="text-gray-900"
          placeholder="Username"
          {...register("username", { required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" } })}
        />
        {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
          Password
        </label>
        <Input
          id="password"
          type="password"
          className="text-gray-900 mb-6"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm

