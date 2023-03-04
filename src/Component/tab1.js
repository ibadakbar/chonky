import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const Tab1 = () => {
    const methods = useFormContext();
    const { control, formState, register } = methods;
    const { errors } = formState;

    return (
        <div>Tab1


            <Controller
                name="name"
                control={control}
                render={({ field }) => (

                    <input
                        {...field}
                        type="text"
                        placeholder='name'
                    />
                )}
            />

            <br />

            <Controller
                name="username"
                control={control}
                render={({ field }) => (

                    <input
                        type="text"
                        placeholder='username'
                    />
                )}
            />
        </div>
    )
}

export default Tab1