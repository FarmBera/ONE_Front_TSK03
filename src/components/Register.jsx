

export default function Register() {
    return (
        <div>
            <h1>Register Page</h1>
            <input placeholder="Email" />
            <br />
            <input placeholder="PW" />
            <br />
            <input placeholder="PWC" />
            <br />
            <input placeholder="NAME" />
            <br /> <br />
            <button onClick={onClickBtn}>Register</button>
        </div>
    )
}