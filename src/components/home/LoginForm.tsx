"use client";
import {FormProvider, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {useState} from "react";

type FormValues = {user: string; password: string}
export default function LoginForm() {
    const [error, setError] = useState<string>("");
    const form = useForm<FormValues>();
    const router = useRouter()

    function onSubmit(values:FormValues) {
        setError("");
        const validString = 'demo';
        if ( values.user.toLowerCase() === validString && values.password.toLowerCase() === validString) {
            router.push('dashboard')
        } else {
            setError("User or password incorrect")
        }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-3'}>
                <div>
                    <label htmlFor="user">User</label>
                    <input type={'text'} {...form.register('user')} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...form.register('password')} />
                </div>
                {error && <p className={'text-red-500'}>{error}</p>}

                <button type={'submit'} className={'bg-blue-700 text-white px-10 py-3 rounded-md mx-auto block'}>Log in</button>
            </form>
        </FormProvider>
    )
}