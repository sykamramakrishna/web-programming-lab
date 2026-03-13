// Function to calculate Simple Interest
function calculateSI()
{
    // Get input values
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseFloat(document.getElementById("time").value);

    // Simple Interest Formula
    var si = (p * r * t) / 100;

    // Display result
    document.getElementById("result").innerHTML =
    "Simple Interest = " + si;
}