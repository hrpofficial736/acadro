import React from "react";

const Students = () => {
  return (
    <section className="w-full">
      <table className="w-[90%] overflow-hidden mt-10">
        <thead className="w-full text-xs text-secondaryText/90">
          <tr>
            <th scope="col" className="px-6 py-4 text-start">
              Students
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Session
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Tests
            </th>

            <th scope="col" className="px-6 py-4 text-center">
              Assignments
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Avg Marks
            </th>
          </tr>
        </thead>

        <tbody className="uppercase text-primaryText/80 font-semibold text-sm">
          <tr className="cursor-pointer hover:bg-surface transition-colors duration-200 group">
            <td className="px-6 py-4 text-start rounded-xl group-hover:text-primary group-hover:underline transition-all duration-200">
              Harshit Raj Pandey
            </td>
            <td className="px-6 py-4 text-center">50</td>
            <td className="px-6 py-4 text-center">7</td>
            <td className="px-6 py-4 text-center">10</td>
            <td className="px-6 py-4 text-center rounded-xl">90</td>
          </tr>

          <tr className="cursor-pointer hover:bg-surface transition-colors duration-200 group">
            <td className="px-6 py-4 text-start rounded-xl group-hover:text-primary group-hover:underline transition-all duration-200">
              Harshit Raj Pandey
            </td>
            <td className="px-6 py-4 text-center">50</td>
            <td className="px-6 py-4 text-center">7</td>
            <td className="px-6 py-4 text-center">10</td>
            <td className="px-6 py-4 text-center rounded-xl">90</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Students;
