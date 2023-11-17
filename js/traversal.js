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
        
    function programDataDisplay(title, data,name)
    {
        return (`
            <!-- ${title} -->

            <details>
                <summary> ${title} ${data.length} </summary>
                <article id="${name}"></article>
            </details>
        `)
    }

    /*
        --------------------------------------------------------------------
        | program data loop to length OR title set | 
        --------------------------------------------------------------------
    */

    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Program",programData0, "pro")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData1, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData2, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData3, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData4, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData5, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData6, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData7, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData8, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData9, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData10, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData11, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData12, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData13, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData14, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData15, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData16, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functions",programData17, "function")}</div>`);


    function dataTraversal(element,data)
    {
        for (i = 0; i < data.length; i++)
        {    
            element.insertAdjacentHTML("beforeend",`<div> ${data[i].problem} </div>`)

            innerData = element.children

            for (let i = 0; i < innerData.length; i++)
            {
                if (data[i].solution != null)
                {
                    innerData[i].onclick = () => {

                        content.innerHTML = (`

                            <h4> ${data[i].problem} </h4>
                            
                            <pre class='console'> ${data[i].solution} </pre>

                            <img src='data/java/${data[i].comeout}' class='output'/>
                            
                        `)
                    }
                }    
            }
        }
    }

    dataTraversal(document.getElementById('function'),programData0)
    dataTraversal(document.getElementById('function'),programData1)
    dataTraversal(document.getElementById('function'),programData2)
    dataTraversal(document.getElementById('function'),programData3)
    dataTraversal(document.getElementById('function'),programData4)
    dataTraversal(document.getElementById('function'),programData5)
    dataTraversal(document.getElementById('function'),programData6)
    dataTraversal(document.getElementById('function'),programData7)
    dataTraversal(document.getElementById('function'),programData8)
    dataTraversal(document.getElementById('function'),programData9)
    dataTraversal(document.getElementById('function'),programData10)
    dataTraversal(document.getElementById('function'),programData11)
    dataTraversal(document.getElementById('function'),programData12)
    dataTraversal(document.getElementById('function'),programData13)
    dataTraversal(document.getElementById('function'),programData14)
    dataTraversal(document.getElementById('function'),programData15)
    dataTraversal(document.getElementById('function'),programData16)
    dataTraversal(document.getElementById('function'),programData17)

    
    document.title = "MayankDevil"
    
    /*
        --------------------------------------------------------------------
        [ searchbar ] on keypress match sub in data display else none
        --------------------------------------------------------------------
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
    */ 
    //  =====================================================================
}
catch(error)
{
    console.log(`${error}`)
}
// the end