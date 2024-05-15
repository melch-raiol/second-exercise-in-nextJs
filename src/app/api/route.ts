import { NextRequest } from "next/server";

export async function GET(request: Request) {
    return NextRequest.json({ message: "API teste" })
}