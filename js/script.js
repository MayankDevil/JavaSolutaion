/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    let content = document.querySelector("#content .container")

    // let content = document.getElementById('content')

    function programDataDisplay(index)
    {
        return (`
            <!-- ${index} -->

            <details>
                <summary> ${programData[index].problem} </summary>
                <div>
                    <pre class="console"> ${programData[index].solution} </pre>
                    <pre class="output"> ${programData[index].comeout} </pre>
                </div>
            </details>
        `)
    }

    for (let i = 0; i < 5; i++)
    {
        content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay(i)} </div>`)
    }

    let searchBar = document.querySelector(" #search #bar ")

    var i = 1;

    searchBar.onkeyup = function()
    {
        console.log(i++)
    }

}
catch(error)
{
    console.log(`${error}`)
}
// the end