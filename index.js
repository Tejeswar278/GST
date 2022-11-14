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

for(var i=0;i<users.length; i++){
    var document = {
        type: 'file',     // 'file' or 'buffer'
        template: html,
        context: {
            users: users[i]
        },
        path: `./output${i}.pdf`    // it is not required if type is buffer
    };
    
    pdf.create(document, options)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        });
}

(async () => {
    await merger.add('output0.pdf');
    await merger.add('output1.pdf');
    await merger.add('output2.pdf');  //merge all pages. parameter is the path to file and filename.
    // await merger.add('pdf2.pdf', 2); // merge only page 2
    // await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
    // await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
    // await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
    // await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)
  
    await merger.save('merged.pdf'); //save under given name and reset the internal document
    
    // Export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
  })();