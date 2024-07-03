"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";


function Feedback({params}) {


  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  //-----------------------------------------------
  useEffect(()=>{
        GetFeedback();
    },[])
    const GetFeedback=async()=>{
        const result=await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id);

        console.log(result);
        setFeedbackList(result);
    }
    //-------------------------------------------------
    //-------------------------------------------------
  //   useEffect(() => {
  //   const GetFeedback = async () => {
  //     try {
  //       const result = await db.select()
  //         .from(UserAnswer)
  //         .where(eq(UserAnswer.mockIdRef, params.interviewId))
  //         .orderBy(UserAnswer.id);

  //       console.log(result);
  //       setFeedbackList(result);
  //     } catch (error) {
  //       console.error('Error fetching feedback:', error);
  //     }
  //   };

  //   GetFeedback();
  // }, [params.interviewId]);
  //-----------------------------------------------------------
  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-green-500'>Congratulation</h2>
      <h2 className='font-bold text-2xl'>Here is your interview Feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2>

      <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
    </div>
  )
}

export default Feedback