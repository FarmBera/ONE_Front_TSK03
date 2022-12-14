import { useState } from "react"
import { useInput, useCheck, useNull } from '../util/commonse'
//import { useInput } from '../util/common'

export default function Register() {

    const email = useInput('')
    const pw = useInput('')
    const pwc = useInput('')
    const name = useInput('')
    // const emailValidTest = /[a-zA-Z0-9]+@+[a-zA-Z].com.test("문자열")/
    const emailValidTest = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-_]+\.[a-zA-Z0-9._-]+/
    //const age = useInput(0)



    /* const [email, setEmail] = useInput('')
    const [pw, setPw] = useInput('')
    const [pwc, setPwc] = useInput('')
    const [name, setName] = useInput('') */

    const onCheck = () => {
        if (!useNull([email, pw, pwc, name])) return alert('Null ERROR')
        if (!useCheck(pw, pwc)) return alert('PW, PWC Not Same')
        return alert('Success!!')
    }

    function validCheck() {
        //빈 값 아닌지 체크
        if (email.value && pw.value && pwc.value && name.value) {
          //비번 확인. 같은지 체크
          if (pw.value != pwc.value) {
            window.alert('ERR! PW & PWC NOT SAME')
          } else if (emailValidTest.test(email.value) == false) {
            //이메일 체크. 상단 emailValidTest 변수, 정규식으로 체크
            window.alert('ERR! Cannot Found @')
          } else {
            window.alert('Register Complete; TRUE')
          }
        } else if (!email.value || !pw.value || !pwc.value || !name.value) {
          window.alert('ERR! Null Value Detected!')
        }
      }
    
    return (
        <div>
            <h1>Register Page</h1>
            <input placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input placeholder="PW"
            onChange={(e) => setPw(e.target.value)}/>
            <br />
            <input placeholder="PWC"
            onChange={(e) => setPwc(e.target.value)} />
            <br />
            <input placeholder="NAME"
            onChange={(e) => setName(e.target.value)} />
            <br /> <br />
            <button onClick={validCheck}>Register</button>
        </div>
    )
}