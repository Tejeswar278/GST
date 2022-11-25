var rakedata = 
    {
        info : {
            company_name : "Deltatech Gaming Limited",
            address : '349, Shankar Chowk Rd, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana 122022',
            GSTIN : 'A1234556677',
            sno: '12345',
            date_and_time_of_supply: '11-11-2022',
            place_of_supply: 'kolkata',
            rate: 18
        },
        user_info: {
            user_id: '12345676',
            name : 'teja',
            address: '349, sector-20, phase-II',
            state: 'Harayana',
            stateCode: '122002',
            GSTIN_UIN: "987654"
        },
        date_data: [
            {
                date : '11-12-2022',
                invoice_no :'9283738392',
                data : [
                    {
                        description: 'ludo',
                        HSN_SAC: '837474',
                        amount: 500,
                        CGST_amount: 10,
                        SGST_amount: 10,
                        rate: 9
                    },
                    {
                        description: 'rummhy',
                        HSN_SAC: '837474',
                        amount: 500,
                        CGST_amount: 10,
                        SGST_amount: 10,
                        rate: 9
                    }
                ],
                Invoice_total: 2300
            },
            {
                date : '12-12-2022',
                invoice_no: '94838943',
                data : [
                    {
                        description: 'cricket',
                        HSN_SAC: '837474',
                        amount: 500,
                        CGST: 10,
                        SGST: 10,
                    },
                    {
                        description: 'ludo',
                        HSN_SAC: '837474',
                        amount: 500,
                        CGST: 10,
                        SGST: 10,
                    }
                ],
                Invoice_total: 2300
            },
        ],
        Invoice_total: 2300,
    }


module.exports = rakedata