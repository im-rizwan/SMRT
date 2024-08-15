"use client";
import {Button} from "@/components/ui/button"
import {LoginButton} from "@/components/auth/login-button"
import getFormData from "@/actions/getFormData";

export default function Home() {
  const sendFormData = async () => {
    const data = "data";
    getFormData(data);
  }
  return (
    <>
    
    <main className="flex h-full flex-col items-center justify-center bg-sky-500 text-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
    <LoginButton>
    <Button>
          Sign-in
        </Button>
      
      </LoginButton>    

        
      </div>
      <button onClick={()=>{sendFormData()}}>
      form call
    </button>
    </main>
    </>
  );
}
