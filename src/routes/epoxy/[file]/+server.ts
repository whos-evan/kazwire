import fs from 'node:fs';

//@ts-ignore
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";

export async function GET({params}) {
    // find the raw contents of the file
    const file = epoxyPath + "/" + params.file;
    
    // read the file from the file system
    const data = fs.readFileSync(file)

    // return the response
    return new Response(data, {
        headers: {
            "Content-Type": "text/javascript"
        }
    })
}