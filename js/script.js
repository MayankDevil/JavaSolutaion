/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    let content = document.querySelector("#content .container")

    let searchBar = document.querySelector(" #search #bar ")

    let programData = new Array();

    /*
    -   Fetch & Contact multiple program Data
    -   programData = programData0 + programData1
    */

    programData = programData.concat(programData0, programData1, programData2, programData3, programData4, programData5, programData6, programData7)

    /*
        --------------------------------------------------------------------
        [ program data display ] function return layout
        --------------------------------------------------------------------
    */
    function programDataDisplay(index)
    {
        return (`
            <!-- ${index} -->

            <details>
                <summary> ${programData[index].problem} </summary>
                <div>
                    <pre class="console"> ${programData[index].solution} </pre>
                    <pre class="output"> javac source.java\n java bytecode\n ${programData[index].comeout} </pre>
                </div>
            </details>
        `)
    }
    /*
        --------------------------------------------------------------------
        | program data loop to length OR title set |
        --------------------------------------------------------------------
    */
    for (let i = 0; i < programData.length; i++)
    {
        if (i == 0)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  assign program */ </h4>`)
        }
        if (i == 9)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  basic program */ </h4>`)
        }
        if (i == 148)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  Singal dimension array */ </h4>`)
        }
        if (i == 171)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  two dimension array */ </h4>`)
        }
        if (i == 184)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* applets */ </h4>`)
        }
        if (i == 184)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*   */ </h4>`)
        }
        if (i == 184)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*   */ </h4>`)
        }
        if (i == 184)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*   */ </h4>`)
        }
        content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay(i)} </div>`)
    }
    document.title = "MayankDevil"
    
    /*
        --------------------------------------------------------------------
        [ searchbar ] on keypress match sub in data display else none
        --------------------------------------------------------------------
    */ 
    searchBar.onkeyup = function()
    {
        let search = searchBar.value.toUpperCase();

        let data_list = document.querySelectorAll('#content .container details')
        
        for(let i = 0; i < data_list.length; i++)
        {
            element = data_list[i].querySelector("summary")

            let  data = element.innerContent || element.innerHTML

            if(data.toUpperCase().indexOf(search) > -1)
            {
                data_list[i].style.display = '';
            }
            else
            {
                data_list[i].style.display = 'none';
            }
        }
    }
    //  =====================================================================
}
catch(error)
{
    console.log(`${error}`)
}
// the end