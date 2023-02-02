import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, getUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users/';

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.get(url)
            .then((response) => {
                const allUsers = response.data;
                console.log(allUsers);
                getUsers(allUsers);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Contact
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        City
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        State
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    users.map((user) => <tr
                                        key={user.id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.company.name} </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.name} </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.address.city} </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.address.street} </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">

                                            <Link to={`/details/${user.id}`}>
                                                <button className="px-8 py-3 font-semibold rounded-full text-white hover:text-black bg-red-500">
                                                    View Details
                                                </button>
                                            </Link>


                                        </td>

                                    </tr>
                                    )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;