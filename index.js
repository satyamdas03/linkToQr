import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {
            message: "type in the url",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url); //default png creation
        qr_svg.pipe(fs.createWriteStream("qr_image.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("the file has been saved");
        });
    });