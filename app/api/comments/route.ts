import { NextRequest } from "next/server";
import { comments } from "./data";
import { redirect } from "next/navigation";

export async function GET(
    request: Request,
    {params}:{params: {id:string}}
) {

    if(parseInt(params.id) > comments.length){
        return redirect("/api/comments")
    }
    return Response.json(comments);
}

export async function POST(request: Request) {
    const body = await request.json();

    const newComment = {
        id: comments.length + 1,
        text: body.text
    }

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
    
}

// export async function GET(request:NextRequest) {
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get("text")

//     console.log(searchParams)
// }