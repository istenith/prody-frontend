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
    };

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

        <button className="btn btn-info m-5" type='submit' disabled={isLoading}>
          {isLoading ? <span>Taking you in...</span> : (isRegistered ? <span>Login &#8594;</span> : <span>Register</span>)}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
