import React from "react";

function Head() {
  return (
    <tr>
      <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
        <input className='w-10 font-semibold text-center' type='text' name='title' id='title' defaultValue={"Sl NO"} />
      </th>
      <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
        <input className='w-24 font-semibold text-center' type='text' name='title' id='title' defaultValue={"Dimension"} />
      </th>
      <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r '>
        <input className='font-semibold text-center' type='text' name='title' id='title' defaultValue={"KPI"} />
      </th>
      <th scope='col' className='py-2 text-sm font-medium text-gray-900 border-r '>
        <input className='w-20 font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Weightage"} />
      </th>
      <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
        <input className='w-24 font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Target"} />
      </th>
      <th scope='col' className='w-32 py-2 text-sm font-medium text-gray-900 border-r'>
        <textarea className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Performance Levels"} />

        <input className='w-16 font-semibold text-center border-r' type='text' name='title' id='title' defaultValue={"Good"} />

        <input className='w-16 font-semibold text-center border-r' type='text' name='title' id='title' defaultValue={"V.Good"} />

        <input className='w-16 pl-1 font-semibold text-center' type='text' name='title' id='title' defaultValue={"Excellent"} />
      </th>
      <th scope='col' className='py-2 text-sm font-medium text-gray-900 border-r'>
        <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Target Achieved"} />
      </th>
      <th scope='col' className='py-2 text-sm font-medium text-gray-900 border-r'>
        <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Marks Achieved"} />
      </th>
      <th scope='col' className='py-2 text-sm font-medium text-gray-900 border-r'>
        <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Weighted Score"} />
      </th>
      <th scope='col' className='py-2 text-sm font-medium text-gray-900 border-r'>
        <textarea cols="10" className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Remarks"} />
      </th>
    </tr>
  );
}

export default Head;
