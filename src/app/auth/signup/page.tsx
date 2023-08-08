"use client"

import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import validationSchema from "@/utils/validationSchema";
import InputField from "@/components/ui/InputField";
import {useDispatch} from "react-redux";
import useAuth from "@/store/useAuth";
import authSlice from "@/store/auth.slice";
import {useRouter} from "next/navigation";
import {signupTypes} from "../../../../@types/auth";

const Page = () => {
    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(validationSchema)
    })
    const router = useRouter()
    const dispatch = useDispatch()
    const {signup, signing, error} = useAuth()

    const registerAccount = async (data:signupTypes) => {
        const response = await signup(data)
        if (response.ok) {
            dispatch(authSlice.actions.signupSuccess(response))
            router.push('/')
        } else {
            dispatch(authSlice.actions.signupFail(response))
        }
    }

    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
                        <div className="grid gap-8 p-6 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-mons">
                                Register a new account
                            </h1>

                            {signing &&
                                <div className="bg-blue-200 p-4">
                                   signing you in ...
                                </div>
                            }

                            {error && (
                                <div className="py-4 px-3 bg-red-100 text-red-500 font-mons font-medium text-sm">
                                    {error}
                                </div>
                            )}

                            <form className="grid gap-8 p-6" onSubmit={handleSubmit(registerAccount)}>
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
                                {/* Sign In Btn */}
                                <div className="flex gap-8">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                    <Link href="/" className="btn btn-primary">Cancel</Link>
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
