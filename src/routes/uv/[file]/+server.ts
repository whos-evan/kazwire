import fs from 'node:fs';

//@ts-ignore
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";

export async function GET({params}) {
    // find the raw contents of the file
    const file = uvPath + "/" + params.file;
    
    // read the file from the file system
    const data = fs.readFileSync(file)

    // return the response
    return new Response(data, {
        headers: {
            "Content-Type": "text/javascript"
        }
    })
}