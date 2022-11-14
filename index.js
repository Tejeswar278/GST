var fs = require('fs');
var pdf = require('dynamic-html-pdf');
var html = fs.readFileSync('template.html', 'utf8');

const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

pdf.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
})

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
};

var users = [
    {
        name: 'aaa',
        age: 24,
        dob: '1/1/1991'
    },
    {
        name: 'bbb',
        age: 25,
        dob: '1/1/1995'
    },
    {
        name: 'ccc',
        age: 24,
        dob: '1/1/1994'
    }
];

let pdfPromises = [];

for(var i=0;i<users.length; i++){
    var document = {
        type: 'file',     // 'file' or 'buffer'
        template: html,
        context: {
            users: users[i]
        },
        path: `./output${i}.pdf`    // it is not required if type is buffer
    };
    
    pdfPromises[i] = pdf.create(document, options);
}
let mergedPromises = [];
Promise.all(pdfPromises).then(async(result) => {
    for(let i = 0; i < result.length; i++) {
        mergedPromises[i] = await merger.add(`output${i}.pdf`);
    }
    merger.save('merged.pdf'); //save under given name and reset the internal document

});

