import { useState } from "react";

export function useInput(init) {
    const [value, setInputValue] = useState(init)
    const onChange = (e) => {
        setInputValue(() => e.target.value)
    }
    return {value, setInputValue, onChange}   
};

/* export function useNull(arr) {
    // 데이터를 받는데, 하나라도 Null 값이 있으면 false 반환
    for(const item of arr){
        if(!item) return false

    } return true
} */

/* const onClickBtn = () => {
    if (useNull([id, pw, pwc, names])) return alert("ERR, Null")
  } */