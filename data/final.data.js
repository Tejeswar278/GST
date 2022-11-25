const data = {
            type: "GST_INVOICE", //we will hv to fetch company data from db. vi_gst_master / cp_gst_master
            info: CompanyInfo,
            user_info: user,
            gst_data: [
                {
                    date: '11-12-2022',
                    invoice_no :'9283738392',
                    data: [
                        {
                            description: 'ludo',
                            HSN_SAC: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            amount: 500,
                            CGST: 10,
                            SGST: 10,
                            gst_rate: companyDetails.gst_rate / 2
                        },
                        {
                            description: 'rummy',
                            HSN_SAC: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            amount: 500,
                            CGST: 10,
                            SGST: 10,
                            gst_rate: companyDetails.gst_rate / 2
                        },
                        {
                            description: 'Poker',
                            HSN_SAC: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            amount: 700,
                            CGST: 15,
                            SGST: 15,
                            gst_rate: companyDetails.gst_rate / 2
                        },
                        {
                            description: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            HSN_SAC: '837474',
                            amount: 100,
                            CGST: 5,
                            SGST: 5,
                            gst_rate: companyDetails.gst_rate / 2
                        }
                    ],
                    invoice_total: 1800,
                },
                {
                    date: '12-12-2022',
                    invoice_no :'9283738392',
                    data: [
                        {
                            description: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            HSN_SAC: '837474',
                            amount: 500,
                            CGST: 10,
                            SGST: 10,
                            gst_rate: companyDetails.gst_rate / 2
                        },
                        {
                            description: companyDetails.HSN_SAC ? companyDetails.HSN_SAC : '',
                            HSN_SAC: '837474',
                            amount: 500,
                            CGST: 10,
                            SGST: 10,
                            gst_rate: companyDetails.gst_rate / 2
                        }
                    ],
                    invoice_total: 1000,
                },
            ],
        }
// New
// 12:16
// {
//         user_id: user_data.user_id,
//         name: `${user_data.first_name == null ? "" : user_data.first_name} ${user_data.last_name == null ? "" : user_data.last_name}`,
//         // name: (user_data.first_name == null ? "" : user_data.first_name ) + " " + (user_data.last_name == null ? "" : user_data.last_name ),
//         address: user_data.address == null ? "" : user_data.address,
//         state: stateName,
//         stateCode: user_data.zip_code == null ? "" : user_data.zip_code,
//         GSTIN_UIN: '' //always will be empty. System doesn't capture it as of now.
//     }
// 12:16
// const CompanyInfo = {
//         company_name: companyDetails.company_name,
//         address: companyDetails.address,
//         GSTIN: companyDetails.place_of_supply,
//         place_of_supply: companyDetails.place_of_supply,
//     }