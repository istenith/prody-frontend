import React, { useEffect, FormEvent, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Props {
  isRegistered: boolean;
}



const FormComponent = ({ isRegistered }: Props) => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [branch, setBranch] = useState('');
  const [roll_no, setRollNo] = useState('');


  useEffect(() => {
    console.log("isRegistered:", isRegistered);
  }, [isRegistered]);

  useEffect(() => {
    console.log("username:", isRegistered);
  }, [isRegistered]);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const dataToApi = {
      username,
      email,
      password,
      branch,
      roll_no
    };
    console.log("dataToApi",dataToApi)
    const apiUrl = isRegistered
      ? "https://api-dev.prody.istenith.com/api/auth/login/"
      : "https://api-dev.prody.istenith.com/api/auth/register/";

    axios(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataToApi),
    })
      .then((response) => {
        if (isRegistered) {
          localStorage.setItem("myJwtToken", response.data.jwt);
          router.push("/me");
        } else {
          alert(`Registration successful: ${response.data.message}, Now proceed to login to see your profile.`);
        }
      })
      .catch((error) => {
        if (isRegistered) {
          alert(`Login failed: ${error.response.data.detail}`);
        } else {
          console.log(`Registration failed: ${JSON.stringify(error.response.data)}`);
          const errorResponse = error.response.data;
          let errorMessage = "Registration failed: ";

          if (errorResponse && typeof errorResponse === "object") {
            if (errorResponse.message) {
              errorMessage += errorResponse.message;
            } else {
              Object.values(errorResponse).forEach((messages) => {
                if (Array.isArray(messages)) {
                  errorMessage += messages.join("");
                }
              });
            }
          } else {
            errorMessage += JSON.stringify(errorResponse);
          }

          alert(errorMessage);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form>
        {!isRegistered && (
          <>
            <label className="label">
              <span className="label-text">Enter username - no spaces!</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.currentTarget.value);
              }}
              className="input bg-transparent input-bordered w-full max-w-xs"
            />
          </>
        )}

        <label className="label">
          <span className="label-text">Enter email</span>
        </label>
        <input
          type="email"
          placeholder="Your email here"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
          className="input bg-transparent input-bordered w-full max-w-xs"
        />

        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input
          type="password"
          placeholder="Top-Secret password"
          name="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.currentTarget.value);
          }}
          className="input bg-transparent input-bordered w-full max-w-xs"
        />

         <label className="label">
          <span className="label-text">Enter Roll No</span>
        </label>
        <input
          type="text"
          placeholder="Roll No"
          name="roll_no"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRollNo(e.currentTarget.value);
          }}
          className="input bg-transparent input-bordered w-full max-w-xs"
        />

            <label className="label">
              <span className="label-text">Select branch</span>
            </label>
            <select
              value={branch}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setBranch(e.currentTarget.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="" disabled>Select your branch</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Electronics And Communication Engineering">Electronics And Communication Engineering</option>
              <option value="ECE Dual">ECE Dual</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Computer Science Engineering">Computer Science Engineering</option>
              <option value="CSE Dual">CSE Dual</option>
              <option value="Material Science">Material Science</option>
              <option value="Engineering Physics">Engineering Physics</option>
              <option value="Mathematics And Computing">Mathematics And Computing</option>
              <option value="Other">Other</option>
            </select> 


        <button className="btn btn-info m-5" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? <span>Taking you in...</span> : (isRegistered ? <span>Login &#8594;</span> : <span>Register</span>)}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
