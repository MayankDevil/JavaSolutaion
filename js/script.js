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
    -   programData = programData0 + programData1 + programData2 + programData3 + programData4 + programData5 + programData6 + programData7 + programData8 + programData9 + programData10 + programData11 + programData12 + programData13 + programData14 + programData15 + programData16 + programData17
    -   programData = (0 - 17)
    */

    programData = programData.concat(programData0, programData1, programData2, programData3, programData4, programData5, programData6, programData7, programData8, programData9, programData10, programData11, programData12, programData13, programData14, programData15, programData16, programData17)

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
        if (i == programData0.length)
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  basic program */ </h4>`)
        }
        if (i == (programData0.length + programData1.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  Singal dimension array */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  two dimension array */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* applets */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* data conversion */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* delegation event model */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* exception handling */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /*  functions */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* awt */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* inheritance */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* input output */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* interfaces */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length + programData12.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* jdbc */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length + programData12.length + programData13.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* multithreading */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length + programData12.length + programData13.length + programData14.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* oops */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length + programData12.length + programData13.length + programData14.length + programData15.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* packages */ </h4>`)
        }
        if (i == (programData0.length + programData1.length + programData2.length + programData3.length + programData4.length + programData5.length + programData6.length + programData7.length + programData8.length + programData9.length + programData10.length + programData11.length + programData12.length + programData13.length + programData14.length + programData15.length + programData16.length))
        {
            content.insertAdjacentHTML("beforeend",`<h4> /* string */ </h4>`)
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