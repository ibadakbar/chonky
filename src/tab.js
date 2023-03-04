import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab1 from './Component/tab1';
import Tab2 from './Component/tab2';
import Tab3 from './Component/tab3';
import { FormProvider, useForm } from 'react-hook-form';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {},
        // resolver: yupResolver(schema),
    });
    const { reset, watch, control, onChange, getValues, formState: { isValid, dirtyField } } = methods;
    const form = watch();



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);
    return (

        <FormProvider {...methods}>

            <button type='submit' onClick={() => console.log(getValues())}>press</button>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                classes={{ root: 'w-full h-64 border-b-1' }}
            >
                <Tab className="h-64" label="Order Details" />
                <Tab className="h-64" label="Products" />
                <Tab className="h-64" label="Invoice" />
            </Tabs>
            {/* {order && ( */}


            <div className="p-16 sm:p-24 max-w-3xl">
                <div className={value !== 0 ? 'd-none' : ''}>
                    <Tab1 />
                </div>

                <div className={value !== 1 ? 'd-none' : ''}>
                    <Tab2 />
                </div>

                <div className={value !== 2 ? 'd-none' : ''}>
                    <Tab3 />
                </div>

            </div>



        </FormProvider>




    );
}