import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const features = [
  { feature: 'Built for Schools', atlearn: 'Yes', kajabi: 'No (Generic)', moodle: 'Limited' },
  { feature: 'AI Automation', atlearn: 'Yes', kajabi: 'No', moodle: 'Manual' },
  { feature: 'SCORM/xAPI Support', atlearn: 'Yes', kajabi: 'Partial', moodle: 'Yes' },
  { feature: 'Parent Portal', atlearn: 'Yes', kajabi: 'No', moodle: 'Plugins Needed' },
  { feature: 'Fee Management', atlearn: 'Yes', kajabi: 'No', moodle: 'No' },
];

const renderCell = (value) => {
  const isYes = value.toLowerCase().startsWith('yes');
  return (
    <div className="flex items-center gap-2">
      {isYes ? (
        <FaCheckCircle className="text-green-600" />
      ) : (
        <FaTimesCircle className="text-red-500" />
      )}
      <span>{value}</span>
    </div>
  );
};

export default function ComparisonTable() {
  return (
    <div className='container pb-10'>
    <div className=" overflow-x-auto shadow rounded-lg ">
      {/* <table className="min-w-full border-collapse bg-white shadow rounded-lg ">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
          <tr>
            <th className="px-6 py-3 border-b">Feature</th>
            <th className="px-6 py-3 border-b">Atlearn</th>
            <th className="px-6 py-3 border-b">Kajabi/BuddyBoss</th>
            <th className="px-6 py-3 border-b">Moodle/LearnDash</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {features.map((row, idx) => (
            <tr key={idx} className="border-t ">
              <td className="px-6 py-4 font-medium">{row.feature}</td>
              <td className="px-6 py-4">{renderCell(row.atlearn)}</td>
              <td className="px-6 py-4">{renderCell(row.kajabi)}</td>
              <td className="px-6 py-4">{renderCell(row.moodle)}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="min-w-full table-fixed border-collapse bg-white shadow rounded-lg">
  <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
    <tr>
      <th className="px-6 py-3 border-b w-1/4">Feature</th>
      <th className="px-6 py-3 border-b w-1/4">Atlearn</th>
      <th className="px-6 py-3 border-b w-1/4">Kajabi/BuddyBoss</th>
      <th className="px-6 py-3 border-b w-1/4">Moodle/LearnDash</th>
    </tr>
  </thead>
  <tbody className="text-sm text-gray-800">
    {features.map((row, idx) => (
      <tr key={idx} className="border-t">
        <td className="px-6 py-4 w-1/4 font-medium">{row.feature}</td>
        <td className="px-6 py-4 w-1/4">{renderCell(row.atlearn)}</td>
        <td className="px-6 py-4 w-1/4">{renderCell(row.kajabi)}</td>
        <td className="px-6 py-4 w-1/4">{renderCell(row.moodle)}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
    </div>

  );
}
