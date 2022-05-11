import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Head from "./components/Head";
import MultiSpanData from "./components/MultiSpanData";
import MultiSpanSubData from "./components/MultiSpanSubData";
import SingleSpanData from "./components/SingleSpanData";

function App() {

  const [totalArr, setTotalArr] = useState([0,0,0,0,0,0,0,0,0]);
  const [total, setTotal] = useState(0);
  const [getVal, setGetVal] = useState(0);
  const inputTotal = useRef(0)
  const updateParentTotal = useCallback((i,val) => {
    totalArr.forEach((t,index) => {
      if(index === i) {
        totalArr[i] = val;
      }
    });
    setTotalArr(totalArr);
    setGetVal(val);
  },[totalArr]);
  
  useEffect(() => {
    let newTotal = 0;
    totalArr.forEach(t => {
      newTotal += +t;
    });
    setTotal(newTotal);
    inputTotal.current.value = newTotal;
  },[getVal, totalArr]);
  

  return <>
    <div className='flex flex-col m-8 App'>
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
                      defaultValue={"MOHAMMAD RAJAUL, SDE/Transmission Maintenance(PCM)/HARINAVI-I / HRMS-201001815 FOR THE PERIOD FROM 01.04.2021 TO 31.03.2022"}
                    />
                  </th>
                </tr>
              </thead>
              <thead className='border-b'>
                <Head />
              </thead>
              <tbody>
                <SingleSpanData updateParentTotal={updateParentTotal} sn="1" dimension="Financial" kpi="Revenue from Leased Lines / Data Circuits / Landline /Broadband / Mobile from CTD for 2021-22" weightage="5%" target="100% fulfilment of revenue target of CTD" good="60%" vgood="80%" exl="100%" />
                <MultiSpanData updateParentTotal={updateParentTotal} sn="2" dimension="Operation and Maintenance" kpi="Restoration of Exchange, EB circuits i.r.o. PCM faults (no. of hrs)" weightage="15%" target="12" good="36" vgood="24" exl="12" rowSpan="5" rows="2" />
                <MultiSpanSubData  cols="36" updateParentTotal={updateParentTotal} sn="3" kpi={'Restoration of BTS - 2G, 3G & CDMA i.r.o. PCM faults (no. of hrs)'} weightage="15%" target="12" good="36" vgood="24" exl="12" rows="2" />
                <MultiSpanSubData  cols="32" updateParentTotal={updateParentTotal} sn="4" kpi='Percentage of faulty BTS attended to restore fluctuation problem, error in transmission media in a month' weightage="15%" target="100%" good="60%" vgood="80%" exl="100%" rows="3" />
                <MultiSpanSubData  cols="36" updateParentTotal={updateParentTotal} sn="5" kpi='Restoration of DSLAMs i.r.o. PCM faults (no. of hrs)' weightage="15%" target="12" good="36" vgood="24" exl="12" rows="3" />
                <MultiSpanSubData  cols="36" updateParentTotal={updateParentTotal} sn="6" kpi='Time taken for providing new media for new EB circuits, BTS, RLU, DSLAM etc. (no. of hrs)' weightage="15%" target="12" good="36" vgood="24" exl="12" rows="3" />
                <MultiSpanData updateParentTotal={updateParentTotal} sn="7" dimension="Employee development"  kpi="Timely writing and submission of self APAR for the previous  year by 30th April.(delay in days)" weightage="5%" target="0" good="30" vgood="15" exl="0" rowSpan="2" rows="3" />
                <MultiSpanSubData  cols="36" updateParentTotal={updateParentTotal} sn="8" kpi='Reporting and reviewing of APAR of all subordinate officers for previous year by 30th June.(delay in days)' weightage="5%" target="0" good="30" vgood="15" exl="0" rows="3" />
                <SingleSpanData updateParentTotal={updateParentTotal} sn="9" dimension="Customer" kpi="No. of CIC customers  he contacts in a month and satisfies them" weightage="10%" target="15" good="9" vgood="12" exl="15" />
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
                    <input ref={inputTotal} className='w-24 font-semibold text-center' type='text' name='title' id='title' defaultValue={total} readOnly/>
                  </td>
                  <td className='px-2 py-2 text-sm font-light text-gray-900 border-r whitespace-nowrap'>
                    {/* <input className='w-24 text-center' type='text' name='title' id='title'  /> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default App;
