import React from 'react';

interface InputFieldTypes{
    label:string
    name:string
    errors:any
    type?:string
    register: (arg:any) => any
}
const InputField = (props:InputFieldTypes) => {
    const {label, name, register, errors, type} = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                className={"form-control"}
                type={type || "text"}
                id={name}
                {...register(name)} // Register the input with React Hook Form
            />
            {errors[name] && (
                <p className="text-red-600 text-xs mt-1.5">{errors[name].message}</p>
            )}
        </div>
    );
};

export default InputField;
