"use client"

import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/app/auth/signup/validationSchema";
import InputField from "@/components/ui/InputField";
import useAuth from "@/store/useAuth";
import {useRouter} from "next/navigation";

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(validationSchema)
    })

    const {login, successMessage, error} = useAuth()
    const router = useRouter();

    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
                        <div className="p-6 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-mons">
                                Sign in to your account
                            </h1>
                            { error && (
                                <div className="py-4 px-3 bg-red-100 text-red-500 font-mons font-medium text-sm">
                                    Credentials do not match. Please try again.
                                </div>
                            )}
                            <form className={"grid gap-8"} onSubmit={handleSubmit((data) => login(data, router))}>
                                <InputField
                                    label="Username"
                                    name={"username"}
                                    register={register}
                                    errors={errors}
                                />
                                {/* Password */}
                                <InputField
                                    label="Password"
                                    name={"password"}
                                    type={"password"}
                                    register={register}
                                    errors={errors}
                                />
                                <div className="grid gap-6">
                                    {/* Remember me And Forgot Password */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            />
                                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot
                                            password?</a>
                                    </div>
                                    {/* Sign In Btn */}
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                    {/* Forgot Password */}
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet ? <Link href="/auth/signup"
                                                                          className="pl-1 font-medium text-primary-600 hover:underline">Sign
                                        up</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
