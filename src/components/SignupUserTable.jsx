import React from 'react'

function SignupUserTable({ columns, usersData }) {
  return (
    <div className=" min-h-screen p-8">
    <div className="text-center py-6 bg-green-700 text-white text-3xl font-bold rounded-full shadow-md shadow-green-200">
        All Users Table
    </div>
    <div className="overflow-x-auto flex justify-center mt-4">
        <table className="w-full max-w-4xl  shadow-lg  overflow-hidden">
            <thead className="bg-green-700 text-white">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="p-4 text-center font-bold text-sm uppercase border-2 border-black">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {usersData.map((user, index) => (
                    <tr
                        key={user.id}
                        className={index % 2 === 0 ? "bg-cyan-100" : "bg-gray"}>
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="p-4 text-center text-gray-700 border-2 border-black">
                                {user[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default SignupUserTable
