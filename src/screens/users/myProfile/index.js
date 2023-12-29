import React from 'react'
import Input from '../../../components/Input'
import Option from '../../../components/Option'

const MyProfile = () => {

  const options = ["New/Never  Worn", "Gently Used", "Used", "Very Worn"];

  const handleSelect = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
    // You can perform any other actions with the selected options
  };
  return (
    <div className=' w-[70%]'>
        <h1 className=' h2'>My Account</h1>
        <div className=' pt-10'>
            <h4  className='h3'>Edit Profile</h4>

                <div className=' flex gap-4 w-full'>
                <div className=' w-[50%]'>
                <Input  placeholder={'Gmail'} label={'Username'} className={'border  w-full'} />
                </div>
                <div className=' w-[50%]'>
                <Input  placeholder={'Gmail'} label={'Username'} className={'border  w-full'} />
                </div>
              
                </div>
                <div className=' pt-2 w-[50%]'>
                  <label className=' text-sm font-medium'>Location</label>
                <Option  options={options} onSelect={handleSelect}     />
                </div>
                <div className=' pt-2 '>
                  <label className=' text-sm font-medium'>Bio</label>
                <textarea  rows={7} className=' w-full border'  />
                </div>

        </div>
    </div>
  )
}

export default MyProfile