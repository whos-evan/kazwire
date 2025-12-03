import fs from 'node:fs';

//@ts-ignore
import { scramjetPath } from "@mercuryworkshop/scramjet/path";

export async function GET({params}) {
    // find the raw contents of the file
    const file = scramjetPath + "/" + params.file;
    
    // read the file from the file system
    const data = fs.readFileSync(file)

    // return the response
    return new Response(data, {
        headers: {
            "Content-Type": "text/javascript"
        }
    })
}