import "./App.css";

function App() {
  return (
    <>
      <div className='flex flex-col m-8'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-2 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center border'>
                <thead className='border-b'>
                  <tr className='w-full border-b'>
                    <th colSpan='10' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <input className='w-full font-semibold text-center' type='text' name='title' id='title' defaultValue={"Individual Performance Management System (IPMS) for Executives in Transmission Maintenance of CTD"} />
                    </th>
                  </tr>
                </thead>
                <thead className='border-b'>
                  <tr className='w-full border-b'>
                    <th colSpan='10' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <input
                        className='w-full text-xl font-semibold text-center'
                        type='text'
                        name='title'
                        id='title'
                        defaultValue={"MOHAMMAD RAJAUL, SDE/Transmission Maintenance(PCM)/HARINAVI-I / HRMS-201001815 FOR THE PERIOD FROM 01.04.2020 TO 31.03.2021"}
                      />
                    </th>
                  </tr>
                </thead>
                <thead className='border-b'>
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
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <input className='w-24 font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Weightage"} />
                    </th>
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <input className='w-24 font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Target"} />
                    </th>
                    <th scope='col' className='w-32 py-2 text-sm font-medium text-gray-900 border-r'>
                      <textarea className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Performance Levels"} />

                      <input className='w-16 font-semibold text-center border-r' type='text' name='title' id='title' defaultValue={"Good"} />

                      <input className='w-16 font-semibold text-center border-r' type='text' name='title' id='title' defaultValue={"V.Good"} />

                      <input className='w-16 font-semibold text-center' type='text' name='title' id='title' defaultValue={"Excellent"} />
                    </th>
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Target Achieved"} />
                    </th>
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Marks Achieved"} />
                    </th>
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <textarea rows='2' cols='6' className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Weighted Score"} />
                    </th>
                    <th scope='col' className='px-2 py-2 text-sm font-medium text-gray-900 border-r'>
                      <textarea className='font-semibold text-center resize-none' type='text' name='title' id='title' defaultValue={"Remarks"} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"1"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"Financial"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Revenue from Leased Lines / Data Circuits / Landline /Broadband / Mobile from CTD for 2020-21"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"5%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea  cols={20} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"100% fulfilment of revenue target of CTD"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"60%"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"80%"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"100%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"2"} />
                    </td>
                    <td rowSpan={5} className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea rows={3} className='w-24 text-center resize-none' type='text' name='title' id='title' defaultValue={"Operation and Maintenance"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={30} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Restoration of Exchange, EB circuits i.r.o. PCM faults (no. of hrs)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"15%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"36"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"24"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"3"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={30} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Restoration of BTS - 2G, 3G & CDMA i.r.o. PCM faults (no. of hrs)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"15%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"36"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"24"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"4"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Percentage of faulty BTS attended to restore fluctuation problem, error in transmission media in a month"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"15%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"100%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"60%"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"80%"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"100%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"5"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={30} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Restoration of DSLAMs i.r.o. PCM faults (no. of hrs)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"15%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"36"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"24"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"6"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Time taken for providing new media for new EB circuits, BTS, RLU, DSLAM etc. (no. of hrs)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"15%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"36"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"24"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"12"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"7"} />
                    </td>
                    <td rowSpan={2} className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea rows={3} className='w-24 text-center resize-none' type='text' name='title' id='title' defaultValue={"Employee development"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Timely writing and submission of self APAR for the previous  year by 30th April.(delay in days)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"5%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"30"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"15"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"8"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"Reporting and reviewing of APAR of all subordinate officers for previous year by 30th June.(delay in days)"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"5%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"30"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"15"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r whitespace-nowrap'>
                    <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={"9"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"Customer"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <textarea cols={50} rows={3} className='text-center resize-none' type='text' name='title' id='title' defaultValue={"No. of CIC customers  he contacts in a month and satisfies them"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"10%"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input  className='w-16 text-center resize-none' type='text' name='title' id='title' defaultValue={"15"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"9"} />
                      <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={"12"} />
                      <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={"15"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-2 py-2'>
                    
                    </td>
                    <td className='px-2 py-2'>
                      
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-16 font-semibold text-center' type='text' name='title' id='title' defaultValue={"Total"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 font-semibold text-center' type='text' name='title' id='title' defaultValue={"100%"} />
                    </td>
                    <td className='px-2 py-2'>
                      
                    </td>
                    <td className='px-2 py-2'>
                      
                    </td>
                    <td className='px-2 py-2'>
                      
                    </td>
                    <td className='px-2 py-2'>
                      
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 font-semibold text-center' type='text' name='title' id='title' defaultValue={"0"} />
                    </td>
                    <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                      <input className='w-24 text-center' type='text' name='title' id='title'  />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
