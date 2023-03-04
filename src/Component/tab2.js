import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';

const Tab2 = () => {
    const methods = useFormContext();
    const { control } = methods;
    return (
        <div>
            Tab2
            <Controller
                name="lname"
                control={control}
                render={({ field }) => (

                    <input
                        // {...field}
                        type="text"
                        placeholder='lname'
                        
                    />
                )}
            />

            <br />

            <Controller
                name="mname"
                control={control}
                render={({ field }) => (

                    <input
                        // {...field}
                        type="text"
                        placeholder='mname'
                    />
                )}
            />

        </div>
    )
}

export default Tab2