import React from 'react'

const FormStepOne = () => {
    return (
        <div>
            <form>
                <h1 className='font-bold text-xl'>Hero Section</h1>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="label-text">Hero Title</span>
                    </label>
                    <div className="relative w-full">
                        <input
                            type='text'
                            maxLength={60}
                            placeholder="Add a site title"
                            className={`input input-bordered w-full`}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="">
                        </label>
                        <label className="">
                            <span className="label-text-alt hover:underline cursor-pointer">
                                max 60 characters
                            </span>
                        </label>
                    </div>
                </div>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="label-text">Hero Content</span>
                    </label>
                    <div className="relative w-full">
                        <input
                            type='text'
                            placeholder="Website hero content"
                            className={`input input-bordered w-full`}
                            maxLength={255}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="">
                        </label>
                        <label className="">
                            <span className="label-text-alt hover:underline cursor-pointer">
                                max 255 characters
                            </span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormStepOne