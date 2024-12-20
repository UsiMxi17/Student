<template >
    <body>
        
    
    <div id="search employee">
        <label for="">Employee Id:</label> 
            <input  type="number" v-model="num" name="empid" id="empid">
            <button @click="switcha">Search</button>
        
    </div>
    <div v-if="bool"  >
        <div v-for="item, in payson.merge" :key="item"  >
            <div v-if="item.employeeId == num"  >
            <div id="heading">
                <h2>Payslip</h2>
            </div>
            <div id="displayBlock" ref="document" >
            <div id="companyDetails">
            <p> Co. Name: ModernTech Solutions  </p>
            <p> Co. Address: 1st Floor, Cradock Heights, 22 Cradock Avenue Rosebank
                    Johannesburg, South Africa </p>
            <p> Business Tel: 212-875-6890 </p>
            </div>
            <div id="employeeDetails">
            <p>  Employee ID: {{item.employeeId}} </p>
            <p>  Employee Name: {{ item.name }} </p>
            <p>  Employee Position: {{ item.position }} </p>
            <p>  Employee Department: {{ item.department }} </p>

            </div>
            <div id="paymentDetails">
            <p>  Date Enaged:{{ da }} </p>
            <p>  Bank Name: Capitec </p>
            <p>  Account Type: Cheque</p>
            <p>  Account No: 4206911</p>
            <p>  Branch Code: 470010 </p>
            <p>  Hourly Rate: R{{ Math.round(item.salary/item.hoursWorked) }}/hr </p>
            </div>
            <div id="earnings">
            <p>  Salary: R{{ item.salary }} </p>
            </div>
            <div id="deductions">
            <p> Leave Days: {{ item.leaveDeductions }} </p>
            <p> Deducted: R{{ item.salary - item.finalSalary }}</p>
            </div>
            <div id="netPay">
            <p> Nett Pay: R{{ item.finalSalary }} </p>
            </div>
            
        </div>
        <div>
            <button @click="print">Download Payslip</button>
        </div>
        </div>
        </div>

    </div>
    
    </body>
</template>

<script>
import json from '@/data/merged_data.json';
import html2pdf from "html2pdf.js";
export default {
    data() {
    return {
        payson: json,
        num: null, // Initialize num to hold employee ID
        bool: false,
    };
    },
    methods: {
    switcha() {
        this.bool = !this.bool; // Toggle the display boolean
    },
    print(){
        html2pdf(document.getElementById("displayBlock"),{
            margin: 1,
            filename:"payslip.pdf"
        })
            
    }

    },
    computed:{

        da(){
            const date = new Date();//initializing the current date

            let day = date.getDate();//day
            let month = date.getMonth() + 1;//month
            let year = date.getFullYear();//year

            day = day < 10 ? '0' + day : day;//if day is less than 2 digits i.e under 10 then add a zero at beginning with ternary 
            month = month < 10 ? '0' + month : month;//same with day but for the month.

            return `${day}/${month}/${year}`//using f-string literal to display info when 'da()' is called.
        }
    }}
</script>
<style scoped >
body{
    max-width: 800px;
    overflow:hidden;
    justify-content:center ;
    margin-left: auto;
    margin-right: auto;
}
#displayBlock{
    background-color: rgb(206, 196, 196);
    justify-content: space-between;
    min-width: 800px;
    
}
#companyDetails{
    padding-top: 10px;
    width:400px;
    height:200px;
    float:left;
    border-width:1px;
    border-style:solid;
    border-color:black;

}
#employeeDetails{
    padding-top: 20px;
    width:400px;
    height:200px;
    float:right;
    border-width:1px;
    border-style:solid;
    border-color:black;

}
#paymentDetails{
    display:block;
    border-width:1px;
    border-style:solid;
    border-color:black;

}
#earnings{
    border-width:1px;
    border-style:solid;
    border-color:black;

}
#deductions{
    border-width:1px;
    border-style:solid;
    border-color:black;
    overflow:hidden;
}
#netPay{
    border-width:1px;
    border-style:solid;
    border-color:black;

}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
</style>
