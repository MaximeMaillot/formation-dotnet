import fs from "fs"

export function getJSON(filePath) {
    let dataJSON = fs.readFileSync(filePath, (err, data) => {
        if (err == null) {
            return data;
        }
        else
            return err
    });
    return dataJSON;
}