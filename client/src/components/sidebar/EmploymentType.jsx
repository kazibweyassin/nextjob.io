import React from 'react'
import InputField from './InputField'


export const EmploymentType = ({ handleChange }) => {
    return (
        <div>
            <div>
                <h4 className='text-lg font-medium mb-2'>Work Experience </h4>
                <div className='flex flex-col'>
                    {/* 'All' option */}
                    <label className='sidebar-label-container'>
                        <input
                            type="radio"
                            name='test'
                            id='test'
                            value=""
                            onChange={handleChange}  // Ensure this is passed as a function
                        />
                        <span className='checkmark'></span> Any Experience
                    </label>

                    {/* Specific locations */}
                    <InputField
                        handleChange={handleChange}
                        value="full-time "
                        title="Full-time"
                        name="test"  // Ensure all radios are grouped by "location"
                    />
                    <InputField
                        handleChange={handleChange}
                        value="temporary"
                        title="Temporary"
                        name="test"
                    />
                    <InputField
                        handleChange={handleChange}
                        value="part-time"
                        title="Part-time"
                        name="test"
                    />
                </div>
            </div>
        </div>

    )
}
