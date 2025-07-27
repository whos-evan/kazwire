import fs from 'node:fs';

//@ts-ignore
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

export async function GET({ params }: { params: { file: string } }) {
    // find the raw contents of the file
    const file = baremuxPath + "/" + params.file;
    
    // read the file from the file system
    const data = fs.readFileSync(file)

    // return the response
    return new Response(data, {
        headers: {
            "Content-Type": "text/javascript"
        }
    })
}