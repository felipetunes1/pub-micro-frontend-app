export default {
   "name": "root",
   "children": [
      {
         "name": "We Ship Anything Inc - Prod",
         "description": "Production",
         "id": "1",
         "datecreated": "2010-10-10",
         "installid": "WeShipAnythingProd",
         "showchildren": "1",
         "children": [
            {
               "name": "UAT EU",
               "description": "User acceptance testing EU",
               "id": "2",
               "datecreated": "2018-7-05",
               "showchildren": "1",
               "children": [
                  {
                     "name": "Dev EU 1",
                     "id": "3",
                     "description": "Development environment for EU West 1",
                     "datecreated": "2018-7-10",
                     "showchildren": "1",
                     "children": []
                  },
                  {
                     "name": "Dev EU 2",
                     "id": "11",
                     "description": "Development environment for EU West 2",
                     "datecreated": "2018-7-11",
                     "showchildren": "1",
                     "children": []
                  },
                  {
                     "name": "Dev EU 3",
                     "id": "12",
                     "description": "Development environment for Mother Russia",
                     "datecreated": "2018-7-13",
                     "showchildren": "1",
                     "children": []
                  }
               ]
            },
            {
               "name": "UAT US",
               "id": "4",
               "description": "User acceptance testing US",
               "datecreated": "2018-7-12",
               "showchildren": "1",
               "children": [
                  {
                     "name": "Dev US 1",
                     "description": "Development environment for US East",
                     "id": "5",
                     "datecreated": "2018-7-13",
                     "showchildren": "1",
                     "children": []
                  },
                  {
                     "name": "Dev US 2",
                     "description": "Development environment for US West",
                     "id": "13",
                     "datecreated": "2018-7-13",
                     "showchildren": "1",
                     "children": []
                  }
               ]
            }
         ]
      },
      {
         "name": "TinyBank Inc Production",
         "description": "TinyBank Prod",
         "datecreated": "2002-03-13",
         "installid": "TinyProd",
         "id": "6",
         "showchildren": "1",
         "children": [
            {
               "name": "Tiny Test",
               "description": "Can you believe we actually have a test environment?",
               "datecreated": "2018-06-20",
               "id": "7",
               "showchildren": "1",
               "children": [
                  {
                     "name": "Dev",
                     "id": "8",
                     "datecreated": "2018-06-20",
                     "showchildren": "1",
                     "children": []
                  }
               ]
            }
         ]
      }
   ]
}