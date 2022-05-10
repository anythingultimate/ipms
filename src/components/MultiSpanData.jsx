import React, { useEffect, useRef, useState } from "react";

function MultiSpanData({updateParentTotal ,sn, dimension, kpi, weightage, target, good, vgood, exl, rowSpan, rows}) {

  const [targetAchieved, setTargetAchieved] = useState('0')
  const [targetLower, setTargetLower] = useState('0')
  const [targetUpper, setTargetUpper] = useState('0')
  const [scoreLower, setScoreLower] = useState('0')
  const [score, setScore] = useState('0')
  const [weightedScore, setWeightedScore] = useState(0);
  const inputScore = useRef(0)
  const inputWeightedScore = useRef(0)

  const getTargetAchieved = (e) => {
    e.preventDefault()
    setTargetAchieved(e.target.value);
  }

  useEffect(() => {
    let newGood;
    let newVgood;
    let newExl;
    let newWeightage = +weightage.replace("%", "");
    if (good.includes("%")) {
      newGood = +good.replace("%", "");
    } else {
      newGood = +good;
    }
    if (vgood.includes("%")) {
      newVgood = +vgood.replace("%", "");
    } else {
      newVgood = +vgood;
    }
    if (exl.includes("%")) {
      newExl = +exl.replace("%", "");
    } else {
      newExl = +exl;
    }
    if(newExl > newGood) {
      if (+targetAchieved >= newGood && +targetAchieved <= newExl) {
        if (+targetAchieved < newExl && +targetAchieved > newVgood) {
          setTargetLower(newVgood);
        } else if (+targetAchieved < newVgood && +targetAchieved > newGood) {
          setTargetLower(newGood);
        } else if (+targetAchieved < newGood) {
          setTargetLower(newGood);
        }

        if (+targetAchieved < newExl && +targetAchieved > newVgood) {
          setTargetUpper(newExl);
        } else if (+targetAchieved < newVgood && +targetAchieved > newGood) {
          setTargetUpper(newVgood);
        } else if (+targetAchieved < newGood) {
          setTargetUpper(newVgood);
        }

        if (+targetAchieved < newExl && +targetAchieved > newVgood) {
          setScoreLower(80);
        } else if (+targetAchieved < newVgood && +targetAchieved > newGood) {
          setScoreLower(60);
        }

        if (+targetAchieved === newExl || +targetAchieved === newVgood || +targetAchieved === newGood) {
          +targetAchieved === newExl? setScore(100): +targetAchieved === newVgood ? setScore(80): setScore(60);
        } else {
          let rhsd = (20 * (+targetAchieved - +targetLower)) / (+targetUpper - +targetLower);
          let getScore = (+scoreLower + rhsd).toFixed(2);
          setScore(getScore);
        }
        inputScore.current.value = score;
        if(score && score>0){
          inputWeightedScore.current.value = (+score*(newWeightage/100)).toFixed(2); 
          setWeightedScore((+score*(newWeightage/100)).toFixed(2));
        }
      } else {
        setScore(0);
        inputScore.current.value = score;
        if(score && score>0){
          inputWeightedScore.current.value = (+score*(newWeightage/100)).toFixed(2); 
          setWeightedScore((+score*(newWeightage/100)).toFixed(2));
        }
      }
    } else {
      if (+targetAchieved <= newGood && +targetAchieved >= newExl) {
        if (+targetAchieved < newVgood && +targetAchieved > newExl) {
          setTargetLower(newVgood);
        } else if (+targetAchieved < newGood && +targetAchieved > newVgood) {
          setTargetLower(newGood);
        }

        if (+targetAchieved > newExl && +targetAchieved < newVgood) {
          setTargetUpper(newExl);
        } else if (+targetAchieved > newVgood && +targetAchieved < newGood) {
          setTargetUpper(newVgood);
        } 

        if (+targetAchieved > newExl && +targetAchieved < newVgood) {
          setScoreLower(80);
        } else if (+targetAchieved > newVgood && +targetAchieved < newGood) {
          setScoreLower(60);
        }
        if (+targetAchieved === newExl || +targetAchieved === newVgood || +targetAchieved === newGood) {
          +targetAchieved === newExl? setScore(100): +targetAchieved === newVgood ? setScore(80): setScore(60);
        } else {
          let rhsd = (20 * (+targetAchieved - +targetLower)) / (+targetUpper - +targetLower);
          let getScore = (+scoreLower + rhsd).toFixed(2);
          setScore(getScore);
        }
        inputScore.current.value = score;
        if(score && score>0){
          inputWeightedScore.current.value = (+score*(newWeightage/100)).toFixed(2); 
          setWeightedScore((+score*(newWeightage/100)).toFixed(2));
        }
      } else {
        setScore(0);
        inputScore.current.value = score;
        if(score && score>0){
          inputWeightedScore.current.value = (+score*(newWeightage/100)).toFixed(2); 
          setWeightedScore((+score*(newWeightage/100)).toFixed(2));
        }
      }
    }
  }, [exl, good, score, scoreLower, targetAchieved, targetLower, targetUpper, vgood, weightage]);

  useEffect(() => {
    updateParentTotal((sn-1),weightedScore);
  }, [sn, updateParentTotal, targetAchieved, inputWeightedScore, weightedScore]);

  return (
    <tr className='border-b'>
      <td className='px-2 py-2 text-sm font-medium text-gray-900 border-r '>
        <input className='w-10 text-center' type='text' name='title' id='title' defaultValue={sn} />
      </td>
      <td rowSpan={rowSpan} className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <textarea rows={2} className='w-24 text-center resize-none' type='text' name='title' id='title' defaultValue={dimension} />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <textarea cols={30} rows={rows} className='text-center resize-none' type='text' name='title' id='title' defaultValue={kpi} />
      </td>
      <td className='py-2 text-sm font-light text-gray-900 border-r '>
        <input className='w-20 text-center' type='text' name='title' id='title' defaultValue={weightage} />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <input className='w-12 text-center resize-none' type='text' name='title' id='title' defaultValue={target} />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={good} />
        <input className='w-16 text-center border-r' type='text' name='title' id='title' defaultValue={vgood} />
        <input className='w-16 text-center' type='text' name='title' id='title' defaultValue={exl} />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <input onChange={getTargetAchieved} className='w-16 text-center' type='text' name='title' id='title' defaultValue={targetAchieved} />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <input ref={inputScore} className='w-16 text-center' type='text' name='title' id='title' defaultValue={"0"} readOnly />
      </td>
      <td className='px-2 py-2 text-sm font-light text-gray-900 border-r '>
        <input ref={inputWeightedScore} className='w-16 text-center weighted' type='text' name='title' id='title' defaultValue={"0"} readOnly />
      </td>
      <td className='px-2 py-2 text-xs font-light text-gray-900 border-r'>
        <textarea  cols="10" className='text-center resize-none hover:resize-y' type='text' name='title' id='title' />
      </td>
    </tr>
  );
}

export default MultiSpanData;