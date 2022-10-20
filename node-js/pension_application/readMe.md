    1. Auth Micro Service

        Endpoint : localhost:6000/pensioner/get_token
        Method : POST
        Req :
            {
                "username" : "rajeev",
                "password":"admin@123"
            }
        Res :
            {
                "success": 1,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldiIsInBhc3N3b3JkIjoiYWRtaW5AMTIzIiwiYWFkaGFyIjoiMTIzNDU2NzgiLCJpYXQiOjE2NjYyNzE1MzUsImV4cCI6MTY2NjI3MzMzNX0.p7HfoDzWjjAXXO8Zy00ErMkKTg8uehyPH1xDUxErpWk"
            }

    2. Pensioner Details Micro Service

        2.1 Create Pensioner Details

            EndPoint : localhost:6001/pensioner/
            Metho : POST
            Req :
                {
                    "p_name" : "rajeev",
                    "p_dob": "4-6-1957",
                    "p_pan": "123456",
                    "p_aadhar": "12345679",
                    "p_sal_earned": "40000",
                    "p_allowance": "150",
                    "p_pension_type": "self",
                    "p_bank_name": "SBI",
                    "p_bank_acnt": "1234567",
                    "p_bank_type": "public"
                }
            Res :
                {
                    "success": 1,
                    "data": {
                        "p_name": "rajeev",
                        "p_dob": "4-6-1957",
                        "p_pan": "123456",
                        "p_aadhar": 12345679,
                        "p_sal_earned": 40000,
                        "p_allowance": "150",
                        "p_pension_type": "self",
                        "p_bank_name": "SBI",
                        "p_bank_acnt": "1234567",
                        "p_bank_type": "public",
                        "\_id": "635149546e45512e75c55dd1",
                        "\_\_v": 0
                    }
                }
        2.2 Get pensioner Details

            Endpoint : localhost:6001/pensioner/12345679
            Method : GET
            Res:
                {
                    "success": 1,
                    "data": {
                        "\_id": "635149546e45512e75c55dd1",
                        "p_name": "rajeev",
                        "p_dob": "4-6-1957",
                        "p_pan": "123456",
                        "p_aadhar": 12345679,
                        "p_sal_earned": 40000,
                        "p_allowance": "150",
                        "p_pension_type": "self",
                        "p_bank_name": "SBI",
                        "p_bank_acnt": "1234567",
                        "p_bank_type": "public",
                        "\_\_v": 0
                    }
                }

    3. Process Pension Micro Service

        Endpoint : localhost:6002/process_pension/
        Method : POST
        Req :
            {
                "aadhar" : "12345679"
            }
        Res:
            {
                "success": 1,
                "data": {
                    "PensionAmount": 32150,
                    "BankServiceCharge": 500
                }
            }

    4. Pension Managment

        This service is using above services internally

        4.1 Login  - [ Using 1.Auth Micro Service internally]
            Endpoint : localhost:6003/mngmt/login
            Method : POST
            Req :
                {
                    "username" : "rajeev",
                    "password":"admin@123"
                }
            Res :
                {
                    "success": 1,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldiIsInBhc3N3b3JkIjoiYWRtaW5AMTIzIiwiYWFkaGFyIjoiMTIzNDU2NzgiLCJpYXQiOjE2NjYyNzE1MzUsImV4cCI6MTY2NjI3MzMzNX0.p7HfoDzWjjAXXO8Zy00ErMkKTg8uehyPH1xDUxErpWk"
                }

        4.2 Get pensioner details - [Using 2.2 Get pensioner Details internally]
        
            Endpoint : localhost:6003/mngmt/get_pensioner_details
            Method : POST
            Req : Aadhar passed internally after login
            Res :
                {
                    "success": 1,
                    "data": {
                        "_id": "6346c086978992d2ee1c29cb",
                        "p_name": "rajeev",
                        "p_dob": "4-6-1957",
                        "p_pan": "123456",
                        "p_aadhar": 12345678,
                        "p_sal_earned": 40000,
                        "p_allowance": "150",
                        "p_pension_type": "self",
                        "p_bank_name": "SBI",
                        "p_bank_acnt": "1234567",
                        "p_bank_type": "public",
                        "__v": 0
                    }
                }

        4.3 process Pension - [ Using 3. Process Pension Micro Service internally]

            Endpoint : localhost:6003/mngmt/process_pension
            Method : POST
            Req : Aadhar passed internally after login
            Res: 
            {
                "success": 1,
                "data": {
                    "PensionAmount": 32150,
                    "BankServiceCharge": 500
                }
            }

