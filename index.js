var fs = require('fs');
var pdf = require('dynamic-html-pdf');
var type = "tax_invoice"
// var type = 'credit_note'
// var type = 'test'
var html = fs.readFileSync(`./template/${type}.html`, 'utf8');

const rakedata = require("./data/data")

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

let pdfPromises = [];

for(var i=0;i<rakedata.date_data.length; i++){
    var document = {
        type: 'file',     // 'file' or 'buffer'
        template: html,
        context: {
            rakedata: rakedata,
            users: rakedata.date_data[i],
        },
        path: `./output/output${i}.pdf`    // it is not required if type is buffer
    };
    
    pdfPromises[i] = pdf.create(document, options);
}
let mergedPromises = [];
Promise.all(pdfPromises).then(async(result) => {
    for(let i = 0; i < result.length; i++) {
        mergedPromises[i] = await merger.add(`./output/output${i}.pdf`);
    }
    merger.save('./merged_output/merged.pdf'); //save under given name and reset the internal document

});

