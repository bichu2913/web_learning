let output = document.getElementById("output");

function display(title, content) {

    output.innerHTML += `
        <div class="result">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;

}

// ==========================
// Employee Array
// ==========================

let employees = [
    "John",
    "David",
    "Sarah",
    "Michael",
    "Emma"
];

// 1 & 2
display("Employee List", employees.join(", "));
display("Total Employees", employees.length);

// 3
employees.push("Chris");
display("After Push()", employees.join(", "));

// 4
employees.unshift("Alex");
display("After Unshift()", employees.join(", "));

// 5
employees.pop();
display("After Pop()", employees.join(", "));

// 6
employees.shift();
display("After Shift()", employees.join(", "));

// 7
let index = employees.indexOf("Sarah");
display("Index of Sarah", index);

// 8
display("Employee Exists",
    employees.includes("David") ? "Yes" : "No");

// 9
let departments = [
    "HR",
    "Finance",
    "IT"
];

let combined = employees.concat(departments);

display("Combined Array",
    combined.join(", "));

// 10
display("Join()",
    employees.join(" | "));

// 11
display("Slice(1,4)",
    employees.slice(1,4).join(", "));

// 12
employees.splice(2,1,"Sophia");

display("After Splice()",
    employees.join(", "));

// 13
employees.sort();

display("Sorted Employees",
    employees.join(", "));

// 14
employees.reverse();

display("Reverse Employees",
    employees.join(", "));

// ==========================
// String Operations
// ==========================

let employeeName = "   John David   ";

display("Original String",
    employeeName);

display("Length",
    employeeName.length);

display("Uppercase",
    employeeName.toUpperCase());

display("Lowercase",
    employeeName.toLowerCase());

display("Trim()",
    employeeName.trim());

display("Trim Start()",
    employeeName.trimStart());

display("Trim End()",
    employeeName.trimEnd());

display("Character at Index 2",
    employeeName.charAt(2));

display("Last Character",
    employeeName.at(-1));

display("First Index of 'a'",
    employeeName.indexOf("a"));

display("Last Index of 'a'",
    employeeName.lastIndexOf("a"));

display("Contains 'John'",
    employeeName.includes("John"));

display("Starts With ' '",
    employeeName.startsWith(" "));

display("Ends With ' '",
    employeeName.endsWith(" "));

display("Slice()",
    employeeName.slice(3,7));

display("Substring()",
    employeeName.substring(3,7));

display("Replace()",
    employeeName.replace("John","James"));

display("Replace All Spaces",
    employeeName.replaceAll(" ","-"));

display("Concat()",
    employeeName.concat(" - OpenAI Pvt Ltd"));

display("Split()",
    employeeName.trim().split(" "));

display("Repeat()",
    employeeName.trim().repeat(3));