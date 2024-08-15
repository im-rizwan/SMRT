"use client";
import getFormData from "@/actions/getFormData";

export default function Home() {
  const sendFormData = async () => {
    const data = "data";
    getFormData(data);
  }
  return (
    <>
    
    </>
  );
}
