// Using API for conversion 
import{auth} from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {ChatCompletionFunctions, ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai";

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai=new OpenAIApi(configuration);



export async function POST(
    req:Request

){
  try{
    

    //Check for Authentication
    const {userId}=auth();
    
    const body=await req.json();
    const {messages}=body;

    //If not authenticated user
    if(!userId) {
        return new NextResponse("Unauthorized", {status:401})
    }

    //Not configured api key

    if (!configuration.apiKey) {
        return new NextResponse("OpenAI API Key not configured.", { status: 500 });
      }
  

    if (!messages) {
        return new NextResponse("Messages are required", { status: 400 });
      }


      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages
      });

     //return reponse - first in the array
     return NextResponse.json(response.data.choices[0].message);

  } catch(error) {
    console.log("[CONVERSATION_ERROR]",error);
    return new NextResponse("Internal error",{status:500})
  } 
}