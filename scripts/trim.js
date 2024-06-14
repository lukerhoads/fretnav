const fs = require('fs')

async function main() {
    let files = fs.readFileSync("./posts")
    for (let file in files) {
        let content = fs.readFileSync(file)
        content.split("Generated")
        fs.writeFileSync(file, content[0])
    }
}

main()