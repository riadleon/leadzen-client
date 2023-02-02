import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Information = () => {
    const detailedData = useLoaderData();
    console.log(detailedData);
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 h-screen">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Detailed View</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">{detailedData.name}</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Contact Person</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.name}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.address.suite}, {detailedData.address.street}, {detailedData.address.city} {detailedData.address.zipcode}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Username</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.username}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">City</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.address.city}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Emails</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.email}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">State</h3>
                        <p className="mt-1 dark:text-gray-400">No data</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phones</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.phone}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Country</h3>
                        <p className="mt-1 dark:text-gray-400">{detailedData.address.geo.lat} to {detailedData.address.geo.lng}</p>
                    </div>
                </div>
                <div className='flex items-end justify-end'>

                    <Link to='/'>
                        <button className='px-8 py-3 font-semibold rounded-full text-white hover:text-black bg-red-500'>
                            Close detailed View
                        </button>

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Information;