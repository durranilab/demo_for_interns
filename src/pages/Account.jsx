import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Account({params}){

      const { contact } = useLoaderData();

    return <>
    
    ACCOUNT NO  - {contact}
    
    </>
}


export async function loader({ params }) {
    const contact = params.accountId;
    return { contact };
  }