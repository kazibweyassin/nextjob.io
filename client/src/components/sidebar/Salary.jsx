import React from 'react';
import { Button } from './Button';
import InputField from './InputField';  

const Salary = ({ handleChange, handleClick }) => {  
    return (
        <div>
            <h4 className='text-lg font-medium mb-4'>Salary</h4>

            {/* Salary Type Buttons */}
            <div className='mb-4'>
                <Button onClickHandler={handleClick} value="hourly" title="Hourly" />
                <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
                <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
            </div>

            {/* Salary Range Filters grouped as radio buttons */}
            <div className='flex flex-col space-y-2'>
                <InputField 
                  handleChange={handleChange} 
                  value={30000}  
                  title="< 30,000"
                  name="salaryRange"  // Group the salary range options with the same name
                />
                <InputField 
                  handleChange={handleChange} 
                  value={50000}  
                  title="< 50,000"
                  name="salaryRange"  // Group the salary range options with the same name
                />
                <InputField 
                  handleChange={handleChange} 
                  value={80000}  
                  title="< 80,000"
                  name="salaryRange"  // Group the salary range options with the same name
                />
                <InputField 
                  handleChange={handleChange} 
                  value={100000}  
                  title="< 100,000"
                  name="salaryRange"  // Group the salary range options with the same name
                />
            </div>
        </div>
    );
}

export default Salary;
