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
        | program data loop to length |
        --------------------------------------------------------------------
    */
    for (let i = 0; i < programData.length; i++)
    {
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